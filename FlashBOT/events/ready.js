const { clientActivity } = require("../config.json");
const ms = require("ms");

module.exports = (client, message) => {
  
  console.log(`[Client] ${client.user.tag} is Ready to use!`)
  
  client.user.setActivity(clientActivity);
  
  console.log(`[Client] Replit took ${ms(ms(Math.round(process.uptime() - (client.uptime/1000))+'s'))} to Load the Bot.`)
  
};