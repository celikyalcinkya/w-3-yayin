module.exports = {
  cfx: {
    baslat: "kayıt-"
  },
  run: async (client, message, args, Discord, db, fs) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Bir rol belirtmelisin!'))
db.set(`verilecek_${message.guild.id}`, rol.id)
message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Başarılı :white_check_mark:')
.setDescription(`Kayıt verilecek rolünü ${rol} olarak ayarladım.`))
  }
};
