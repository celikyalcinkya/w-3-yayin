module.exports = {
    cfx: {
        baslat: "otorol", 
        baslat1: "autorole"
    },
run: async(client, message, args, Discord, db) => { 
var prefix = client.ayarlar.ON_EK
var rol = message.mentions.roles.first()
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
if(args[0] == 'kapat' || args[0] == "off") {
   if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    db.delete(`otorol_${message.guild.id}`)
    return message.channel.send('✅ Otorol Sistemi Kapatıldı!')}
   
    if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.delete(`otorol_${message.guild.id}`)
    return message.channel.send('✅ Autorole System Closed!')} 
  }  
  
if(!rol) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nAyarlamam İçin Bir Rol Belirtmelisin!\nÖrnek Kullanım: \`${prefix}otorol @rol\`\n**[\`EN\`]**\nYou Must Specify a Role To Set! \n Example Use: \`${prefix}autorole @role\``))
    
  

  
    
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(`Otorol Aktif Edildi!\nAyarlanan Rol: ${rol}`) 
db.set(`otorol_${message.guild.id}`, rol.id)  }
  
  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(`Autorole Activated! \nAdjusted Role: ${rol}`) 
db.set(`otorol_${message.guild.id}`, rol.id)  }
  

    }
}
