module.exports = {
    cfx: {
        baslat: "starboard-sistemi",
        baslat1: "starboard-system"
    },
run: async(client, message, args, Discord, db) => {
  let link = `[Destek Sunucusu!](https://discord.gg/zXV6rJz)`
  let sup = `[Support Server!](https://discord.gg/zXV6rJz)`
  let davet = `[Website!](https://discord.gg/zXV6rJz)`
  let link1 = `[Website!](https://discord.gg/zXV6rJz)`
  let emoji = `693533313180368945`
  let p = client.ayarlar.ON_EK
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
  .setColor("GOLD")
  .setTitle(`${client.user.username} | Starboard Sistemi Komutları!`)
  .setDescription(`**${link} & ${link1}**`)                  
  .setThumbnail(client.user.avatarURL)                                     
  .addField(`** **`, `**__Not:__** Starboard Sistemi Geliştirmeleri Devam Etmektedir! Lütfen Oluşan Hataları Destek Sunucusundan Kurucuya(Except#4687) İletiniz!`)  
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard-ayarlar\`\n`, `Sunucunuzdaki Starboard Sisteminin Durumunu Atar!`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard kanal #kanal\`\n`, `Starboard Mesajlarının Gittiği Kanalı Belirlersiniz!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard sayı <sayı>\`\n`, `Starboard Sisteminde Mesaja Verilecek Yıldız Sayısını Ayarlarsınız! Default:\`3\``)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard sıfırla\`\n`, `Starboard Sistemini Sıfırlarsınız!`) 
  .setImage(`https://cdn.discordapp.com/attachments/694490626032533546/695324969105883186/starboard.JPG`)                   
  .setFooter(`${client.user.username} Starboard-Sistemi!`, client.user.avatarURL)   
  .setTimestamp())}
  
    if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(new Discord.RichEmbed()
  .setColor("GOLD")
  .setTitle(`${client.user.username} | Starboard System Commands!`)
  .setDescription(`**${sup} & ${davet}**`)                  
  .setThumbnail(client.user.avatarURL)                                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard-settings\`\n`, `Shows Features Set on Your Server!`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard kanal #kanal\`\n`, `You Set The Channel That Starboard Messages Go!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard sayı <sayı>\`\n`, `You set the number of stars to be given to the message in the Starboard System! Default:\`3\``)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}starboard sıfırla\`\n`, `You Reset the Starboard System!`) 
  .setImage(`https://cdn.discordapp.com/attachments/694490626032533546/695324969105883186/starboard.JPG`)                   
  .setFooter(`${client.user.username} Starboard-System!`, client.user.avatarURL)   
  .setTimestamp())}
  
  
  }}