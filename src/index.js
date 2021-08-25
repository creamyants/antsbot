const Discord = require("discord.js");

const config = require("./Data/config.json");

const intents = new Discord.Intents(32767);

const client = new Discord.Client({ intents: intents });

client.on("ready", () => console.log("Bot is online!"));

client.on("messageCreate", message => {

    if (message.content == "i love you ants bot") message.reply("i love you too");

});




client.login(config.token);

