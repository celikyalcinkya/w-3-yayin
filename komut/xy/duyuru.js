module.exports = {
    cfx: {
        baslat: "ds" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db,) => {
if(message.author.id !== client.ayarlar.SAHIP) return message.channel.send('Bu Komutu Sadece Yapımcım Kullanabilir!')

 let d0 = args.slice(1).join(' ');
if(args[0] == "ekle1") {
db.set(`duyuru_1${client.user.id}`, d0)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`1.\` Duyuru Eklendi!\nEklediğiniz Duyuru: \`${d0}\``)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}


let d1 = args.slice(1).join(' ');
if(args[0] == "ekle2") {
db.set(`duyuru_2${client.user.id}`, d1)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`2.\` Duyuru Eklendi!\nEklediğiniz Duyuru: \`${d1}\``)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}


let d2 = args.slice(1).join(' ');
if(args[0] == "ekle3") {
db.set(`duyuru_3${client.user.id}`, d2)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`3.\` Duyuru Eklendi!\nEklediğiniz Duyuru: \`${d2}\``)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}


let d3 = args.slice(1).join(' ');
if(args[0] == "ekle4") {
db.set(`duyuru_4${client.user.id}`, d3)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`4.\` Duyuru Eklendi!\nEklediğiniz Duyuru: \`${d3}\``)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}


let d4 = args.slice(1).join(' ');
if(args[0] == "ekle5") {
db.set(`duyuru_5${client.user.id}`, d4)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`5.\` Duyuru Eklendi!\nEklediğiniz Duyuru: \`${d4}\``)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}

//KALDIR ---------------------------------------------------------------
    
if(args[0] == "kaldır1") {
db.delete(`duyuru_1${client.user.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`1.\` Duyuru Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}


if(args[0] == "kaldır2") {
db.delete(`duyuru_2${client.user.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`2.\` Duyuru Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}
  

if(args[0] == "kaldır3") {
db.delete(`duyuru_3${client.user.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`3.\` Duyuru Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}
  

if(args[0] == "kaldır4") {
db.delete(`duyuru_4${client.user.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`4.\` Duyuru Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}
  

if(args[0] == "kaldır5") {
db.delete(`duyuru_5${client.user.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Başarıyla \`5.\` Duyuru Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}
 
//SIFIRLA -------------------------  
  
if(args[0] == "sıfırla") {
db.delete(`duyuru_1${client.user.id}`)
db.delete(`duyuru_2${client.guild.id}`)
db.delete(`duyuru_3${client.guild.id}`)
db.delete(`duyuru_4${client.guild.id}`)
db.delete(`duyuru_5${client.guild.id}`)
return message.channel.send(new Discord.RichEmbed()
.setDescription(`Bütün Duyurular Silindi!`)
.setAuthor(`${client.user.username} Duyuru Sistemi!`, client.user.avatarURL)
.setColor("ff0000"))}
}
}
