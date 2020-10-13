module.exports = {
    cfx: {
        baslat: "yarrag" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, msg, args, Discord, db,) => {
 //komutlara


let request = require("request");

exports.run = async (client, message, args) => {
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanabilmek için "\`Kanalları Yönet\`" yetkisine sahip olmalısın.`);
  message.guild.createChannel("Geçici Sohbet", "category").then(kategori => {
    message.guild.createChannel("Sohbet Oluştur", "voice").then(ses => {
    ses.setParent(kategori.id)
    db.set(`geciciKategori_${message.guild.id}`, kategori.id)
    db.set(`geciciKanal_${message.guild.id}`, ses.id)
  })
  })
  request({
    url: `https://discordapp.com/api/v7/channels/${db.fetch(`geciciKanal_${message.guild.id}`)}`,
    method: "PATCH",
    json: {
        user_limit: "3"
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
  message.channel.send("Başarıyla geçici oda sistemi aktif edildi! " + client.emojis.get("647746144155467786"))
}
  
  /*let rl = msg.guild.roles.find(v => v.id === "705020371937656872");
    const listedChannels = [];
    let onl;
    msg.guild.members.forEach(p => {
      if (p.roles.has(rl.id)) {
        if (msg.guild.member(p).user.presence.status === "idle")
          onl = `:yellow_circle:`
        if (msg.guild.member(p).user.presence.status === "dnd")
          onl = `:red_circle:`
        if (msg.guild.member(p).user.presence.status === "online")
          onl = `:green_circle:`
        if (msg.guild.member(p).user.presence.status === "offline")
          onl = `:white_circle:`

        listedChannels.push(`\`${p.user.tag}` + "\` " + onl );
      
      }

    });
msg.channel.send(new Discord.RichEmbed()
.setDescription(`<@&705020371937656872> Rolündeki Yetkili Durumu!`)
.addField(`** **`, `${listedChannels.join(`\n`)}`))*/
}
}
