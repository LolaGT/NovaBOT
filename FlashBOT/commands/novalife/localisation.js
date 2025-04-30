const localisations = new Map(); // Stockage temporaire des localisations (ID utilisateur => localisation)

module.exports = {
    name: 'localisation',
    aliases: ['loc'],
    utilisation: '{prefix}localisation <set|voir|effacer> [localisation/utilisateur]',
    description: 'Permet de gérer et de voir les localisations des personnages en RP.',
    categorie: 'Nova Life', // Vous pouvez organiser vos commandes par catégorie dans votre commande d'aide

    async execute(client, message, args) {
        const action = args[0];
        const argument = args.slice(1).join(' ');

        if (!action) {
            return message.reply("Veuillez spécifier une action : `set`, `voir`, ou `effacer`.");
        }

        if (action.toLowerCase() === 'set') {
            if (!argument) {
                return message.reply("Veuillez spécifier la localisation de votre personnage.");
            }
            localisations.set(message.author.id, argument);
            message.reply(`Votre localisation a été définie sur : **${argument}**.`);
        } else if (action.toLowerCase() === 'voir') {
            const utilisateurMentionné = message.mentions.users.first();
            let utilisateurCible = message.author;

            if (utilisateurMentionné) {
                utilisateurCible = utilisateurMentionné;
            }

            const localisationCible = localisations.get(utilisateurCible.id);

            if (localisationCible) {
                message.reply(`${utilisateurCible.username} se trouve actuellement à : **${localisationCible}**.`);
            } else {
                if (utilisateurCible.id === message.author.id) {
                    message.reply("Vous n'avez pas encore défini votre localisation.");
                } else {
                    message.reply(`${utilisateurCible.username} n'a pas encore défini sa localisation.`);
                }
            }
        } else if (action.toLowerCase() === 'effacer') {
            if (localisations.has(message.author.id)) {
                localisations.delete(message.author.id);
                message.reply("Votre localisation a été effacée.");
            } else {
                message.reply("Vous n'aviez pas de localisation définie.");
            }
        } else {
            message.reply("Action invalide. Utilisez `set`, `voir`, ou `effacer`.");
        }
    },
};