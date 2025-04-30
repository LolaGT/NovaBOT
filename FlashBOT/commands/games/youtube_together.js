const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'youtube-together',
    aliases: ["ytt", "yt-together"],
    utilisation: '{prefix}youtube-together',

    execute(client, message, args) {

      const channel = message.member.voice.channel;

      const noChannel = new MessageEmbed()
        .setDescription("Please join a voice channel.")
        .setColor("RED");

      const failStartActivity = new MessageEmbed()
        .setDescription("Couldn't start the activity.")
        .setColor("RED");

      if (!channel) return message.reply({ embeds: [noChannel] });

      fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
        method: "POST",
        body: JSON.stringify({
          max_age: 86400,
          max_uses: 0,
          target_application_id: "880218394199220334", // Old: 755600276941176913
          target_type: 2,
          temporary: false,
          validate: null
        }),
          headers: {
            "Authorization": `Bot ${client.token}`,
            "Content-Type": "application/json"
          }
        }).then(res => res.json()).then(invite => {
        
      if (!invite.code) return message.reply({ embeds: [failStartActivity] });

      const embed = new MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("Youtube Together")
        .setDescription("Are you sure that you want to start the activity?")
        .setTimestamp();

      let button = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setStyle("SUCCESS")
            .setLabel("Start Activity")
            .setCustomId("start"),
          new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("End Interaction")
            .setCustomId("stop"),
          new MessageButton()
            .setStyle("PRIMARY")
            .setLabel("Other Activities (Soon)")
            .setDisabled(true) // Set disabled because there is no other activities on this bot.
            .setCustomId("ERROR")
        )

      let buttonDisabled = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Start Activity")
            .setDisabled(true)
            .setCustomId("start"),
          new MessageButton()
            .setStyle("DANGER")
            .setLabel("End Interaction")
            .setDisabled(true)
            .setCustomId("stop"),
          new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Other Activities (Soon)")
            .setDisabled(true)
            .setCustomId("ERROR")
        )

      let buttonStarted = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Start Activity")
            .setDisabled(true)
            .setCustomId("start"),
          new MessageButton()
            .setStyle("DANGER")
            .setLabel("End Interaction")
            .setCustomId("stop"),
          new MessageButton()
            .setStyle("SECONDARY")
            .setLabel("Other Activities (Soon)")
            .setDisabled(true)
            .setCustomId("ERROR")
        )

      message.reply({embeds:[embed], components:[button]}).then(async Message => {
                    
        const filter = i =>  i.user.id === message.author.id
        
        let col = await Message.createMessageComponentCollector({filter, time: 1200000 });
            
        col.on('collect', async(button) => {
          if(button.user.id !== message.author.id) return
                    
            switch (button.customId) {
              case 'start':

                const embedStarted = new MessageEmbed()
                  .setDescription(`[Click here](https://discord.com/invite/${invite.code}) to start the activity, or click on the link above.`)
                  .setColor("RED")
                
                button.reply({embeds: [embedStarted], content: `https://discord.com/invite/${invite.code}`, ephemeral: true}).catch(e => { }); 

                Message.edit({ components: [buttonStarted]})
                
                break
              case 'stop':
                
                Message.edit({ components: [buttonDisabled]})
                
                const embedStopped = new MessageEmbed()
                  .setDescription("**Interaction Stopped!** Youtube Together Activity will not start, or this Interaction will not work until you execute this command again.")
                  .setColor("RED")
                
                button.reply({embeds: [embedStopped], ephemeral: true}).catch(e => { }); 
                
                break
            
            }
        })
    }).catch(e => { });

      //message.reply(`https://discord.com/invite/${invite.code}`);

      })
          
    },
};