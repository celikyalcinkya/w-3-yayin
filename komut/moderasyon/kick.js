module.exports = {
    cfx: {
        baslat: "kick"
    },
run: async(client, message, args, Discord, db) => { 
let guild = message.guild
let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Buna yetkin yok!`);
  if (message.mentions.users.size < 1) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nLütfen Atılacak Kişiyi Etiketleyin!\n**[\`EN\`]**\nYou Should Write Down Who You Want To will be discarded...`)).catch(console.error);
  if (reason.length < 1) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBanlama Sebebinizi Giriniz!\n**[\`EN\`]**\nEnter Reason!`))
  if (!message.guild.member(user).bannable) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nEtiketlediğiniz Kişinin Yetkisi Büyük İhtimalle Benden Yüksek Yetkimi Üste Taşıyın!\n**[\`EN\`]**\nPlease Upgrade My Role`))
message.guild.member(user).kick();
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
return message.channel.send(`>>> <@${user.id}> \`(${user.id})\` Adlı Kişi Sunucudan Atıldı!\nAtan Yetkili: <@${message.author.id}>\nSebep: \`${reason}\``)}
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
return message.channel.send(`>>> <@${user.id}> \`(${user.id})\` Person named Kicked! \nBanning Authorized: <@ $ {message.author.id}> \n Reason: \`${reason}\``)  
}
    }
}
