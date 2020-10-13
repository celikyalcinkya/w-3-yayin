module.exports = {
    cfx: {
        baslat: "sayaç",
        baslat1: "counter"
    },
run: async(client, message, args, Discord, db) => { 
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
var prefix = client.ayarlar.ON_EK
  if (!args[0]) {
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Sayaç Sistemi!")
      .setColor("ff0000")
      .setDescription(`Eksik Parametler!\nÖrn; \`${prefix}sayaç #kanal <sayı> //${prefix}sayaç kapat\``))}
  
  
   if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    message.channel.send(new Discord.RichEmbed()
      .setTitle("Counter System!")
      .setColor("ff0000")
      .setDescription(`Missing Parameters!\nExample; \`${prefix}counter #channel <number> //${prefix}counter off\``))}
}
  
  let channel = message.mentions.channels.first()
  
  if(args[0] == 'kapat' || args[0] == "off") {
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    db.delete(`cfxsayackanal${message.guild.id}`)
    db.delete(`cfxsayac${message.guild.id}`)
    return message.channel.send('✅ Sayaç Sistemi Kapatıldı!')}
    
     if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.delete(`cfxsayackanal${message.guild.id}`)
    db.delete(`cfxsayac${message.guild.id}`)
    return message.channel.send('✅ Counter System Closed!')}
  }
  
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  if(args[1] <= message.guild.memberCount) return message.reply('Sunucudaki Üye Sayınızdan Büyük Bir Sayı Seçiniz!')}
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  if(args[1] <= message.guild.memberCount) return message.reply('Choose a Large Number of Members on the Server!')}
  

  
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
      db.set(`cfxsayackanal${message.guild.id}`, channel.id)
  db.set(`cfxsayac${message.guild.id}`, args[1])
  message.channel.send(new Discord.RichEmbed()
      .setTitle("✅ Sayaç Ayarlandı ✅")
      .setDescription(`🔸 **Sayaç Kanalı:** <#${channel.id}>\n🔸 **Sayaç:** \`${args[1]}\``)
      .setFooter(message.guild.name, message.author.avatarURL)
      .setColor("ff0000")
      .setTimestamp())}
  
  
  
    if(db.fetch(`dil_${message.guild.id}`) === "EN") {
      db.set(`cfxsayackanal${message.guild.id}`, channel.id)
  db.set(`cfxsayac${message.guild.id}`, args[1])
  message.channel.send(new Discord.RichEmbed()
      .setTitle("✅ Counter Adjusted ✅")
      .setDescription(`🔸 **Counter Channel:** <#${channel.id}>\n🔸 **Counter Number:** \`${args[1]}\``)
      .setFooter(message.guild.name, message.author.avatarURL)
      .setColor("ff0000")
      .setTimestamp())}
    }
}
