module.exports = {
    cfx: {
        baslat: "slowmode"
    },
run: async(client, message, args, Discord, db) => { 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
              var embed = new Discord.RichEmbed()
                .setDescription(`Doğru kullanım: \`${client.ayarlar.ON_EK}slowmode [0/100]\``)
                .setColor('ff0000')
                .setTimestamp()
            message.channel.send({embed})}
     if(db.fetch(`dil_${message.guild.id}`) === "EN") {
              var embed = new Discord.RichEmbed()
                .setDescription(`Proper use: \`${client.ayarlar.ON_EK}slowmode [0/100]\``)
                .setColor('ff0000')
                .setTimestamp()
            message.channel.send({embed})}
            return
          }
if (limit > 100) {
    return 
  if(db.fetch(`dil_${message.guild.id}`) != "EN"){message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('ff0000'))}
  if(db.fetch(`dil_${message.guild.id}`) === "EN"){message.channel.sendEmbed(new Discord.RichEmbed().setDescription("The time limit can be a maximum of **100** seconds.").setColor('ff0000'))}
}
  if(db.fetch(`dil_${message.guild.id}`) != "EN") { message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('GOLD'))}
  if(db.fetch(`dil_${message.guild.id}`) === "EN") { message.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Writing time limit is set to **${limit}** seconds.`).setColor('GOLD'))}
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
    }
}
