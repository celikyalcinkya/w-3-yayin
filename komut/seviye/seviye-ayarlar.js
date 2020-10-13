module.exports = {
    cfx: {
        baslat: "seviye-ayarlar",
        baslat1: "level-settings"
    },
run: async(client, message, args, Discord, db) => { 
let kanal = await db.fetch(`seviyekanal${message.guild.id}`)
let xp = await db.fetch(`seviyexp${message.guild.id}`)
let sınır = await db.fetch(`seviyesınır${message.guild.id}`)
let evet = `693533312408617001`
let hayır = `693533309161963561`

let kanal1 = [];
  if(kanal) kanal1 = `${client.emojis.get(`${evet}`)} **Açık!**`
  if(!kanal) kanal1 = `${client.emojis.get(`${hayır}`)} **Kapalı!**`

  let xp1 = [];
  if(xp) xp1 = `${client.emojis.get(`${evet}`)} \`${xp}\``
  if(!xp) xp1 = `${client.emojis.get(`${hayır}`)}** Ayarlanmamış! Default: \`250\`**`

let sınır1 = [];
  if(sınır) sınır1 = `${client.emojis.get(`${evet}`)} \`${sınır}\``
  if(!sınır) sınır1 = `${client.emojis.get(`${hayır}`)}** Ayarlanmamış! Default: \`5\`**`

if(db.fetch(`dil_${message.guild.id}`) != "EN")  {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Sunucusuna Ait Seviye-Sistemi Ayarları!`)   
.addField(`**Seviye-Log**`, `${kanal1}`,true)
.addField(`**Mesaj Başı Verilecek Xp**`, `${xp1}`,true)       
.addField(`**Kaç Puan Seviye Atlama**`, `${sınır1}`,true))}
  
  
if(db.fetch(`dil_${message.guild.id}`) === "EN")  { 


let kanal2 = [];
  if(kanal) kanal2 = `${client.emojis.get(`${evet}`)} **On!**`
  if(!kanal) kanal2 = `${client.emojis.get(`${hayır}`)} **Off!**`

  let xp2 = [];
  if(xp) xp2 = `${client.emojis.get(`${evet}`)} \`${xp}\``
  if(!xp) xp2 = `${client.emojis.get(`${hayır}`)}** Unrevised! Default: \`250\`**`

let sınır2 = [];
  if(sınır) sınır2 = `${client.emojis.get(`${evet}`)} \`${sınır}\``
  if(!sınır) sınır2 = `${client.emojis.get(`${hayır}`)}** Unrevised! Default: \`5\`**`


message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Server's Level System Settings!`)   
.addField(`**Level-Log**`, `${kanal2}`,true)
.addField(`**Xp Per Message**`, `${xp2}`,true)       
.addField(`**How Many Points Level Up**`, `${sınır2}`,true))}  
  
}
}
