const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('大家好');
  	}
});
client.on('message', message => {
    if (message.content === 'Yo') {
    	message.reply('HAHA');
  	}
});
client.on('message', message => {
    if (message.content === 'R6') {
    	message.reply('寂寞我們來Rainbow:SIECE');
  	}
});
client.on('message', message => {
    if (message.content === 'Minecraft') {
    	message.reply('寂寞我們來Hypixel');
  	}
});
client.on('message', message => {
    if (message.content === 'PUBG') {
    	message.reply('寂寞我們來PUBG');
  	}
});
client.on('message', message => {
    if (message.content === 'OW') {
    	message.reply('寂寞我們來overwatch');
  	}
});
client.on('message', message => {
    if (message.content === 'YT') {
    	message.reply('https://www.youtube.com/channel/UCLlcPDPQ4wo9WhUL2CR2RWw?view_as=subscriber');
  	}
});
client.on('message', message => {
    if (message.content === 'LonelyYT') {
    	message.reply('https://www.youtube.com/channel/UCiL9eRN8QbWCOuw8HD_LOpA');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
