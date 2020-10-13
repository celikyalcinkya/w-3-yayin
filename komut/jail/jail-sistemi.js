module.exports = {
    cfx: {
        baslat: "jail-sistemi" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db) => {
  let link = `[Destek Sunucusu!](https://discord.gg/zXV6rJz)`
  let link1 = `[Website!](https://discord.gg/zXV6rJz)`
  let link2 = `[Support Server!](https://discord.gg/zXV6rJz)`
  let link3 = `[Website!](https://discord.gg/zXV6rJz)`
  let emoji = `693533134200766644`
  let p = client.ayarlar.ON_EK
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle(`${client.user.username} | Jail-Sistemi Komutları!`)
  .setDescription(`**${link} & ${link1}**`)                  
  .setThumbnail(client.user.avatarURL)                                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail yetkilirol <@rol>\`\n`, `Jail Yetkili-Rol Ayarlamanızı Sağlar!.`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail cezalırol <@rol>\`\n`, `Jail Cezalı-Rol Ayarlamanızı Sağlar!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail sıfırla\`\n`, `Jail'in Bütün Ayarlanmış Şeylerini Sıfırlar!`)
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail ayarlar\`\n`, `Jail-Sistemi Durumunu Gösterir!`)  
  .addField(`** **`, `${client.emojis.get(`${emoji}`)} Jail-Sistemi Rollerini Sadece Sunucuda \`Yönetici\` Yetkisi Olanlar Ayarlıyabilir! Ek Olarak; Cezalı Rolü Ayarlamazsanız Bot Otomatik Rol Açar \`jail\` Ve Otomatik Sadece Jail Rolünün Görebildiği Kanal Açar!`)                                      
  .setFooter(`${client.user.username} Jail-Sistemi!`)   
  .setTimestamp() )
  message.react('693533313180368945')}

  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle(`${client.user.username} | Jail-System Commands!`)
  .setDescription(`**${link2} & ${link3}**`)                  
  .setThumbnail(client.user.avatarURL)                                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail authorizedrole <@role>\`\n`, `Jail Enables You To Set Authorized-Role!`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail punishedrole <@role>\`\n`, `Jail-Penalty-Lets You Set Role!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail reset\`\n`, `Resets Jail's All Adjusted Things!`)
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}jail-settings\`\n`, `Shows Jail-System Status!`)  
  .addField(`** **`, `${client.emojis.get(`${emoji}`)} Only Jail-System Administrators can Set the Jail-System Roles on the Server! In addition; If You Don't Set the Suspended Role, The Bot Opens Auto Role \`jail\` And Auto Opens Channel That Only Jail Role Can See!`)                                      
  .setFooter(`${client.user.username} Jail-System!`)   
  .setTimestamp() )
  message.react('693533313180368945')}
  }}