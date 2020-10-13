module.exports = {
  cfx: {
    baslat: "kayıt-log"
  },
  run: async (client, message, args, Discord, db, fs) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  

let kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Bir kanal belirtmelisin!'))
  
  db.set(`log_${message.guild.id}`, kanal.id)
  return   message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Başarılı :white_check_mark:')
.setDescription(`Kayıt log kanalını başarıyla ${kanal}  olarak ayarladım`))

  }
};
