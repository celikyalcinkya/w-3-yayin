module.exports = {
    cfx: {
        baslat: "kDFD" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
run: async(client, message, args, Discord, db) => {
  let emoji = '693533295681732688'
  let p = client.ayarlar.ON_EK
message.channel.send(new Discord.RichEmbed()
  .setColor("ff0000")
  .setTitle(`${client.user.username} | Kayıt-Sistemi Komutları!`)                
  .setThumbnail(client.user.avatarURL)                            
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-ol <isim> <yaş>\`\n`, `Sunucuya Kayıt Olursunuz!`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}nick <isim> <yaş>\`\n`, `Birinin Kullanıcı Adını Değiştirsiniz!`)       
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-ayarlar\`\n`, `Sunucu içerisinde kayıt sistemi ayarlarını sunar.`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-kapat\`\n`, `Sunucu içinde kayıt sistemini devre-dışı bırakmanıza yarar.`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-kanal\`\n`, `Kayıt-Sistemi Kanalı Ayarlarsınız!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-log\`\n`, `Sunucuda kayıt olan kişileri loga yansıtırsınız!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-alınacakrol\`\n`, `Kayıt Olan Kişiden Silinecek Rolü Ayalarsınız!`)                     
  .addField(`${client.emojis.get(`${emoji}`)}\`${p}kayıt-verilecekrol\`\n`, `Kayıt Olan Kişiye Verilecek Rolü Ayarlarsınız!`)        
  .setFooter(`${client.user.username} Kayıt-Sistemi!`)   
  .setTimestamp()
)
  }}