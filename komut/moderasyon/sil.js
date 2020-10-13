module.exports = {
    cfx: {
        baslat: "sil",
      baslat1: "clear"
    },
run: async(client, message, args, Discord, db) => { 
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`MANAGE_MESSAGES\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`MANAGE_MESSAGES\` may use this command.`))
    
let arguman = args[0]
if (!arguman) return message.channel.send(`**[\`TR\`]**\nSilinecek Mesaj Miktarını Yazar mısın? Max: \`100\`\n**[\`EN\`]**\nCan you write the amount of message to be deleted? Max: \`100\``)
if (arguman > 100) return message.channel.send("Max: \`100\`")
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.bulkDelete(arguman) 
message.channel.send(`:white_check_mark: Başarıyla **${arguman}** adet mesaj **silindi!**`).then(n => n.delete(4000));}
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.bulkDelete(arguman) 
message.channel.send(`:white_check_mark: **${arguman}** messages **deleted successfully!**`).then(n => n.delete(4000));}

    }
}
