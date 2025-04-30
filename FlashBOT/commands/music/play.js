const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play <URL>',
    description: 'Rejoint votre salon vocal et joue l\'audio à partir d\'un lien YouTube ou autre.',

    execute(client, message, args) {
        message.reply('Cette commande ne fonctionne plus.');
    },
    };