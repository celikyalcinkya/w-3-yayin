module.exports = {
    cfx: {
        baslat: "reklam",
        baslat1: "advertisement"
    },
run: async(client, message, args, Discord, db) => { 
let prefix = client.ayarlar.ON_EK
let dil = await db.fetch(`dil_${message.guild.id}`)
let rol = await db.fetch(`reklam_${message.guild.id}`, "Açık");
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`MANAGE_MESSAGES\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`MANAGE_MESSAGES\` may use this command.`))
  
  
  
if (!args[0]) {
if (dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`UYARI!`)
.setDescription("**Yanlış Komut Kullanımı!**")
.setFooter(`${client.user.username} Reklam-Koruma Sistemi!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Doğru Kullanım\n`,`\`${prefix}reklam aç\` **veya** \`${prefix}reklam kapat\``)
.setColor("ff0000"))}

  
if (dil === "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`Warning!`)
.setDescription("**Incorrect Command Usage!**")
.setFooter(`${client.user.username} Reklam-Protection System!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Proper use\n`,`\`${prefix}advertisement on\` **or** \`${prefix}advertisement off\``)
.setColor("ff0000"))}}

  

  if (args[0] == "aç" || args[0] === "on") {
    if (rol) {
if(dil != "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`)    
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Reklam Koruma Sistemi__ Zaten Aktif!**")
.setTimestamp()
.setFooter(`${client.user.username} Reklam-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

 
if(dil === "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`) 
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`Warning!`)
.setDescription("**__Advertisement Proctect System__ Already Active!**")
.setTimestamp() 
.setFooter(`${client.user.username} Advertisement Proctect System!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

      return;
    } else {
      db.set(`reklam_${message.guild.id}`, "Açık");
          if(dil != "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`BAŞARILI!`).setDescription(`**__Reklam Koruma Sistemi__ Başarıyla Aktif Edildi!\n \n▪ Kapatmak için: \`${prefix}reklam kapat\`**` ).addField("** **", "**__Not:__** Reklam-Koruma Sistemi `MANAGE_MESSAGES`/`MESAJLARI_YÖNET` Yetkisi Olanları Etkilemez!").setFooter(`${client.user.username} Reklam-Koruma Sistemi!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
         if(dil === "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`Successful!`).setDescription(`**__Advertisement Proctect System__ Successfully Activated!\n \n▪ To Close: \`${prefix}advertisement off\`**` ).addField("** **", "**__Note:__** Ad Protection System doesn't effect who have `MANAGA_MESSAGES` permission.").setFooter(`${client.user.username} Advertisement-Protection System!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

      message.react('693533312408617001')
    }
  } else if (args[0] == "kapat" || args[0] === "off") {
    await db.delete(`reklam_${message.guild.id}`);
   if(dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Reklam Koruma Sistemi__ Başarıyla Kapandı!\n Açmak İçin `" +prefix+ "reklam aç`**")
.setTimestamp()
.setFooter(`${client.user.username} Reklam-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

if(dil === "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000").setTitle(`Successful!`)
.setDescription(`**__Advertisement Proctect System__ Successfully Closed!\n \n▪ To Open: \`${prefix}channelprotection on\`**`)
.setTimestamp().setFooter(`${client.user.username} Advertisement-Protection System!`, client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
  }
  

    }
}
