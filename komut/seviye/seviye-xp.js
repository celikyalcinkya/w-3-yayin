module.exports = {
    cfx: {
        baslat: "seviye-xp",
        baslat1: "level-xp"
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
  if(db.fetch(`dil_${msg.guild.id}`) != "EN") {
    db.delete(`seviyexp${msg.guild.id}`)
    return msg.channel.send(`Seviye-XP sıfırlandı! Default: \`5\``);}
    
      if(db.fetch(`dil_${msg.guild.id}`) === "EN") {
    db.delete(`seviyexp${msg.guild.id}`)
    return msg.channel.send(`Level-XP has been reset! Default: \`5\``);}
  }

  let sayı = args[0]
  
  if(!sayı) return msg.channel.send("**[\`TR\`]**\nLütfen Bir Sayı Giriniz!\n**[\`EN\`]**\nPlease enter a number!")
  if(sayı > 20) return msg.channel.send("Max: `20`")
  
   if(db.fetch(`dil_${msg.guild.id}` != "EN")) {
  db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))
 return msg.channel.send("Başarıyla Seviye Puanını \`" + args[0] + "\` Olarak Ayarladınız!")}

     if(db.fetch(`dil_${msg.guild.id}` === "EN")) {
  db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))
 return msg.channel.send("You have successfully set your Level Score to \`" + args [0] + "\`!")}
  } }
)}
}