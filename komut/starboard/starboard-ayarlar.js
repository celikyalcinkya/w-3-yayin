module.exports = {
    cfx: {
        baslat: "starboard-ayarlar",
        baslat1: "starboard-settings"

    },
run: async(client, message, args, Discord, db) => { 
  let kanal = await db.fetch(message.guild.id +".starChannel")
  let starsayı = await db.fetch(message.guild.id +".starCount")
  
  let evet = `693533312408617001`
  let hayır = `693533309161963561`

let kanal1 = [];
  if(kanal) kanal1 = `${client.emojis.get(`${evet}`)} <#${kanal}>`
  if(!kanal) kanal1 = `${client.emojis.get(`${hayır}`)} **Kapalı!**`

  let starsayı1 = [];
  if(starsayı) starsayı1 = `${client.emojis.get(`${evet}`)} \`${starsayı}\``
  if(!starsayı) starsayı1 = `${client.emojis.get(`${hayır}`)} **Ayarlanmamış! Default: \`3\`**`
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`${message.guild.name} Sunucusuna Ait Starboard-Sistemi Ayarları!`)   
.addField(`**Starboard Kanalı:**`, `${kanal1}`,true)
.addField(`**Starboard Sayı:**`, `${starsayı1}`,true))}
  
  
 let kanal2 = [];
  if(kanal) kanal2 = `${client.emojis.get(`${evet}`)} <#${kanal}>`
  if(!kanal) kanal2 = `${client.emojis.get(`${hayır}`)} **Off!**`

  let starsayı2 = [];
  if(starsayı) starsayı2 = `${client.emojis.get(`${evet}`)} \`${starsayı}\``
  if(!starsayı) starsayı2 = `${client.emojis.get(`${hayır}`)} **Unrevised! Default: \`3\`**` 
  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("GOLD")
.setTitle(`${message.guild.name} Server's Starboard System Settings!`)   
.addField(`**Starboard Channel:**`, `${kanal2}`,true)
.addField(`**Starboard Count:**`, `${starsayı2}`,true))}  
  
  }
}
