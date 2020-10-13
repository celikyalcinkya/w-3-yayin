module.exports = {
  cfx: {
    baslat: "kayıt-ol"
  },
  run: async (client, message, args, Discord, db, fs) => {

  
let kanal = db.get(`kanal_${message.guild.id}`)
if(!kanal) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Kanal ayarlanmamış!'))// birşeyide ben yazaydım amk

if(message.channel.id != kanal) {
message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin!`))
return
}

let verilecekrol = db.get(`verilecek_${message.guild.id}`)
if(!verilecekrol) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Verilecek rol ayarlanmamış!'))

let alınacakrol = db.get(`alınacak_${message.guild.id}`)
if(!alınacakrol) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Alınacak rol ayarlanmamış!'))

let isim = args[0]
let yaş = args[1]

if(!isim) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Lütfen ismini gir!'))

if(!yaş) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Lütfen yaşını gir!'))

message.member.addRole(verilecekrol)
message.member.removeRole(alınacakrol)
message.member.setNickname(`${isim} ${yaş}`)//yukarı bak birazcık
//anlamadım ${isim} ${yaş}
message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla kayıt oldunuz.'))

let log = db.get(`log_${message.guild.id}`)
client.channels.get(log).send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Bir kişi kaydoldu')
.addField('Kayıt olan kişi', message.author.tag))
.addField('Şimdiki simi', `${isim} ${yaş}`)



if(!isim) return message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Hata :x:')
.setDescription('Lütfen ismini yaz!'))

message.member.addRole(verilecekrol)
message.member.removeRole(alınacakrol)
message.member.setNickname(isim)

message.channel.send(
    new Discord.RichEmbed() 
.setColor('ff0000')
.setTitle('Başarılı :white_check_mark:')
.setDescription('Başarıyla kayıt oldunuz.'))

  }
};
