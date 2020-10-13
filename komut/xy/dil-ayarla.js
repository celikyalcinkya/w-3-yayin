module.exports = {
    cfx: {
        baslat: "dil",
        baslat1: "language" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
    run: async(client, message, args, Discord, db,) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
let except = args[0]
if(!except) return message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setAuthor("Hatalı Kullanım! / Misuse!", client.user.avatarURL)
.setDescription("`[`TR`]` `a!dil <EN ya da TR>`\n`[`EN`]` `a!language <EN or TR>`"))


if(args[0] === "TR") {
  message.channel.send(new Discord.RichEmbed()
  .setTitle(`:white_check_mark: ${client.user.username} | Dil Sistemi.`)
  .setDescription(`${client.user} Adlı Botun Dil Ayarı \`TR\` Olarak Ayarlandı!`)
  .setFooter(`${client.user.username} | Dil Sistemi`, client.user.avatarURL)).then(function(tr){tr.react("🇹"), tr.react("🇷")})
  db.set(`dil_${message.guild.id}`, "TR")}  
  
 if(args[0] === "EN") {
 message.channel.send(new Discord.RichEmbed()
  .setTitle(`:white_check_mark: ${client.user.username} | Language System.`)
  .setDescription(`${client.user} The Language Setting of the Bot set to \`EN\`!`)
  .setFooter(`${client.user.username} | Language System`, client.user.avatarURL)).then(function(en){en.react("🇪"), en.react("🇳")})
  db.set(`dil_${message.guild.id}`, "EN")}
}
}
