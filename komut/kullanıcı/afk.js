module.exports = {
    cfx: {
        baslat: "afk" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db) => { 
  var kullanıcı = message.author;
  var sebep = args.slice(0).join("  ");
if(!sebep) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nAFK Moduna Geçmek İçin Bir Sebep Belirtmelisin!\n**[\`EN\`]**\nYou must provide a reason to switch to AFK Mode!`))
  let dcs15 = new Discord.RichEmbed()
    .setTitle(`⚠ Uyarı! / Warning!`)
    .setTimestamp()
    .setFooter(client.user.username)
    .setThumbnail(message.author.avatarURL)
   .setDescription(`**[\`TR\`]**\nAFK Moduna Girmek İçin Onay Veriyor musun?\n**[\`EN\`]**\nDo you confirm entering AFK Mode?`)
    .setColor("RED");
  message.channel.send(dcs15).then(sunucu => {
    sunucu.react("✅").then(() => sunucu.react("❌"));

    let yesFilter = (reaction, user) =>
      reaction.emoji.name === "✅" && user.id === message.author.id;
    let noFilter = (reaction, user) =>
      reaction.emoji.name === "❌" && user.id === message.author.id;

    let yes = sunucu.createReactionCollector(yesFilter, { time: 0 });
    let no = sunucu.createReactionCollector(noFilter, { time: 0 });
//Dcs Ekibi
    yes.on("collect", r => {
      message.member.setNickname(`[AFK] ${message.member.displayName}`)
      db.set(`afktag_${message.author.id}`, message.member.displayName)
      let dcs16 = new Discord.RichEmbed()
        .setTitle(`✅ İşlem Başarılı! / ✅ Successful!`)
        .setDescription(`**[\`TR\`]**\nAFK Moduna Girdiniz!\n**[\`EN\`]**\nYou Entered AFK Mode!`)
        .setColor("GREEN")
        .setThumbnail(client.user.avatarURL)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.guild.name);
      message.channel.send(dcs16).then(x => {
        x.delete(5000);
      });
      
    });
    db.set(`afk_${kullanıcı.id}`, sebep);
    db.set(`afk_süre_${kullanıcı.id}`, Date.now());
    no.on("collect", r => {
    db.delete(`afk_${kullanıcı.id}`, sebep);
    db.delete(`afk_süre_${kullanıcı.id}`, Date.now());
      message.channel.send(`İptal Edildi!`)
    });
  });
  
  /*if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    db.set(`afk_${kullanıcı.id}`, sebep);
  db.set(`afk_süre_${kullanıcı.id}`, Date.now());
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setDescription(`**:crescent_moon: Başarıyla AFK Moduna Girdin!** ${kullanıcı}`))
  }
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.set(`afk_${kullanıcı.id}`, sebep);
  db.set(`afk_süre_${kullanıcı.id}`, Date.now());
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setDescription(`**:crescent_moon: You have successfully entered the AFK Mode!** ${kullanıcı}`))
  }*/
  
    }
}
