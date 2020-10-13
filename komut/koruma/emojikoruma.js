module.exports = {
    cfx: {
        baslat: "emojikoruma",
        baslat1: "emojiprotection"
    },
run: async(client, message, args, Discord, db) => { 
let prefix = client.ayarlar.ON_EK
let dil = await db.fetch(`dil_${message.guild.id}`)
let rol = await db.fetch(`emojikoruma_${message.guild.id}`, "Açık");
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
  
if (!args[0]) {
if (dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`UYARI!`)
.setDescription("**Yanlış Komut Kullanımı!**")
.setFooter(`${client.user.username} Emoji-Koruma Sistemi!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Doğru Kullanım\n`,`\`${prefix}emojikoruma aç\` **veya** \`${prefix}emojikoruma kapat\``)
.setColor("ff0000"))}

  
if (dil === "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`Warning!`)
.setDescription("**Incorrect Command Usage!**")
.setFooter(`${client.user.username} Emoji-protection System!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Proper use\n`,`\`${prefix}emojiprotection on\` **or** \`${prefix}emojiprotection off\``)
.setColor("ff0000"))}}

  

  if (args[0] == "aç" || args[0] === "on") {
    if (rol) {
if(dil != "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`)    
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Emoji Koruma Sistemi__ Zaten Aktif!**")
.setTimestamp()
.setFooter(`${client.user.username} Emoji-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

 
if(dil === "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`) 
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`Warning!`)
.setDescription("**__Emoji Proctect System__ Already Active!**")
.setTimestamp() 
.setFooter(`${client.user.username} Emoji Proctect System!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

      return;
    } else {
      db.set(`emojikoruma_${message.guild.id}`, "Açık");
     if(dil != "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`BAŞARILI!`).setDescription(`**__Emoji Koruma Sistemi__ Başarıyla Aktif Edildi!\n \n▪ Kapatmak için: \`${prefix}emojikoruma kapat\`**` ).addField("** **", "**__Not:__** Kanal-Koruma Sistemi Sunucu Sahibini Etkilemez!").setFooter(`${client.user.username} Emoji-Koruma Sistemi!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
    if(dil === "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`Successful!`).setDescription(`**__Emoji Proctect System__ Successfully Activated!\n \n▪ To Close: \`${prefix}emojiprotection off\`**` ).addField("** **", "**__Note:__** Emoji-Protection System Does Not Affect Server Owner!").setFooter(`${client.user.username} Emoji-Protection System!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

      message.react('693533312408617001')
    }
  } else if (args[0] == "kapat" || args[0] === "off") {
    await db.delete(`emojikoruma_${message.guild.id}`);
   if(dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Emoji Koruma Sistemi__ Başarıyla Kapandı!\n Açmak İçin `" +prefix+ "emojikoruma aç`**")
.setTimestamp()
.setFooter(`${client.user.username} Emoji-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

if(dil === "EN") {message.channel.send(new Discord.RichEmbed()
.setColor("ff0000").setTitle(`Successful!`)
.setDescription(`**__Emoji Proctection System__ Successfully Closed!\n \n▪ To Open: \`${prefix}emojiprotection on\`**`)
.setTimestamp()
.setFooter(`${client.user.username} Emoji-Protection System!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
  }
  

}}


