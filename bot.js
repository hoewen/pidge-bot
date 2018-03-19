const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("ur mom gay)) {
               message.channel.send("No u")
  	}
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("rick")) {
               message.channel.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  	}
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("oh yes daddy")) {
               message.channel.send("Um this is a Christian Discord server, mind you.")
  	}
    
});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("memes)) {
               message.channel.send("It's a dead meme but https://orig00.deviantart.net/e510/f/2016/182/4/7/pidge_meme_pt_3_by_kawaiipidgeychan-da8eyvn.png")
  	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
