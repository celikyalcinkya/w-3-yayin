module.exports = {
    cfx: {
        baslat: "ayarlar" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db) => { 
let evet = `706634792074084362`
let hayır = `706634792443314236`
let prefix = client.ayarlar.ON_EK
let author = `uzi#0901`
let otorol = await db.fetch(`otorol_${message.guild.id}`)
let cfxy = await db.fetch(`reklam_${message.guild.id}`)
let banlimit = await db.fetch(`banlimit_${message.guild.id}`)
let rol  = await db.fetch(`rolk_${message.guild.id}`);
let kanal = await db.fetch(`kanalk_${message.guild.id}`);  
let sayaç1 = await db.fetch(`cfxsayac${message.guild.id}`);  


  let otoroldurum = [];
  if(otorol) otoroldurum = `${client.emojis.get(`${evet}`)}`
  if(!otorol) otoroldurum = `${client.emojis.get(`${hayır}`)}`
  
  
  
  let reklamdurum = [];
  if(cfxy) reklamdurum = `${client.emojis.get(`${evet}`)}`
  if(!cfxy) reklamdurum = `${client.emojis.get(`${hayır}`)}`
  
  
  
  let banlimit1 = [];
  if(banlimit) banlimit1 = `${client.emojis.get(`${evet}`)}`
  if(!banlimit) banlimit1 = `${client.emojis.get(`${hayır}`)}`
  
  
  let rolkoruma = [];
  if(rol) rolkoruma = `${client.emojis.get(`${evet}`)}`
  if(!rol) rolkoruma = `${client.emojis.get(`${hayır}`)}`

  
  let kanalkoruma = [];
  if(kanal) kanalkoruma = `${client.emojis.get(`${evet}`)}`
  if(!kanal) kanalkoruma = `${client.emojis.get(`${hayır}`)}`
  
  
  
  
  let sayaç = [];
  if(sayaç1) sayaç = `${client.emojis.get(`${evet}`)}`
  if(!sayaç1) sayaç = `${client.emojis.get(`${hayır}`)}`
  

  
  const ayar = new Discord.RichEmbed()
  .setColor("ff0000")
  .setAuthor(`${client.user.username} Sunucu Sistem Ayarları!`)
  .addField(`**Otorol**`, `${otoroldurum}`,true)
  .addField(`**Sayaç**`, `${sayaç}`,true) 
  .addField(`**Reklam Koruması**`, `${reklamdurum}`,true) 
  .addField(`**Ban Koruması**`, `${banlimit1}`,true) 
  .addField(`**Rol Koruması**`, `${rolkoruma}`,true) 
  .addField(`**Kanal Koruması**`, `${kanalkoruma}`,true) 
  .setFooter(`© created by ${author}`)
  message.channel.send(ayar);
  
    }
}
