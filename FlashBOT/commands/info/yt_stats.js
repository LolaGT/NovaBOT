const fetch = require("node-superfetch");
const apiKey = process.env.YT_API;
const Discord = require("discord.js"); // Used this Because "Discord" constructor requires for: ".toLocaleString()" and "new Date()".

module.exports = {
    name: 'yt-stats',
    aliases: ["ytst"],
    utilisation: '{prefix}yt-stats',

    async execute(client, message, args) {

      if(!apiKey) return message.reply("Can't execute the command because the Youtube API Key is not Found.")

      let name = args.join(" ");

      if(!name) return message.reply("Please provide a channel name.")

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=${apiKey}&maxResults=1&type=channel`).catch(() => message.reply("An API Error has Occured."));

      if(!channel.body.items[0]) return message.reply("Channel not Found.")

      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=${apiKey}`).catch(e => console.log(e));

      const embed = new Discord.MessageEmbed()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL() })
        .setTitle("YT Channel Stats:")
        .setColor("RED")
        .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)
        .addFields(
          { name: "• Channel Name:", value: `${channel.body.items[0].snippet.channelTitle}`, inline: true },
          { name: "• Channel Description:", value: `${channel.body.items[0].snippet.description}`, inline: true },
          { name: "• Subscribers:", value: `\`${parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString()}\``, inline: true },
          { name: "• Total Views:", value: `\`${parseInt(data.body.items[0].statistics.viewCount).toLocaleString()}\``, inline: true },
          { name: "• Total Video(s):", value: `\`${parseInt(data.body.items[0].statistics.videoCount)}\``, inline: true },
          { name: "• Channel Created At:", value: `${new Date(channel.body.items[0].snippet.publishedAt).toDateString()}`, inline: true },
        )
        .setFooter("Command Idea from: Blob Project (Credits)")
        .setTimestamp();

      message.reply({ embeds: [embed] })
          
    },
};