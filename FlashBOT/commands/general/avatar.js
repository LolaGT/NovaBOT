const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ["av"],
    utilisation: '{prefix}avatar',

    execute(client, message, args) {

        const user = message.mentions.members.first();

        if(!user){

            const embed1 = new MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
                .setDescription("Here is your Account Avatar!")
                .setImage(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))

            const row1 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
                        .setLabel('Avatar URL')
                        .setEmoji("🔗")
                        .setStyle('LINK'),
                );

            message.reply({ embeds: [embed1], components: [row1]})

        } else {

            const embed2 = new MessageEmbed()
                .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
                .setDescription(`Here is ${user}'s Avatar!`)
                .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))

            const row2 = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setURL(user.displayAvatarURL({ dynamic: true, size: 4096 }))
                        .setLabel('Avatar URL')
                        .setEmoji("🔗")
                        .setStyle('LINK'),
                );

            message.reply({ embeds: [embed2], components: [row2]})

        }

    },
};