module.exports = {
    cfx: {
        baslat: "starboard"
    },
run: async(client, message, args, Discord, db) => { 
const DBL = require("dblapi.js");
const dbl = new DBL(`${client.ayarlar.dbl_token}`, client);
dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
let prefix = client.ayarlar.ON_EK
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
   if(args[0] == 'kanal' || args[0] === "channel") {
    let akanal = message.mentions.channels.first()  || message.guild.channels.find(ff => ff.name === args.slice(1).join(' '))
    if(!akanal) return message.channel.send(`**[\`TR\`]**\nLütfen Bir Kanal Etiketleyin!\n**[\`EN\`]**\nPlease Tag a Channel!`);
     
     
     if(db.fetch(`dil_${message.guild.id}`) != "EN") {
     db.set(message.guild.id +".starChannel", akanal.id)
     message.channel.send("Başarıyla Bu Sunucudaki Starboard Kanalı "+akanal+" Olarak Ayarlandı **Önemli Not:**```Starboard Sisteminin Çalışması Için Starboard Kanalına Starboard Mesajı Hariç Hiç Mesaj Gönderilmemiş Olması Gerek!```");
      akanal.setTopic("Artery Bot Starboard Sistemi!")}
     
     if(db.fetch(`dil_${message.guild.id}`) === "EN") {
     db.set(message.guild.id +".starChannel", akanal.id)
     message.channel.send("Successfully Set Starboard Channel On This Server as "+akanal+"!");
      akanal.setTopic("Artery Bot Starboard System!")}
     
return
  }
  if(args[0] == "sıfırla" || args[0] == "reset") {
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    db.delete(message.guild.id +".starCount", 3)
    db.delete(message.guild.id +".starChannel")
    return message.channel.send(new Discord.RichEmbed()
.setDescription(`Starboard Sistemi Sıfırlandı! Starboard Sayı Default Olarak Ayarlandı! \`3\``)
.setAuthor(`Starboard-Sistemi`, client.user.avatarURL)
.setColor("GOLD"))}
    
       if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.delete(message.guild.id +".starCount", 3)
    db.delete(message.guild.id +".starChannel")
    return message.channel.send(new Discord.RichEmbed()
.setDescription(`Starboard System Has Been Reset! Starboard Issue is Default! \`3\``)
.setAuthor(`Starboard-System`, client.user.avatarURL)
.setColor("GOLD"))} 
    
  }
  if(args[0] == 'sayı' || args[0] == "number") {
    let sayı = args[1]
    if(db.fetch(`dil_${message.guild.id}`) != "EN") { 
    db.set(message.guild.id +".starCount", sayı)
    message.channel.send(new Discord.RichEmbed()
.setDescription(`Starboard Sistemi Star Sayısı Ayarlandı!\nAyarlanan Sayı: \`${sayı}\``)
.setAuthor(`Starboard-Sistemi`, client.user.avatarURL)
.setColor("GOLD")) }
        
    
        if(db.fetch(`dil_${message.guild.id}`) === "EN") { 
    db.set(message.guild.id +".starCount", sayı)
    message.channel.send(new Discord.RichEmbed()
.setDescription(`Starboard System Number of Stars Adjusted! \nSetup Number: \`${sayı}\``)
.setAuthor(`Starboard-System`, client.user.avatarURL)
.setColor("GOLD")) }
    
    
  } } 
}    
                               )}}                         