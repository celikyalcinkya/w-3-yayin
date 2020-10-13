module.exports = {
    cfx: {
        baslat: "profil",
        baslat1: "profile"
    },
run: async(client, message, args, Discord, db) => { 
var moment = require("moment")
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
  const Durum = user.presence.status;
            const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
            const knock = (Durum == "online" ? (`${client.emojis.get("693533187548381246")} \`Çevrimiçi\``) : (Durum == `offline` ? (`${client.emojis.get("693533185111228497")} \`Çevrimdışı\``) : (Durum == "idle" ? (`${client.emojis.get("693533187128819732")} \`Boşta\``) : (Durum == "dnd" ? (`${client.emojis.get("693533183072927865")} \`Rahatsız Etmeyin\``) : ("Bilinmiyor/bulunamadı.")))))
      let userinfo = {};
            userinfo.sonmesaj = user.lastMessage || "Son yazılan mesaj bulunamadı." || "Son yazılan mesaj gösterilemedi."
      const budaneωst = client.emojis.get('🤖')
            var tarih = ''
            if(moment(user.createdAt).format('MM') === '01') {
                var tarih = `${moment(user.createdAt).format('DD')} Ocak ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '02') {
                var tarih = `${moment(user.createdAt).format('DD')} Şubat ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '03') {
                var tarih = `${moment(user.createdAt).format('DD')} Mart ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '04') {
                var tarih = `${moment(user.createdAt).format('DD')} Nisan ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '05') {
                var tarih = `${moment(user.createdAt).format('DD')} Mayıs ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '06') {
                var tarih = `${moment(user.createdAt).format('DD')} Haziran ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '07') {
                var tarih = `${moment(user.createdAt).format('DD')} Temmuz ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '08') {
                var tarih = `${moment(user.createdAt).format('DD')} Ağustos ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '09') {
                var tarih = `${moment(user.createdAt).format('DD')} Eylül ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '10') {
                var tarih = `${moment(user.createdAt).format('DD')} Ekim ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '11') {
                var tarih = `${moment(user.createdAt).format('DD')} Kasım ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
            if(moment(user.createdAt).format('MM') === '12') {
                var tarih = `${moment(user.createdAt).format('DD')} Aralık ${moment(user.createdAt).format('YYYY HH:mm:ss')} `
            }
 


    const member = message.guild.member(user);
var nickname = [];
if(member.nickname != member.displayName) nickname = member.nickname
if(member.nickname == member.displayName) nickname = member.displayName 
let emoji = `693533313180368945`
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setDescription(`**${user.tag} Profil**`)
        .setThumbnail(user.avatarURL)
        .addField(`${client.emojis.get(`${emoji}`)} **Tag:**`, `\`${user.tag}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **ID:**`, `\`${user.id}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **Sunucudaki Kullanıcı Adı:**`, `${nickname || member.displayName}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Hesap Kuruluş Tarihi:**`, `\`${tarih}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **Bot mu?:**`, `${user.bot ? `${client.emojis.get("693533168564699258")} \`Evet! Bu Bir Bot\``  : `${client.emojis.get("693533309161963561")} \`Hayır.\``}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Durum:**`, `${knock}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Şuanda Oynadığı Oyun:**`, `\`${user.presence.activity ? user.presence.game.name : 'Şuanda hiç bir oyun oynamıyor.'}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **Rolleri:**`, `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : ' Bu kullanıcının bu sunucuda hiç rolü bulunmuyor.'}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Son gönderdiği mesaj:**`, `\`${userinfo.sonmesaj}\``, false)
        .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)   
        .setTimestamp()
        message.channel.send({embed})}
  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const embed = new Discord.RichEmbed()
        .setColor('ff0000')
        .setDescription(`**${user.tag} Profile**`)
        .setThumbnail(user.avatarURL)
        .addField(`${client.emojis.get(`${emoji}`)} **Tag:**`, `\`${user.tag}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **ID:**`, `\`${user.id}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **Username on Server:**`, `${nickname || member.displayName}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Account Establishment Date:**`, `\`${tarih}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **User:**`, `${user.bot ? `${client.emojis.get("693533168564699258")} \`Yes! This is a bot\``  : `${client.emojis.get("693533309161963561")} \`Nope.\``}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Status:**`, `${knock}`)
        .addField(`${client.emojis.get(`${emoji}`)} **Now playing:**`, `\`${user.presence.activity ? user.presence.game.name : 'No games are currently being played.'}\``)
        .addField(`${client.emojis.get(`${emoji}`)} **Roles:**`, `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : ' Bu kullanıcının bu sunucuda hiç rolü bulunmuyor.'}`)
        .addField(`${client.emojis.get(`${emoji}`)} **last post:**`, `\`${userinfo.sonmesaj}\``, false)
        .setFooter(`${message.author.username} requested by.`, message.author.avatarURL)   
        .setTimestamp()
        message.channel.send({embed})}

} }
