const { MessageActionRow, MessageSelectMenu, MessageEmbed } = require('discord.js');
const { roleId } = require("../../config/dropdownRole/dropdownRole.json");

module.exports = {
    name: 'roles',
    aliases: ["newsping", "r"],
    utilisation: '{prefix}roles',

    async execute(client, message, args) {

        const rowRoles = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('rolesdropdown')
                    .setPlaceholder('Click here to Add or Remove the Role.')
                    .addOptions([
                        {
                            label: 'Add The Role',
                            description: 'Adds the role to your account on this server.',
                            value: 'addR',
                            emoji: '➕', // Using a standard Unicode emoji
                        },
                        {
                            label: 'Remove The Role',
                            description: 'Removes the role to your account on this server.',
                            value: 'removeR',
                            emoji: '➖', // Using a standard Unicode emoji
                        },
                    ]),
            );

        const embed = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle(client.user.username + " - DropDown Role:")
            .setDescription(`• The current role on the DataBase is: <@&${roleId}> (\`${roleId}\`).\n\n**Click on the Select menu below to __Add__ or __Remove__ the Role.**`)
            .setTimestamp()
            .setColor("BLUE");

        await message.reply({ embeds: [embed], components: [rowRoles] });

        const embedGiven = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setDescription("**Done!** Successfully __Added__ the role to your account.")
            .setColor("GREEN");

        const embedAlreadyGiven = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setDescription("You already have that Role.")
            .setColor("YELLOW");

        const embedRemoved = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setDescription("**Done!** Successfully __Removed__ the role to your account.")
            .setColor("GREEN");

        const embedAlreadyRemoved = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setDescription("You already don't have that Role.")
            .setColor("YELLOW");

        const collectorRoles = message.channel.createMessageComponentCollector({
            componentType: "SELECT_MENU",
            filter: i => i.user.id === message.author.id, // Only the user who ran the command can interact
            time: 60000, // Optional: Collect interactions for 60 seconds
        });

        collectorRoles.on("collect", async (collectedRoles) => {
            const value = collectedRoles.values[0];
            const user = collectedRoles.member;
            const role = collectedRoles.guild.roles.cache.get(roleId);

            if (!role) {
                return console.log("[WARN] The role does not exist on this server!");
            }

            if (value === "addR") {
                if (!user.roles.cache.has(role.id)) {
                    await collectedRoles.member.roles.add(role).catch(err => console.log("[Error Handled]"));
                    await collectedRoles.reply({ embeds: [embedGiven], ephemeral: true }).catch(err => console.log("[Error Handled]"));
                } else {
                    await collectedRoles.reply({ embeds: [embedAlreadyGiven], ephemeral: true }).catch(err => console.log("[Error Handled]"));
                }
            } else if (value === "removeR") {
                if (user.roles.cache.has(role.id)) {
                    await collectedRoles.member.roles.remove(role).catch(err => console.log("[Error Handled]"));
                    await collectedRoles.reply({ embeds: [embedRemoved], ephemeral: true }).catch(err => console.log("[Error Handled]"));
                } else {
                    await collectedRoles.reply({ embeds: [embedAlreadyRemoved], ephemeral: true }).catch(err => console.log("[Error Handled]"));
                }
            }
        });

        collectorRoles.on('end', collected => {
            if (collected.size === 0) {
                // Optional: Handle what happens when no one interacts with the menu
                // message.editReply({ components: [] }).catch(err => console.log("[Error Handled]"));
            }
        });
    },
};