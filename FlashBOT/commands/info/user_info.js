const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    aliases: ["useri"],
    utilisation: '{prefix}userinfo',

    execute(client, message, args) {
      
      const member = message.mentions.members.first() || message.member;

      try {
        
      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle(`${member.user.tag}'s Information:`)
        .setColor("BLURPLE")
        .setThumbnail(member.user.displayAvatarURL())
        .addField("• Full Name:", member.user.tag, true)
        .addField("• ID:", `${member.id}`, true)
        .addField(`• Avatar URL:`, `[Click Here.](${member.user.displayAvatarURL()})`, true)
        .addField("• Joined Server At:", member.joinedAt.toDateString())
        .addField("• Joined Discord At:", member.user.createdAt.toDateString())
        .setFooter(message.member.displayName, message.author.displayAvatarURL(), true)
        .setTimestamp();

      message.reply({ embeds: [embed]});
        
      } catch (e) {
        
        message.reply(`**ERROR:** ${e}`)
        
      }
          
    },
};