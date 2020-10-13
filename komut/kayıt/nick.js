module.exports = {
  cfx: {
    baslat: "nick"
  },
  run: async (client, message, args, Discord, db, fs) => {
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`MANAGE_NICKNAMES\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`MANAGE_NICKNAMES\` may use this command.`))
  
  let member = message.mentions.members.first();
  let isim = args[1]
  let yaş = args[2]
  if (!member) return message.channel.send("❌ Bir Üye Etiketlemelisin! `Not: İsim Tek Kelimeden Oluşmak Zorundadır! Ve Aralardaki Boşluk Sayısı 1 Olmalıdrı!`");
  if (!isim) return message.channel.send("❌ Bir İsim Yazmalısın! `Not: İsim Tek Kelimeden Oluşmak Zorundadır! Ve Aralardaki Boşluk Sayısı 1 Olmalıdrı!`");
  if (!yaş) return message.channel.send("❌ Bir Yaş Yazmalısın! `Not: İsim Tek Kelimeden Oluşmak Zorundadır! Ve Aralardaki Boşluk Sayısı 1 Olmalıdrı!`");
  member.setNickname(`${isim} | ${yaş}`);
  const embed = new Discord.RichEmbed()
.setColor("ff0000")
    .addField(
      `**🏷 İsim Değiştirildi 🏷**`,
      `\n \n**🔸️İsmi Değiştirilen Kullanıcı:** ${member.user} \n🔸️ **Yeni Kullanıcı Adı:** \`${isim} | ${yaş}\``
    )
    .setFooter(`${client.user.username} | Nick Sistemi`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
  }
};
