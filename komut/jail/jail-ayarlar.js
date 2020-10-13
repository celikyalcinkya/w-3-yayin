module.exports = {
    cfx: {
        baslat: "jail-ayarlar"
    },
run: async(client, message, args, Discord, db) => { 
  let kanal = await db.fetch(`jailkanal${message.guild.id}`)
  let cezalı = await db.fetch(`jailrole${message.guild.id}`)
  let yetkili = await db.fetch(`jailyrole${message.guild.id}`)
  
  db.delete(`jailrolename${message.guild.id}`)
let evet = `693533312408617001`
let hayır = `693533309161963561`

let yetkili1 = [];
  if(yetkili) yetkili1 = `${client.emojis.get(`${evet}`)} <@&${yetkili}>`
  if(!yetkili) yetkili1 = `${client.emojis.get(`${hayır}`)} **Kapalı!**`

  let cezalı1 = [];
  if(cezalı) cezalı1 = `${client.emojis.get(`${evet}`)} <@&${cezalı}>`
  if(!cezalı) cezalı1 = `${client.emojis.get(`${hayır}`)} **Kapalı!**`


if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Sunucusuna Ait Jail-Sistemi Ayarları!`)   
.addField(`**Jail Yetkili-Rol:**`, `${yetkili1}`,true)
.addField(`**Jail Cezalı-Rol:**`, `${cezalı1}`,true))}

if(db.fetch(`dil_${message.guild.id}`) === "EN") {

  let yetkili2 = [];
  if(yetkili) yetkili2 = `${client.emojis.get(`${evet}`)} <@&${yetkili}>`
  if(!yetkili) yetkili2 = `${client.emojis.get(`${hayır}`)} **unadjusted!**`

  let cezalı2 = [];
  if(cezalı) cezalı2 = `${client.emojis.get(`${evet}`)} <@&${cezalı}>`
  if(!cezalı) cezalı2 = `${client.emojis.get(`${hayır}`)} **unadjusted!**`

message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Server's Jail System Settings!`)   
.addField(`**Jail Authorized-Rol:**`, `${yetkili2}`,true)
.addField(`**Jail Banned-Rol:**`, `${cezalı2}`,true))}
    
  }
}
