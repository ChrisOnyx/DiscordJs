// Require the needed classes for discord api
const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json');

// Creating a new client class instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client has connected and is ready, this code will be ran once
client.on('ready', () => {
    console.log(`logged in as ${client.user.tag}!`);
});

// first command to reply to / commands

client.on('interactionCreate', async interaction => { 
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'horny') {
        await interaction.reply("how horny of you");
    } else if (commandName === 'penis') {
        await interaction.reply('you dont have one');
    } 

});

// Login to Discord using the client's token
client.login(token);
