const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ';'

client.on('ready', () => {
    console.log('I am ready!');
  
  function randomStatus() {
        let status = ['Under Construction', 'Support Developer by Ray'];
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: 0}); // bisa diganti: PLAYING LISTENING WATCHING STREAMING

    }; setInterval(randomStatus, 60000) // 60000 = 60 detik (ms)
});

client.on('message', message => {
  let msg = message.content.toLowerCase();
  let sender = message.author;
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  
  if (message.content === 'Link') {
    message.reply('https://discord.gg/dzXypuu');
  }
  
  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== "268710043661107200" && message.author.id !== "331265944363991042") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    
    function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
    };
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
