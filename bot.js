const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'

client.on('ready', () => {
    console.log('I am ready!');

  function randomStatus() {
        let status = ['Patroling around the City 🚔 24/7', 'I was just an ordinary robot who was ordered to make other people happy | Spesial thanks to Ray'];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 0}); // bisa diganti: PLAYING LISTENING WATCHING STREAMING

    }; setInterval(randomStatus, 50000) // 60000 = 60 detik (ms)
});

client.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.id === "276225910464708610");
    if(!channel) return;

    channel.send(`**Welcome Aboard !** ${member} 
:white_small_square:You are still an illegal immigrant ! 
:white_small_square:Please register your bio immediately in the information channel !`)

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
