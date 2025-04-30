module.exports = {
    name: 'tempsrp',
    aliases: ['trp'],
    utilisation: '{prefix}tempsrp',
    description: 'Affiche l\'heure actuelle dans le contexte du roleplay de Nova Life.',
    categorie: 'Nova Life',

    async execute(client, message, args) {
        // Heure de base (vous pouvez la modifier)
        const baseHeure = 10;
        const baseMinute = 30;

        // Ajouter un décalage aléatoire (pour rendre ça un peu moins statique)
        const decalageHeure = Math.floor(Math.random() * 3) - 1; // -1, 0 ou 1
        const decalageMinute = Math.floor(Math.random() * 30) - 15; // Entre -15 et 15

        let heureRP = baseHeure + decalageHeure;
        let minuteRP = baseMinute + decalageMinute;

        // S'assurer que les minutes restent entre 0 et 59
        if (minuteRP < 0) {
            minuteRP += 60;
            heureRP -= 1;
        } else if (minuteRP >= 60) {
            minuteRP -= 60;
            heureRP += 1;
        }

        // S'assurer que les heures restent dans une plage raisonnable (par exemple 0 à 23)
        heureRP = (heureRP + 24) % 24; // Pour gérer les valeurs négatives et supérieures à 23

        const heureFormattee = String(heureRP).padStart(2, '0');
        const minuteFormattee = String(minuteRP).padStart(2, '0');

        message.reply(`L'heure en Nova Life est actuellement : **${heureFormattee}h${minuteFormattee}**.`);
    },
};