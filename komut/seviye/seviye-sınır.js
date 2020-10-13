module.exports = {
    cfx: {
        baslat: "seviye-sınır",
        baslat1: "level-boundary"
    },
run: async(client, msg, args, Discord, db) => { 
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
const DBL = require("dblapi.js");
const dbl = new DBL(`${client.ayarlar.dbl_token}`, client);
 dbl.hasVoted(msg.author.id).then(voted => {
  if (!voted) { msg.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
  if(args[0] == "sıfırla" || args[0] == "reset") {
    db.set(`seviyesınır${msg.guild.id}`, 250)
    return msg.channel.send(`**[\`TR\`]**\nSeviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\`\n**[\`EN\`]**\nLevel-Limit Has Been Successfully Reset! Default: \`500 \``)
 }

  let sayı = args[0]
  
  if(!sayı) return msg.channel.send(`**[\`TR\`]**\nSeviye bir sayı olmalı!!\n**[\`EN\`]**\nLevel must be a number!`)
  if(sayı < 100) return msg.channel.send(`**[\`TR\`]**\nEn Az 100'e Kadar Bir Sayı Girebilirsiniz!\n**[\`EN\`]**\nYou can enter a minimum number of 100!`)
  if(sayı > 500) return msg.channel.send(`**[\`TR\`]**\nEn Fazla 500'e Kadar Bir Sayı Girebilirsiniz!\n**[\`EN\`]**\nYou can choose a number up to 500!`)
  
  db.set(`seviyesınır${msg.guild.id}`, args[0])
if(db.fetch(`dil_${msg.guild.id}`) != "EN") {
  return msg.channel.send("Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")}

  if(db.fetch(`dil_${msg.guild.id}`) === "EN") {
  return msg.channel.send("You have successfully set the Level Limit to \`" + args [0] + "\`!")}
     
     
  } }
)}
}
