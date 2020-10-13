module.exports = {
    cfx: {
        baslat: "seviye-top",
        baslat1: "level-top"
    },
run: async(client, message, args, Discord, db) => { 
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
const DBL = require("dblapi.js");
const dbl = new DBL(`${client.ayarlar.dbl_token}`, client);
 dbl.hasVoted(message.author.id).then(voted => {
  if (!voted) { message.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {  
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
let user = message.author;
let id = message.author.id
let guild = message.guild;
let gid = message.guild.id
let sayi = 1
let map = message.guild.members.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`lvl_${b.user.id}_${message.guild.id}`) || 0) - ( db.fetch(`lvl_${a.user.id}_${message.guild.id}`) || 0)  }).slice(0, 5).map(member => { return `\`#${sayi++}\` <@${member.user.id}> | **__Seviye:__** \`${( db.fetch(`lvl_${member.user.id}_${message.guild.id}`))}\` **__XP:__** \`${( db.fetch(`xp_${member.user.id}_${message.guild.id}`)) || `0`}\`` })
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setAuthor(`${message.guild.name} Seviye İlk 5`, client.user.avatarURL)
.setDescription(map)
.setFooter(`${client.user.username} Seviye-Top Sistemi!`, client.user.avatarURL))}
  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  let user = message.author;
  let id = message.author.id
  let guild = message.guild;
  let gid = message.guild.id
  let sayi = 1
  let map = message.guild.members.filter(mem => !mem.user.bot).array().sort((a, b) => { return ( db.fetch(`lvl_${b.user.id}_${message.guild.id}`) || 0) - ( db.fetch(`lvl_${a.user.id}_${message.guild.id}`) || 0)  }).slice(0, 5).map(member => { return `\`#${sayi++}\` <@${member.user.id}> | **__Level:__** \`${( db.fetch(`lvl_${member.user.id}_${message.guild.id}`))}\` **__XP:__** \`${( db.fetch(`xp_${member.user.id}_${message.guild.id}`)) || `0`}\`` })
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setAuthor(`${message.guild.name} Level-Top 5`, client.user.avatarURL)
  .setDescription(map)
  .setFooter(`${client.user.username} Level-Top System!`, client.user.avatarURL))}

} }
)}
}