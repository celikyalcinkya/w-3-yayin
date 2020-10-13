module.exports = {
  cfx: {
    baslat: "level-log",
    baslat1: "seviye-log"
  },
  run: async (client, message, args, Discord, db) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  
  
   if(args[0] == "sıfırla") {
    db.delete(`seviyekanal${message.guild.id}`)
    return message.channel.send(`Seviye-Log sıfırlandı!`);
  }
    
    
   if (args[0]) {
      let akanal =
        message.mentions.channels.first() ||
        message.guild.channels.find(ff => ff.name === args.slice(1).join(" "));
      db.set(`seviyekanal${message.guild.id}`, akanal.id);
     if(db.fetch(`dil_${message.guild.id}`) != "EN") {
      message.channel.send(`Seviye Log Kanalı Ayarlandı! Ayarlanan Kanal: <#${akanal.id}>`)}
      
     if(db.fetch(`dil_${message.guild.id}`) === "EN") {
      message.channel.send(`Level Log Channel Adjusted! Adjusted Channel: <#${akanal.id}>`)}
     
    }


  }
};
