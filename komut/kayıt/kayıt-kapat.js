module.exports = {
  cfx: {
    baslat: "kayıt-kapat"
  },
  run: async (client, message, args, Discord, db, fs) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
message.channel.send(new Discord.RichEmbed()
.setTitle('Başarılı :white_check_mark:')
.setColor('ff0000')
.setDescription('Başarıyla sistem kapatıldı.'))
db.delete(`verilecek_${message.guild.id}`)
db.delete(`alınacak_${message.guild.id}`)
db.delete(`girişmesaj_${message.guild.id}`)
db.delete(`kanal_${message.guild.id}`)
db.delete(`kayıtmesaj_${message.guild.id}`)
db.delete(`kayıtkanal_${message.guild.id}`)
 
  }
};
