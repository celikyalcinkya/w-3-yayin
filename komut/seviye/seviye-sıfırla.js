module.exports = {
    cfx: {
        baslat: "seviye-sıfırla",
        baslat1: "level-reset"// komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setThumbnail(client.user.avatarURL) 
.setDescription(`Seviye-Sistemi Bütün Fonksiyonları Sıfırlandı!`)
.setFooter(`${client.user.username} Seviye Sistemi!`)   )
message.react('693533312408617001')
   db.delete(`seviyesınır${message.guild.id}`)
   db.delete(`seviyexp${message.guild.id}`)
   db.delete(`seviyekanal${message.guild.id}`)}


  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setThumbnail(client.user.avatarURL) 
.setDescription(`Level-System All Functions Has Been Reset!`)
.setFooter(`${client.user.username} Level System!`)   )
message.react('693533312408617001')
   db.delete(`seviyesınır${message.guild.id}`)
   db.delete(`seviyexp${message.guild.id}`)
   db.delete(`seviyekanal${message.guild.id}`)}


  }}