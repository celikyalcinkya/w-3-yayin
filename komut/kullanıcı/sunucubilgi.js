module.exports = {
    cfx: {
        baslat: "sunucubilgi",
        baslat1: "serverinfo"
    },
  
run: async(client, message, args, Discord, db) => { 
  const moment = require("moment");
  var afk = [];  
if(message.guild.afkChannel == null) afk = `Yok`
if(message.guild.afkChannel != null) afk = message.guild.afkChannel
  
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor("ff0000")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
    let dil = await db.fetch(`dil_${message.guild.id}`)
if(dil != "EN") {
  let icon = message.guild.iconURL || client.user.avatarURL
   message.channel.send(new Discord.RichEmbed()
    .setColor("ff0000")
    .setAuthor(message.guild.name, icon)
    .setThumbnail(icon)
    .addField('İsmi:', `\`\`${message.guild.name}\`\` `, true)
    .addField('Kimliği:', `\`\`${message.guild.id}\`\` `, true)
    .addField('Bölgesi:', `\`\`${message.guild.region}\`\` `, true)
    .addField('Sahibi:', `${message.guild.owner}`, true)
    .addField('Üyeler:', `\`\`${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount}  üye\`\``, true)
    .addField('Kanallar:', `\`\`${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli /\`\` \`\`${message.guild.channels.filter(chan => chan.type === 'text').size} metin\`\``, true)
    .addField('Kanal sayısı:', `\`\`${message.guild.channels.size}\`\` `, true)
    .addField('AFK kanalı:', `${afk}`, true)
    .addField('Oluşturma tarihi:', moment.utc(message.guild.createdAt).format('`YYYY [Yılında] MMMM [Ayında] dddd [Gününde] (DD/MM/YYYY)`').replace("Monday", `Pazartesi`)
        .replace("Tuesday", `Salı`)
        .replace("Wednesday", `Çarşamba`)
        .replace("Thursday", `Perşembe`)
        .replace("Friday", `Cuma`)
        .replace("Saturday", `Cumartesi`)
        .replace("Sunday", `Pazar`)
        .replace("January", `Ocak`)
        .replace("February", `Şubat`)
        .replace("March", `Mart`)
        .replace("April", `Nisan`)
        .replace("May", `Mayıs`)
        .replace("June", `Haziran`)
        .replace("July", `Temmuz`)
        .replace("August", `Ağustos`)
        .replace("September", `Eylül`)
        .replace("October", `Ekim`)
        .replace("November", `Kasım`)
        .replace("December", `Aralık`),true)
    .setFooter(message.guild.name, icon))
}
      
    if(dil === "EN") {
      
        var yarrah = [];  
if(message.guild.afkChannel == null) yarrah = `Off`
if(message.guild.afkChannel != null) yarrah = message.guild.afkChannel
  let icon = message.guild.iconURL || client.user.avatarURL
    let dil = await db.fetch(`dil_${message.guild.id}`)
      message.channel.send(new Discord.RichEmbed()
    .setColor("ff0000")
    .setAuthor(message.guild.name, icon)
    .setThumbnail(icon)
    .addField('Server Name:', `\`\`${message.guild.name}\`\` `, true)
    .addField('Server ID:', `\`\`${message.guild.id}\`\` `, true)
    .addField('Server Zone:', `\`\`${message.guild.region}\`\` `, true)
    .addField('Server Owner:', `${message.guild.owner}`, true)
    .addField('Server Stats:', `\`\`${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} user\`\``, true)
    .addField('Voice / Message:', `\`\`${message.guild.channels.filter(chan => chan.type === 'voice').size} voice /\`\` \`\`${message.guild.channels.filter(chan => chan.type === 'text').size} message\`\``, true)
    .addField('Channel size:', `\`\`${message.guild.channels.size}\`\` `, true)
    .addField('AFK channels:', `${yarrah}`, true)
    .addField('Created At:', moment.utc(message.guild.createdAt).format('`YYYY MMMM dddd (DD/MM/YYYY)`'))
    .setFooter(message.guild.name, icon))
      
      
    }  
      
    }
  
    }
}
