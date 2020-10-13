module.exports = {
    cfx: {
        baslat: "pussy" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, msg, args, Discord, db) => { 
const DBL = require("dblapi.js");
const superagent = require("superagent")
const dbl = new DBL(`${client.ayarlar.dbl_token}`, client);
 dbl.hasVoted(msg.author.id).then(voted => {
  if (!voted) { msg.channel.send(`Bu komutu kullanabilmek için bota DBL üzerinden oy vermen gerekiyor. Eğer oy verdiyseniz 1-2 dakika beklemeniz gerekmektedir. Oy Linki: https://top.gg/bot/${client.user.id}/vote`) 
   } else {
//KOMUT
const ms = require('ms')
var time = ms("5s"),
amount = Math.floor(Math.random() * 10) + 200;      
let lastDaily = db.fetch(`lastDaily(${msg.author.id})`);
    if (lastDaily !== null && time - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(time - (Date.now() - lastDaily));
        

        const embed = new Discord.RichEmbed()
        .setTitle('Hata!')
        .setColor('ff0000')
        .setDescription(`Komutu Kullanmak İçin; \`5\` Saniye Beklemelisin!`)
        msg.channel.send(embed).then(n => n.delete(4000));
        return
    } else {
  
   if (msg.channel.nsfw === true) {
   db.set(`lastDaily(${msg.author.id})`, Date.now());
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      msg.channel.send(new Discord.RichEmbed()
      .setColor("ff0000")
      .setImage(response.body.message)
      .setDescription(`🔞 **[Pussy!](https://discordapp.com/oauth2/authorize?client_id=${`${client.user.id}`}&scope=bot&permissions=2146958847)**`)
      .setFooter(`${client.user.username} | Nsfw Sistem`)) 
    });
  } else {
       msg.channel.send(new Discord.RichEmbed()
    .setColor("ff0000")
    .setAuthor("Nsfw İzini Kapalı")
    .setDescription(`🔞 Yaşından Büyükseniz Kanal Ayarlarında \`NSFW\` izinini Açabilirsiniz!`)  
    .setImage(`https://i.imgur.com/oe4iK5i.gif`)      )
  } }
}})}
}