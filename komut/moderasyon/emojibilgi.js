module.exports = {
    cfx: {
        baslat: "emojibilgi",
        baslat1: "emojiinfo"
    },
run: async(client, message, args, Discord, db) => { 
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("**Emoji İsmi Belirtiniz!**")
    if (!emoji) return message.channel.send("Aradığınız İsimde Emoji Bulunmuyor!")
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setThumbnail(`${emoji.url}`)
    .addField(client.emojis.get(emoji.id) + "Emojinin ismi", `${emojiname}`)
    .addField(client.emojis.get(emoji.id) + "Emoji ID", `${emoji.id}`)
    .addField(client.emojis.get(emoji.id) + "Link", `[Tıkla!!](${emoji.url})`)
    message.channel.send(embed)}
  
  
    if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const embed = new Discord.RichEmbed()
    .setColor("ff0000")
    .setThumbnail(`${emoji.url}`)
    .addField(client.emojis.get(emoji.id) + "Emoji Name:", `${emojiname}`)
    .addField(client.emojis.get(emoji.id) + "Emoji ID:", `${emoji.id}`)
    .addField(client.emojis.get(emoji.id) + "Emoji URL:", `[Click!](${emoji.url})`)
    message.channel.send(embed)}
  
    }
}
