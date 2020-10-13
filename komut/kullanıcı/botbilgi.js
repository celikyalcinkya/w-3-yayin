module.exports = {
    cfx: {
        baslat: "botbilgi", 
        baslat1: "botinfo"
    },
run: async(client, message, args, Discord, db) => { 
const os = require('os');
const moment = require('moment');
require("moment-duration-format");
const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor('ff0000')
.setAuthor(`${client.user.username} BOT İSTATİSTİK`, client.user.avatarURL)
.setThumbnail(`${client.user.avatarURL}`)
.addField(`**__CPU__**`, `\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\``)
.addField(`**__Bellek:__**`,`\`\`${Math.round((require('os').freemem() / 1024 / 1024).toFixed(2)) + ' MB / ' + Math.round((require('os').totalmem() / 1024 /1024) / 1024)} GB\`\``)
.addField(`**__Sunucu Sayısı__**`, `\`\`${client.guilds.size.toLocaleString()}\`\``)
.addField(`**__Toplam Kullanıcı__**`, `\`\`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\``)
.addField(`**__Aktif Süre__** `, `\`\`${duration}\`\``)
.addField(`**__Ping__** `, `\`\`${client.ping}\`\``)
.addField(`**__Bot Version__** `, `\`\`${client.ayarlar.version}\`\``)
.addField(`**__Discord.js Sürümü / Node.js Sürümü__** `, `\`\`${Discord.version} / ${process.version}\`\``)
.setFooter(` ${message.author.username} Tarafından İstendi.`,client.user.avatarURL))}
  
  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor('ff0000')
.setAuthor(`${client.user.username} BOT STATISTICS`, client.user.avatarURL)
.setThumbnail(`${client.user.avatarURL}`)
.addField(`**__CPU__**`, `\`\`${os.cpus().map(i => `${i.model}`)[0]}\`\``)
.addField(`**__Memory__**`,`\`\`${Math.round((require('os').freemem() / 1024 / 1024).toFixed(2)) + ' MB / ' + Math.round((require('os').totalmem() / 1024 /1024) / 1024)} GB\`\``)
.addField(`**__Number of Servers__**`, `\`\`${client.guilds.size.toLocaleString()}\`\``)
.addField(`**__Total User__**`, `\`\`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\``)
.addField(`**__Active Time__** `, `\`\`${duration}\`\``)
.addField(`**__Ping__** `, `\`\`${client.ping}\`\``)
.addField(`**__Bot Version__** `, `\`\`${client.ayarlar.version}\`\``)
.addField(`**__Discord.js Versions / Node.js Versions__** `, `\`\`${Discord.version} / ${process.version}\`\``)
.setFooter(` ${message.author.username} requested by.`,client.user.avatarURL))}  
  
  
  
    }
}
