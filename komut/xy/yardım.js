module.exports = {
    cfx: {
        baslat: "yardım", // komutunuzun on_ek ile çalıştılacak komut adı.
        baslat1: "help"
    },
run: async(client, message, args, Discord, db,) => {
const fs = require("fs")
let emoji = `✅`
let p = client.ayarlar.ON_EK
let moderasyon = fs.readdirSync('./komut/moderasyon').filter(file => file.endsWith('.js')).join(``)
let kullanıcı = fs.readdirSync('./komut/kullanıcı').filter(file => file.endsWith('.js')).join(``)
let koruma = fs.readdirSync('./komut/koruma').filter(file => file.endsWith('.js')).join(``)
let jail = fs.readdirSync('./komut/jail').filter(file => file.endsWith('.js')).join(``)
let seviye = fs.readdirSync('./komut/seviye').filter(file => file.endsWith('.js')).join(``)
let nsfw = fs.readdirSync('./komut/nsfw').filter(file => file.endsWith('.js')).join(``)
let starboard = fs.readdirSync('./komut/starboard').filter(file => file.endsWith('.js')).join(``)
let kayıt = fs.readdirSync('./komut/kayıt').filter(file => file.endsWith('.js')).join(``)
let moderasyonsayı = fs.readdirSync('./komut/moderasyon').filter(file => file.endsWith('.js')).length
let kullanıcısayı = fs.readdirSync('./komut/kullanıcı').filter(file => file.endsWith('.js')).length
let korumasayı = fs.readdirSync('./komut/koruma').filter(file => file.endsWith('.js')).length
let starboardsayı = fs.readdirSync('./komut/starboard').filter(file => file.endsWith('.js')).length
let seviyesayı = fs.readdirSync('./komut/seviye').filter(file => file.endsWith('.js')).length
let jailsayı = fs.readdirSync('./komut/jail').filter(file => file.endsWith('.js')).length
let nsfwsayı = fs.readdirSync('./komut/nsfw').filter(file => file.endsWith('.js')).length
let kayıtsayı = fs.readdirSync('./komut/kayıt').filter(file => file.endsWith('.js')).length
 
  
  
   let dil = await db.fetch(`dil_${message.guild.id}`)

if(dil != "EN") {
message.channel.send(new Discord.RichEmbed()   
.setColor("ff0000")
.setAuthor(`${client.user.username} Yardım`, client.user.avatarURL)
.addField(`**__Moderasyon Komutları__**(${moderasyonsayı})\n`, `\`${moderasyon.split('.js')}\``)
.addField(`**__Kullanıcı Komutları__**(${kullanıcısayı})\n`, `\`${kullanıcı.split('.js')}\``)
.addField(`**__Koruma Komutları__**(${korumasayı})\n`, `\`${koruma.split('.js')}\``)
.addField(`**__Seviye Komutları\`${p}seviye-sistemi\`__**(${seviyesayı})\n`, `\`${seviye.split('.js')}\``)
.addField(`**__Jail Komutları__**(${jailsayı})\n`, `\`${jail.split('.js')}\``)     
.addField(`**__Kayıt Komutları \`${p}kayıt-sistemi\`__**(${kayıtsayı})\n`, `\`${kayıt.split('.js')}\``)     
.addField(`**__Nsfw Komutları__**(${nsfwsayı})\n`, `\`${nsfw.split('.js')}\``)     
.setFooter(`Bot Versiyonu: ${client.ayarlar.version}`, client.user.avatarURL)       
.setFooter(`Bot Yapımcısı: uzi#0901`, client.user.avatarURL)   
.setThumbnail(client.user.avatarURL))}

if(dil === "EN") {
message.channel.send(new Discord.RichEmbed()   
.setColor("ff0000")
.setAuthor(`${client.user.username} Yardım`, client.user.avatarURL)
.setDescription(`**Support Server; [Click!](https://discord.gg/zXV6rJz)**`)
.addField(`${client.emojis.get(`${emoji}`)} **__Moderation Commands__**(${moderasyonsayı})\n`, `\`settings\`,\`ban\`,\`banlist\`,\`help-system\`,\`emojiinfo\`,\`forceban\`,\`kick\`,\`autorole\`,\`counter\`,\`clear\`,\`slowmode\`,\`serverpanel\`,\`unban\``)
.addField(`${client.emojis.get(`${emoji}`)} **__User Commands__**(${kullanıcısayı})\n`, `\`afk\`,\`avatar\`,\`botinfo\`,\`profile\`,\`serverinfo\`,\`powers\`,`)
.addField(`${client.emojis.get(`${emoji}`)} **__Protection Commands__**(${korumasayı})\n`, `\`banlimits\`,\`emojiprotection\`,\`channelprotection\`,\`advertisement\`,\`roleprotection\``)
.addField(`${client.emojis.get(`${emoji}`)} **__Level Commands\`${p}level-system\`__**(${seviyesayı})\n`, `\`level-settings\`,\`level-log\`,\`level-role\`,\`level-system\`,\`level-reset\`,\`level-boundary\`,\`level-top\`,\`level-xp\`,\`level\`,`)
.addField(`${client.emojis.get(`${emoji}`)} **__Jail Commands__**(${jailsayı})\n`, `\`jail-settings\`,\`jail-system\`,\`jail\`,`)   
.addField(`${client.emojis.get(`${emoji}`)} **__Starboard Commands\`${p}starboard-system\`__**(${starboardsayı})\n`, `\`starboard-settings\`,\`starboard-system\`,`)     
.addField(`${client.emojis.get(`${emoji}`)} **__Nsfw Commands__**(${nsfwsayı})\n`, `\`${nsfw.split('.js')}\``)     
.setFooter(`Bot Version: ${client.ayarlar.version}`, client.user.avatarURL)                
.setThumbnail(client.user.avatarURL))                 }
}
}
 /*a!eval const fs = require("fs") 
let moderasyonsayı = fs.readdirSync('./komut/moderasyon').filter(file => file.endsWith('.js')).length
let kullanıcısayı = fs.readdirSync('./komut/kullanıcı').filter(file => file.endsWith('.js')).length
let korumasayı = fs.readdirSync('./komut/koruma').filter(file => file.endsWith('.js')).length
let starboardsayı = fs.readdirSync('./komut/starboard').filter(file => file.endsWith('.js')).length
let seviyesayı = fs.readdirSync('./komut/seviye').filter(file => file.endsWith('.js')).length
let jailsayı = fs.readdirSync('./komut/jail').filter(file => file.endsWith('.js')).length
let nsfwsayı = fs.readdirSync('./komut/nsfw').filter(file => file.endsWith('.js')).length
let kayıtsayı = fs.readdirSync('./komut/kayıt').filter(file => file.endsWith('.js')).length
let xy =  fs.readdirSync('./komut/xy').filter(file => file.endsWith('.js')).length
let yarrag = moderasyonsayı - -kullanıcısayı - -korumasayı - -starboardsayı - -seviyesayı - -jailsayı - -nsfwsayı - -kayıtsayı - -xy
message.channel.send(yarrag)*/