const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
  
  function randomStatus() {
        let status = ['Under Constrution', 'support developer by Ray'];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 'PLAYING'}); // bisa diganti: PLAYING LISTENING WATCHING STREAMING

    }; setInterval(randomStatus, 60000) // 60000 = 60 detik (ms)
});

client.on('message', message => {
  if (message.content === 'Link') {
    message.reply('https://discord.gg/dzXypuu');
  }
  
  if (message.channel.id === '458527068188180501') {
    if (message.content) {
      let emoji = client.emojis.find(x => x.name === "dice2") // khusus server emoji
      message.react(emoji)
      message.react('✅') // khusus unicode (https://emojipedia.org/)
    } else {
      return;
    }
  }
});

client.login(process.env.BOT_TOKEN);
