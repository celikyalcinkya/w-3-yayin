module.exports = {
    cfx: {
        baslat: "banlimit", 
        baslat1: "banlimits"
    },
run: async(client, message, args, Discord, db) => { 
if(message.author.id !== message.guild.owner.user.id) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu komutu kullanabilmek için bir sunucunuz olmalı!\n**[\`EN\`]**\nYou must own a server to use this command!`))
  
  if(args[0] === "0" || args[0] === "sıfırla") {
    await db.delete(`banlimit_${message.guild.id}`)
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    
    message.reply('✅  Ban Koruma Özelliği Başarıyla Devre Dışı Bırakıldı!')
    message.react('693533312408617001')}
    
        if(db.fetch(`dil_${message.guild.id}`) === "EN") {
   
    message.reply('✅  Ban Protection Feature Successfully Disabled!')
    message.react('693533312408617001')
        }
    return
  }
  if(!args[0] || isNaN(args[0])) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nLütfen Ayarlamak İçin Bir Değer Giriniz! Örnek: \`1,2,3\`\n**[\`EN\`]**\nPlease enter a value to set! Example: \`1,2.3\``))
  
  await db.set(`banlimit_${message.guild.id}`, args[0])
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  message.reply(`✅ Sunucunun Ban Koruma Limiti **${args[0]}** Olarak Ayarlandı!`)
  message.react('693533312408617001')}
  
 if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  message.reply(`✅ Server's Ban Protection Limit **${args[0]}** Set as!`)
  message.react('693533312408617001')}
  
    }
}
