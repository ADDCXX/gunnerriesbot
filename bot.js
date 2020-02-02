const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'

client.on('ready', () => {
    console.log('I am ready!');

  function randomStatus() {
        let status = ['Patroling around the City :oncoming_police_car: 24/7', 'Dont forget to obey the rules and conditions of this server !'];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 0}); // bisa diganti: PLAYING LISTENING WATCHING STREAMING

    }; setInterval(randomStatus, 50000) // 60000 = 60 detik (ms)
});

client.on('message', message => {
  let msg = message.content.toLowerCase();
  let senderId = message.author.id;
  let senderUsername = message.author.username;
  let senderAvatar = message.author.avatar;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  if (message.content.toLowerCase() === 'link') {
    message.reply('https://discord.gg/dzXypuu ');
 }
});

client.on('message', message => {
  if (message.channel.id === '458527068188180501'){
      let emoji = message.guild.emojis.find('name', "GunnerriesBadge")
      message.react(emoji)
      message.react('✅');
  }
});
    
client.login(process.env.BOT_TOKEN);
