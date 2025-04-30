const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'user-id',
    aliases: ["userid"],
    utilisation: '{prefix}userid',

    execute(client, message, args) {
      
      const user = message.mentions.members.first();

      if(!user){

        const embed1 = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setDescription(`Your Account ID is: \`${message.author.id}\``)

        message.reply({ embeds: [embed1] });
        
      } else {

        const embed2 = new MessageEmbed()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
          .setDescription(`${user}'s Account ID is: \`${user.user.id}\``)

        message.reply({ embeds: [embed2] });
        
      }
          
    },
};