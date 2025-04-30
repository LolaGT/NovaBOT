const { MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton } = require('discord.js');
const { prefix } = require("../../config.json");

const commandsEmbedsColor = "RANDOM";

module.exports = {
    name: 'help',
    aliases: ["h", "commands", "cmd", "cmds"],
    utilisation: '{prefix}help',

    async execute(client, message, args) {

        const embedMenu = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle(client.user.username + " - Help Menu:")
            .setDescription(`Hey ${message.author}, Thanks for using **${client.user.username}** for today! Select the commands category from the select menu below.`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("GREEN");

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('select')
                    .setPlaceholder('Click here to Select a Command Category!')
                    .addOptions([
                        {
                            label: 'Fun',
                            description: 'Shows a list of Fun Commands.',
                            value: 'fun', // Changed value to be unique
                            emoji: "😂",
                        },
                        {
                            label: 'Games',
                            description: 'Shows a list of Games Commands.',
                            value: 'games', // Changed value to be unique
                            emoji: "🎮",
                        },
                        {
                            label: 'General',
                            description: 'Shows a list of General Commands.',
                            value: 'general', // Changed value to be unique
                            emoji: "🤖",
                        },
                        {
                            label: 'Image',
                            description: 'Shows a list of Image Commands.',
                            value: 'image', // Changed value to be unique
                            emoji: "📸",
                        },
                        {
                            label: 'Information',
                            description: 'Shows a list of Info Commands.',
                            value: 'info', // Changed value to be unique
                            emoji: "ℹ️",
                        },
                        {
                            label: 'Nova Life',
                            description: 'Shows a list of Nova Life Commands.',
                            value: 'novalife', // Changed value to be unique
                            emoji: "🏡",
                        },
                        {
                            label: 'Nova Life Staff',
                            description: 'Shows a list of Nova Life Staff Commands.',
                            value: 'novalifestaff', // Changed value to be unique
                            emoji: "🔨",
                        },
                        {
                            label: 'Moderation',
                            description: 'Shows a list of Moderation Commands.',
                            value: 'moderation', // Changed value to be unique
                            emoji: "⚒",
                        },
                        {
                            label: 'Utility',
                            description: 'Shows a list of Utility Commands.',
                            value: 'utility', // Changed value to be unique
                            emoji: "⚙️",
                        },
                        {
                            label: 'Musique',
                            description: 'Shows a list of Music Commands.',
                            value: 'musique', // Changed value to be unique
                            emoji: "🎵",
                        },
                    ]),
            );

        await message.reply({ embeds: [embedMenu], components: [row] });

        const embed1 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Fun Commands:")
            .addFields(
                { name: "• 8ball", value: `\`${prefix}8ball\``, inline: true },
                { name: "• random_color", value: `\`${prefix}randomc\``, inline: true },
                { name: "• random_number", value: `\`${prefix}randomn\``, inline: true },
                { name: "• ship", value: `\`${prefix}ship\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed2 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Games Commands:")
            .addFields(
                { name: "• find_the_number", value: `\`${prefix}number\``, inline: true },
                { name: "• secret_number", value: `\`${prefix}sn\``, inline: true },
                { name: "• youtube_together", value: `\`${prefix}ytt\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed3 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("General Commands:")
            .addFields(
                { name: "• avatar", value: `\`${prefix}av\``, inline: true },
                { name: "• ping", value: `\`${prefix}ping\``, inline: true },
                { name: "• server_icon", value: `\`${prefix}servericon\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed4 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Image Commands:")
            .addFields(
                { name: "• meme", value: `\`${prefix}meme\``, inline: true },
                { name: "• troll", value: `\`${prefix}troll\``, inline: true },
                { name: "• yt_comment", value: `\`${prefix}ytc\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed5 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Info Commands:")
            .addFields(
                { name: "• help", value: `\`${prefix}h\``, inline: true },
                { name: "• member_count", value: `\`${prefix}memberc\``, inline: true },
                { name: "• role_info", value: `\`${prefix}rolei\``, inline: true },
                { name: "• server_info", value: `\`${prefix}serveri\``, inline: true },
                { name: "• uptime", value: `\`${prefix}up\``, inline: true },
                { name: "• user_id", value: `\`${prefix}userid\``, inline: true },
                { name: "• user_info", value: `\`${prefix}useri\``, inline: true },
                { name: "• warnings", value: `\`${prefix}warns\``, inline: true },
                { name: "• weather", value: `\`${prefix}weather\``, inline: true },
                { name: "• yt_search", value: `\`${prefix}ytse\``, inline: true },
                { name: "• yt_stats", value: `\`${prefix}ytst\``, inline: true },
                { name: "• infoserveur", value: `\`${prefix}si\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed6 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Nova Life Commands:")
            .addFields(
                { name: "• localisation", value: `\`${prefix}loc\``, inline: true },
                { name: "• tempsrp", value: `\`${prefix}trp\``, inline: true },
                { name: "• temps", value: `\`${prefix}tmp\``, inline: true },
                { name: "• agenda", value: `\`${prefix}agd\``, inline: true }
            )
            .setColor(commandsEmbedsColor);

        const embed7 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Nova Life Staffs Commands:")
            .addFields(
                { name: "• service", value: `\`${prefix}sa\``, inline: true },
                { name: "• unservice", value: `\`${prefix}us\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed8 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Moderation Commands:")
            .addFields(
                { name: "• ban", value: `\`${prefix}b\``, inline: true },
                { name: "• dm", value: `\`${prefix}dm\``, inline: true },
                { name: "• kick", value: `\`${prefix}k\``, inline: true },
                { name: "• mute", value: `\`${prefix}m\``, inline: true },
                { name: "• nick", value: `\`${prefix}n\``, inline: true },
                { name: "• purge", value: `\`${prefix}p\``, inline: true },
                { name: "• remove_timeout", value: `\`${prefix}rtm\``, inline: true },
                { name: "• remove_warning", value: `\`${prefix}rw\``, inline: true },
                { name: "• role_add", value: `\`${prefix}ra\``, inline: true },
                { name: "• role_remove", value: `\`${prefix}rm\``, inline: true },
                { name: "• slowmode", value: `\`${prefix}sm\``, inline: true },
                { name: "• timeout", value: `\`${prefix}tm\``, inline: true },
                { name: "• unmute", value: `\`${prefix}unm\``, inline: true },
                { name: "• warn", value: `\`${prefix}w\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed9 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Utility Commands:")
            .addFields(
                { name: "• calculate", value: `\`${prefix}calc\``, inline: true },
                { name: "• dropdown_role", value: `\`${prefix}r\``, inline: true },
                { name: "• suggest", value: `\`${prefix}suggest\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const embed10 = new MessageEmbed()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
            .setTitle("Music Commands:")
            .addFields(
                { name: "• play", value: `\`${prefix}play <lien_youtube>\``, inline: true },
                { name: "• stop", value: `\`${prefix}stop\``, inline: true },
            )
            .setColor(commandsEmbedsColor);

        const collector = message.channel.createMessageComponentCollector({
            componentType: "SELECT_MENU"
        })

        collector.on("collect", async (collected) => {
            const value = collected.values[0];
            console.log(`Valeur sélectionnée: ${value}`); // Ajout de logs

            if (value === "fun") {
                console.log("Tentative de répondre avec embed1");
                await collected.reply({ embeds: [embed1], ephemeral: true });
            }

            if (value === "games") {
                console.log("Tentative de répondre avec embed2");
                await collected.reply({ embeds: [embed2], ephemeral: true });
            }

            if (value === "general") {
                console.log("Tentative de répondre avec embed3");
                await collected.reply({ embeds: [embed3], ephemeral: true });
            }

            if (value === "image") {
                console.log("Tentative de répondre avec embed4");
                await collected.reply({ embeds: [embed4], ephemeral: true });
            }

            if (value === "info") {
                console.log("Tentative de répondre avec embed5");
                await collected.reply({ embeds: [embed5], ephemeral: true });
            }

            if (value === "novalife") {
                console.log("Tentative de répondre avec embed6");
                await collected.reply({ embeds: [embed6], ephemeral: true });
            }

            if (value === "novalifestaff") {
                console.log("Tentative de répondre avec embed7");
                await collected.reply({ embeds: [embed7], ephemeral: true });
            }

            if (value === "moderation") {
                console.log("Tentative de répondre avec embed8");
                await collected.reply({ embeds: [embed8], ephemeral: true });
            }
            if (value === "utility") {
                console.log("Tentative de répondre avec embed9");
                await collected.reply({ embeds: [embed9], ephemeral: true });
            }
            if (value === "musique") {
                console.log("Tentative de répondre avec embed10");
                await collected.reply({ embeds: [embed10], ephemeral: true });
            }
        });
    },
};