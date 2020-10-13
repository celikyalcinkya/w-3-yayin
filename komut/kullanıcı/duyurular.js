module.exports = {
    cfx: {
        baslat: "duyurular"
    },
run: async(client, message, args, Discord, db) => { 
let duyuru1 = await db.fetch(`duyuru_1${client.user.id}`)
let duyuru2 = await db.fetch(`duyuru_2${client.user.id}`)
let duyuru3 = await db.fetch(`duyuru_3${client.user.id}`)
let duyuru4 = await db.fetch(`duyuru_4${client.user.id}`)
let duyuru5 = await db.fetch(`duyuru_5${client.user.id}`)
  
  
  
var ks = [];  
if(duyuru1 == null) ks = `\`Eklenmemiş!\``
if(duyuru1 != null) ks = `\`${duyuru1}\``

var ks2 = [];  
if(duyuru2 == null) ks2 = `\`Eklenmemiş!\``
if(duyuru2 != null) ks2 = `\`${duyuru2}\``
  
var ks3 = [];  
if(duyuru3 == null) ks3 = `\`Eklenmemiş!\``
if(duyuru3 != null) ks3 = `\`${duyuru3}\``
  
var ks4 = [];  
if(duyuru4 == null) ks4 = `\`Eklenmemiş!\``
if(duyuru4 != null) ks4 = `\`${duyuru4}\``
  
var ks5 = [];  
if(duyuru5 == null) ks5 = `\`Eklenmemiş!\``
if(duyuru5 != null) ks5 = `\`${duyuru5}\`` 

let duyurular = await db.fetch(`duyuru${message.guild.id}`)
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setAuthor(`${client.user.username} Duyurular!`, client.user.avatarURL)
.addField(`** **`, `\`1.\`=> ${ks}`)
.addField(`** **`, `\`2.\`=> ${ks2}`)
.addField(`** **`, `\`3.\`=> ${ks3}`)
.addField(`** **`, `\`4.\`=> ${ks4}`)
.addField(`** **`, `\`5.\`=> ${ks5}`)
.setFooter(`${client.user.username} Duyuru-Sistemi!`, client.user.avatarURL))
    }
}
