module.exports = {
    cfx: {
        baslat: "yetkiler", 
        baslat1: "powers"
    },
run: async(client, msg, args, Discord, db) => { 
   var user = msg.mentions.users.first() || msg.author;
  let evet = `693533312408617001`
  let hayır = `693533309161963561`
 let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.guild.member(user).hasPermission("ADMINISTRATOR")) x = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("ADMINISTRATOR")) x = `${client.emojis.get(`${hayır}`)}`
    
    //Denetim kaydı
    if (msg.guild.member(user).hasPermission("VIEW_AUDIT_LOG")) x2 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("VIEW_AUDIT_LOG")) x2 = `${client.emojis.get(`${hayır}`)}`
    
    //Sunucuyu yönet
    if (msg.guild.member(user).hasPermission("MANAGE_GUILD")) x3 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_GUILD")) x3 = `${client.emojis.get(`${hayır}`)}`
    
    //Rolleri yönet
    if (msg.guild.member(user).hasPermission("MANAGE_ROLES")) x4 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_ROLES")) x4 = `${client.emojis.get(`${hayır}`)}`
    
    //Kanalları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_CHANNELS")) x5 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_CHANNELS")) x5 = `${client.emojis.get(`${hayır}`)}`
    
    //üyeleri at
    if (msg.guild.member(user).hasPermission("KICK_MEMBERS")) x6 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("KICK_MEMBERS")) x6 = `${client.emojis.get(`${hayır}`)}`
    
    //üyeleri yasakla
    if (msg.guild.member(user).hasPermission("BAN_MEMBERS")) x7 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("BAN_MEMBERS")) x7 = `${client.emojis.get(`${hayır}`)}`
    
    //mesajları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_MESSAGES")) x8 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_MESSAGES")) x8 = `${client.emojis.get(`${hayır}`)}`
    
    //kullanıcı adlarını yönet
    if (msg.guild.member(user).hasPermission("MANAGE_NICKNAMES")) x9 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_NICKNAMES")) x9 = `${client.emojis.get(`${hayır}`)}`
    
    //emojileri yönet
    if (msg.guild.member(user).hasPermission("MANAGE_EMOJIS")) x10 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_EMOJIS")) x10 = `${client.emojis.get(`${hayır}`)}`
    
    //webhookları yönet
    if (msg.guild.member(user).hasPermission("MANAGE_WEBHOOKS")) x11 = `${client.emojis.get(`${evet}`)}`
    if (!msg.guild.member(user).hasPermission("MANAGE_WEBHOOKS")) x11 = `${client.emojis.get(`${hayır}`)}`
     
if(db.fetch(`dil_${msg.guild.id}`) != "EN") {
const bergy = new Discord.RichEmbed()
.setColor('ff0000')    
.setDescription(`${user}'in Yetkileri!`)
.setThumbnail(user.avatarURL)
.addField("** **",`
${x} __Yönetici__
${x2} __Denetim Kaydını Görüntüle__
${x3} __Sunucuyu Yönet__
${x4} __Rolleri Yönet__
${x5} __Kanalları Yönet__
${x6} __Üyeleri At__
${x7} __Üyeleri Yasakla__
${x8} __Mesajları Yönet__
${x9} __Kullanıcı Adlarını Yönet__
${x10} __Emojileri Yönet__
${x11} __Webhook'ları Yönet__
Başında ${client.emojis.get(`${hayır}`)} olanlar o yetkiye sahip olunmadığını gösterir. \nBaşında ${client.emojis.get(`${evet}`)} olanlar o yetkiye sahip olunduğunu gösterir.`)
msg.channel.send(bergy)}
  
  
if(db.fetch(`dil_${msg.guild.id}`) === "EN") {
const bergy = new Discord.RichEmbed()
.setColor('ff0000')    
.setDescription(`${user}'s Power(s)!`)
.setThumbnail(user.avatarURL)
.addField("** **",`
${x} __ADMINISTRATOR__
${x2} __VIEW_AUDIT_LOG__
${x3} __Manage_Server__
${x4} __MANAGE_ROLES__
${x5} __ MANAGE_CHANNELS__
${x6} __KICK_MEMBERS__
${x7} __BAN_MEMBERS__
${x8} __MANAGE_MESSAGES__
${x9} __MANAGE_NICKNAMES__
${x10} __MANAGE_EMOJIS__
${x11} __MANAGE_WEBHOOKS__
At the beginning ${client.emojis.get(`${hayır}`)} those who show that they do not have that authority. \nAt the beginning ${client.emojis.get(`${evet}`)} those who show that they have that authority.`)
msg.channel.send(bergy)}
  
  
    }
}
