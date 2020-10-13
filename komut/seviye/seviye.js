module.exports = {
    cfx: {
        baslat: "seviye",
        baslat1: "level"
    },
run: async(client, message, args, Discord, db) => { 
  
  var user = message.mentions.users.first() || message.author;
  var id = user.id
  var gid = message.guild.id;

  
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
  let u = message.mentions.users.first() || message.author;
  if(u.bot === true) { message.channel.send(new Discord.RichEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("ff0000"))}  
  else 
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setAuthor(`${user.username}`, user.avatarURL)
  .setThumbnail(user.avatarURL)                     
  .setTitle(`Seviye Bilgisi:`)                 
  .addField(`Kullanıcı:`, `<@${user.id}>`, true)
  .addField(`Kullanıcı Xp Değeri:`, `**${xp || 0}**`, true)   
  .addField(`Kullanıcı Seviye Değeri:`, `**${lvl || 0}**`, true)
  .setFooter(`${client.user.username} Seviye Sistemi!`, client.user.avatarURL)   
  .setTimestamp())}
    
        if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setAuthor(`${user.username}`, user.avatarURL)
  .setThumbnail(user.avatarURL)                     
  .setTitle(`Level Information:`)                 
  .addField(`User:`, `<@${user.id}>`, true)
  .addField(`User Xp Value:`, `**${xp || 0}**`, true)   
  .addField(`User Level Value:`, `**${lvl || 0}**`, true)
  .setFooter(`${client.user.username} Level System!`, client.user.avatarURL)   
  .setTimestamp())}
    
    } }
