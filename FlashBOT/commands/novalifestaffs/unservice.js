// unservice.js
require('dotenv').config(); // Charge les variables d'environnement depuis .env

const serviceStaffRoleId = process.env.SERVICE_STAFF_ROLE_ID;
const authorizedRoleIds = [
    '1173919701060042782',
    '1366360986033848416',
    '1073276953647398942',
    '1072941562134282371',
    '1366360840642498632',
    '1366365649777201242',
];

module.exports = {
    name: 'unservice',
    aliases: ['us', 'usa'],
    utilisation: '{prefix}unservice',
    description: 'Vous retire le rôle Service Staff pour indiquer que vous n\'êtes plus en service (rôles staff autorisés uniquement).',
    categorie: 'Nova Life',

    async execute(client, message, args) {
        if (!serviceStaffRoleId) {
            return message.reply("L'ID du rôle 'Service Staff' n'est pas configuré dans le fichier `.env`.");
        }

        const serviceRole = message.guild.roles.cache.get(serviceStaffRoleId);
        const member = message.member;

        if (!serviceRole) {
            return message.reply("Le rôle 'Service Staff' n'a pas été trouvé sur ce serveur.");
        }

        // Vérifie si le membre a l'un des rôles autorisés
        const isAuthorized = member.roles.cache.some(role => authorizedRoleIds.includes(role.id));
        if (!isAuthorized) {
            return message.reply("Seuls les membres avec un rôle staff autorisé peuvent utiliser cette commande.");
        }

        if (!member.roles.cache.has(serviceRole.id)) {
            return message.reply("Vous n'avez pas le rôle 'Service Staff'. Utilisez `!service` pour l'obtenir.");
        }

        try {
            await member.roles.remove(serviceRole);
            message.reply(`${message.author.tag} n'a plus le rôle 'Service Staff'.`);
        } catch (error) {
            console.error('Erreur lors de la suppression du rôle :', error);
            message.reply('Une erreur est survenue lors de la suppression du rôle.');
        }
    },
};