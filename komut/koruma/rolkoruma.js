module.exports = {
    cfx: {
        baslat: "rolkoruma",
        baslat1: "roleprotection"
    },
run: async(client, message, args, Discord, db) => { 
let prefix = client.ayarlar.ON_EK
let dil = await db.fetch(`dil_${message.guild.id}`)
let rol = await db.fetch(`rolk_${message.guild.id}`);
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
if (!args[0]) {
if (dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`UYARI!`)
.setDescription("**Yanlış Komut Kullanımı!**")
.setFooter(`${client.user.username} Rol-Koruma Sistemi!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Doğru Kullanım\n`,`\`${prefix}rolkoruma aç\` **veya** \`${prefix}rolkoruma kapat\``)
.setColor("ff0000"))}

  
if (dil === "EN") {
message.channel.send(new Discord.RichEmbed()
.setTitle(`Warning!`)
.setDescription("**Incorrect Command Usage!**")
.setFooter(`${client.user.username} Role-Protection System!`, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.addField(`Proper use\n`,`\`${prefix}roleprotection on\` **or** \`${prefix}roleprotection off\``)
.setColor("ff0000"))}}

  

  if (args[0] == "aç" || args[0] === "on") {
    if (rol) {
if(dil != "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`)    
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Rol Koruma Sistemi__ Zaten Aktif!**")
.setTimestamp()
.setFooter(`${client.user.username} Rol-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

 
if(dil === "EN") {
let dil = await db.fetch(`dil_${message.guild.id}`) 
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`Warning!`)
.setDescription("**__Role Protection System__ Already Active!**")
.setTimestamp() 
.setFooter(`${client.user.username} Role Proctection System!`, client.user.avatarURL).setThumbnail(client.user.avatarURL))}

      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
     if(dil != "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`BAŞARILI!`).setDescription(`**__Rol Koruma Sistemi__ Başarıyla Aktif Edildi!\n \n▪ Kapatmak için: \`${prefix}rolkoruma kapat\`**` ).addField("** **", "**__Not:__** Rol-Koruma Sistemi Sunucu Sahibini Etkilemez!").setFooter(`${client.user.username} Rol-Koruma Sistemi!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
    if(dil === "EN") {message.channel.send(new Discord.RichEmbed().setColor("ff0000").setTitle(`Successful!`).setDescription(`**__Role Proctection System__ Successfully Activated!\n \n▪ To Close: \`${prefix}roleproctection off\`**` ).addField("** **", "**__Note:__** Role-Protection System Does Not Affect Server Owner!").setFooter(`${client.user.username} Role-Protection System!`, client.user.avatarURL).setTimestamp().setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

      message.react('693533312408617001')
    }
  } else if (args[0] == "kapat" || args[0] === "off") {
    await db.delete(`rolk_${message.guild.id}`);
   if(dil != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`UYARI!`)
.setDescription("**__Rol Koruma Sistemi__ Başarıyla Kapandı!\n Açmak İçin `" +prefix+ "rolkoruma aç`**")
.setTimestamp()
.setFooter(`${client.user.username} Rol-Koruma Sistemi!`, client.user.avatarURL).setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}

if(dil === "EN") {message.channel.send(new Discord.RichEmbed()
.setColor("ff0000").setTitle(`Successful!`)
.setDescription(`**__Role Proctection System__ Successfully Closed!\n \n▪ To Open: \`${prefix}roleprotection on\`**`)
.setTimestamp().setFooter(`${client.user.username} Role-Protection System!`, client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)), message.react('693533312408617001')}
  }
  

}}


