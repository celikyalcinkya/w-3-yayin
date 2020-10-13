module.exports = {
  cfx: {
    baslat: "seviye-rol",
    baslat1: "level-role"
  },
  run: async (client, message, args, Discord, db, fs) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
const DBL = require("dblapi.js");
const dbl = new DBL(`${client.ayarlar.dbl_token}`, client);
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
 //  } else {

  let link = `[Destek Sunucusu!](https://discord.gg/zXV6rJz)`
  let link2 = `[Support Server!](https://discord.gg/zXV6rJz)`
  let link1 = `[Website](https://discord.gg/zXV6rJz)`
  let emoji = `693814532308729927`
      if(!args[0]) {
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
        return message.channel.send(new Discord.RichEmbed()                              
.setColor("ff0000")
.setTitle(`${client.user.username} | Seviye-Rol Komutları!`)
.setDescription(`**${link} & ${link1}**`)          
.setTimestamp()        
.setThumbnail(client.user.avatarURL)   
.setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)  
.addField(`${client.emojis.get(`${emoji}`)} Rol oluşturma:`, `\`${client.ayarlar.ON_EK}seviyerol @etiket <seviye>\``)
.addField(`${client.emojis.get(`${emoji}`)} Tüm rolleri silme:`, `\`${client.ayarlar.ON_EK}seviyerol temizle\``)
.addField(`${client.emojis.get(`${emoji}`)} Ayarlanan Rolleri Görmek:`, `\`${client.ayarlar.ON_EK}seviyerolleri\``))}
  
  
   if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  return message.channel.send(new Discord.RichEmbed()                              
.setColor("ff0000")
.setTitle(`${client.user.username} | Level-Role Commands!`)
.setDescription(`**${link2} & ${link1}**`)          
.setTimestamp()        
.setThumbnail(client.user.avatarURL)   
.setFooter(`${client.user.username} Level-Role System!`, client.user.avatarURL)  
.addField(`${client.emojis.get(`${emoji}`)} Role created:`, `\`${client.ayarlar.ON_EK}levelrole @role <level_number>\``)
.addField(`${client.emojis.get(`${emoji}`)} Delete all roles:`, `\`${client.ayarlar.ON_EK}levelrole clear\``)
.addField(`${client.emojis.get(`${emoji}`)} Seeing Roles Set:`, `\`${client.ayarlar.ON_EK}levelroles\``))} 
}
      
      if(args[0] == 'temizle' || args[0] == "clear") {
        db.delete(`srol.${message.guild.id}`)
        db.delete(`srol2.${message.guild.id}`)
        db.delete(`srol3.${message.guild.id}`)
        return message.channel.send(`**[\`TR\`]**\nSeviye-Rol Başarıyla Sıfırlandı!\n**[\`EN\`]**\nLevel-Role System Has Been Successfully Reset!`)
      }
      if(isNaN(args[1])) return message.channel.send(`**[\`TR\`]**\nSeviye bir sayı olmalı!!\n**[\`EN\`]**\nLevel must be a number!`)
      var user = message.mentions.users.first() || message.author
      var role = message.mentions.roles.first()
      db.push(`srol.${message.guild.id}`, role.id)
      db.set(`srol2.${message.guild.id}.${role.id}`, args[1])
      db.push(`srol3.${message.guild.id}.${role.id}`, args[1])
     if(db.fetch(`dil_${message.guild.id}`) != "EN") {
      message.channel.send(args[1]+ ' level ' +role + ' olarak ayarlandı!')}
    
      if(db.fetch(`dil_${message.guild.id}`) === "EN") {
      message.channel.send(args[1]+ ' level ' +role + ' set to!')}
  } }
)}
}