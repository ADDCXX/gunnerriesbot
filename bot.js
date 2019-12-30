const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'Link') {
    message.reply('https://discord.gg/dzXypuu');
  }
  
  if (message.channel.id === '458527068188180501') {
    if (message.content) {
      let emoji = client.emojis.find(x => x.name === "dice2")
      let emoji2 = client.emojis.find(x => x.name === "✅")
      message.react(emoji)
      message.react(emoji2)
    } else {
      return;
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
