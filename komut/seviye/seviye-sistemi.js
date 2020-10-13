module.exports = {
    cfx: {
        baslat: "seviye-sistemi",
        baslat1: "level-system"
    },
run: async(client, message, args, Discord, db) => {
  let link = `[Destek Sunucusu!](https://discord.gg/zXV6rJz)`
  let link3 = `[Support Server!](https://discord.gg/zXV6rJz)`
  let link1 = `[Website](https://discord.gg/zXV6rJz)`
  let emoji = `693814532308729927`
  let p = client.ayarlar.ON_EK
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle(`${client.user.username} | Seviye Sistemi Komutları!`)
  .setDescription(`**${link} & ${link1}**`)                  
  .setThumbnail(client.user.avatarURL)                                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye\`\n`, `Profilinizin seviye bilgisi size sunar.`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-ayarlar\`\n`, `Sunucu içerisinde seviye sistemi ayarlarını sunar.`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-rol\`\n`, `Seviye Sisteminde Seviyeye Göre Rol Verme Sistemi!`)         
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-top\`\n`, `Sunucudaki En Yüksek Seviyeye Sahip 5 Kişiyi Listeler!`)                                                                         
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-log\`\n`, `Sunucuda seviye kazanan kişilerin seviye bilgileri kanalda log olarak tutulmayı ayarlarsınız.`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-sıfırla\`\n`, `Seviye-Sisteminin Bütün Ayarlanmış Fonksiyonlarını Sıfırlarsınız!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-xp\`\n`, `Gönderilen mesaj başına kazanılan xp sayısını ayarlarsınız!\nDefault: \`3\``) 
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-sınır\`\n`, `Kaç Puanda Seviye Atlanılacağını Belirlersiniz!\nDefault: \`250\``)                    
  .setFooter(`${client.user.username} Seviye Sistemi!`, client.user.avatarURL)   
  .setTimestamp())}
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    message.channel.send(new Discord.RichEmbed()
      .setColor("ff0000")
      .setTitle(`${client.user.username} | Level-System Commands!`)
      .setDescription(`**${link3} & ${link1}**`)                  
      .setThumbnail(client.user.avatarURL)                                     
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level\`\n`, `It offers the level information size of your profile.`)       
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-settings\`\n`, `It offers level system settings within the server.`)                     
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-role\`\n`, `Role-Playing System in Level System by Level!`)         
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-top\`\n`, `Lists the Top 5 People on the Server!`)                                                                         
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-log\`\n`, `You set the level information of the people who have gained level on the server to be logged in the channel.`)                     
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-clear\`\n`, `You Reset All Adjusted Functions of the Level-System!`)                     
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}level-xp\`\n`, `You set the number of xp earned per sent message!\nDefault: \`3\``) 
      .addField(`${client.emojis.get(`${emoji}`)}\`${p}seviye-boundary\`\n`, `You Can Determine How Many Points to Level Up!\nDefault: \`250\``)                    
      .setFooter(`${client.user.username} Level System!`, client.user.avatarURL)   
      .setTimestamp())}
}}
