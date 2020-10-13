module.exports = {
    cfx: {
        baslat: "kayıt-ayarlar"
    },
run: async(client, message, args, Discord, db) => { 
let verilecek = await db.fetch(`verilecek_${message.guild.id}`)
let alınacak = await db.fetch(`alınacak_${message.guild.id}`)
let kanal = await db.fetch(`kanal_${message.guild.id}`)
let log = await db.fetch(`log_${message.guild.id}`)
  
let evet = `692123205648777237`
let hayır = `692123204767973477`

let kanal1 = [];
  if(kanal) kanal1 = `${client.emojis.get(`${evet}`)} <#${kanal}>`
  if(!kanal) kanal1 = `${client.emojis.get(`${hayır}`)} **Ayarlanmamış!**`

let verilecek1 = [];
  if(verilecek) verilecek1 = `${client.emojis.get(`${evet}`)} <@&${verilecek}>`
  if(!verilecek) verilecek1 = `${client.emojis.get(`${hayır}`)} **Ayarlanmamış!**`
  
let alınacak1 = [];
  if(alınacak) alınacak1 = `${client.emojis.get(`${evet}`)} <@&${alınacak}>`
  if(!alınacak) alınacak1 = `${client.emojis.get(`${hayır}`)} **Ayarlanmamış!**`  

let log1 = [];
  if(log) log1 = `${client.emojis.get(`${evet}`)} <@&${alınacak}>`
  if(!log) log1 = `${client.emojis.get(`${hayır}`)} **Ayarlanmamış!**`  
 
 if(db.fetch(`dil_${message.guild.id}`) != "EN") { 
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Sunucusuna Ait Kayıt-Sistemi Ayarları!`)   
.addField(`**Kayıt-Kanal:**`, `${kanal1}`,true)
.addField(`**Kayıt-Log:**`, `${kanal1}`,true)
.addField(`**Kayıt-Verilecek Rol:**`, `${verilecek1}`,true)    
.addField(`**Kayıt-Alınacak Rol:**`, `${alınacak1}`,true))}
    
  
  
  /* if(db.fetch(`dil_${message.guild.id}`) === "EN") { 
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Server's Starboard System Settings!`)   
.addField(`**Kayıt-Kanal:**`, `${kanal1}`,true)
.addField(`**Kayıt-Log:**`, `${kanal1}`,true)
.addField(`**Kayıt-Verilecek Rol:**`, `${verilecek1}`,true)    
.addField(`**Kayıt-Alınacak Rol:**`, `${alınacak1}`,true))}*/
  }
}
