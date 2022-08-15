const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
    console.log('bot wlaczony');
});

client.on('message', message => {
  if (message.author.bot) return;
   if (message.channel.id === '997224657704992819') {
    if (message.content.startsWith("%")) return;
     const propozycja = new Discord.MessageEmbed()
     .setTitle('propozycja:')
     .setAuthor(message.author, message.author.avatarURL())
     .setColor('0xffffff')
     .setDescription(message)
     .setFooter("www.fordbox.pl")
    message.reply(propozycja).then(sentEmbed => {
     sentEmbed.react("👍")
     sentEmbed.react("👎")
    message.delete()
  })
}})







client.login("OTk5ODI2ODc3NzE3OTQyMzQy.Goaq9A.4AKSEH2We_X4hs6BkG1gvsTy-wHb8meM0tnHeM");