module.exports = {
    cfx: {
        baslat: "unban"
    },
run: async(client, message, args, Discord, db) => { 
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`BAN_MEMBERS\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`BAN_MEMBERS\` may use this command.`)) 
let unbanid = args[0];
if (!unbanid) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nLütfen Kullanıcı ID Giriniz!\n**[\`EN\`]**\nPlease Enter User ID!`))
message.guild.unban(`${unbanid}`)   
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
return message.channel.send(` >>> **<@${unbanid}>\`(${unbanid})\` Adlı Kullanıcının Banı <@${message.author.id}> Adlı Yetkili Tarafından Açıldı!**`) }
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
return message.channel.send(` >>> **<@${unbanid}>\`(${unbanid})\` The ban was opened!**`)}
    }
}

