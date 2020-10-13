module.exports = {
    cfx: {
        baslat: "ban"
    },
run: async(client, message, args, Discord, db) => { 
 if (!message.guild) {

  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`BAN_MEMBERS\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`BAN_MEMBERS\` may use this command.`))
  
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nLütfen Banlanılacak Kişiyi Etiketleyin!\n**[\`EN\`]**\nYou Should Write Down Who You Want To Ban...`)).catch(console.error);
  if (reason.length < 1) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBanlama Sebebinizi Giriniz!\n**[\`EN\`]**\nEnter Reason!`))
  if (!message.guild.member(user).bannable) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nEtiketlediğiniz Kişinin Yetkisi Büyük İhtimalle Benden Yüksek Yetkimi Üste Taşıyın!\n**[\`EN\`]**\nPlease Upgrade My Role`))
  message.guild.ban(user, 2);
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  return message.channel.send(`>>> <@${user.id}> \`(${user.id})\` Adlı Kişi Banlandı!\nBanlayan Yetkili: <@${message.author.id}>\nSebep: \`${reason}\``)
  }
  
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  return message.channel.send(`>>> <@${user.id}> \`(${user.id})\` Person named Banned!\nBanning Authorized: <@${message.author.id}>\nReason: \`${reason}\``)
  }
    }
}
