const Discord = require("discord.js");
const db = require("quick.db");

module.exports = async function(reaction, user) {
  function getImage(reaction, attachment) {
    let imageLink = attachment.split(".");
    let typeOfImage = imageLink[imageLink.length - 1];
    let image = /(jpg|jpeg|png|gif)/gi.test(typeOfImage);
    if (!image) return "";
    return attachment;
  }

  let emojis = {
    0: "⭐",
    1: "✅"
  };
  const msg = reaction.message;
  const msgID = msg.id;
  const msgChannelID = msg.channel.id;

  let emoji = db.has(reaction.message.guild.id + ".starEmoji")
    ? emojis[db.get(reaction.message.guild.id + ".starEmoji")]
    : emojis[0];
  let minCount = db.has(reaction.message.guild.id + ".starCount")
    ? db.get(reaction.message.guild.id + ".starCount")
    : 3;
  if (reaction.emoji.name !== emoji) return;
  let channel = db.has(reaction.message.guild.id + ".starChannel")
    ? reaction.message.guild.channels.get(
        db.get(reaction.message.guild.id + ".starChannel")
      )
      ? reaction.message.guild.channels.get(
          db.get(reaction.message.guild.id + ".starChannel")
        )
      : undefined
    : undefined;
  if (!channel && reaction.message.channel.id === channel.id) return;
  if (reaction.message.author.bot)
    return reaction.message.channel.send(user +
        ", herhangi bir botun mesajına yıldız/özel emoji koyamazsın."
    );
  let fetchedMessages = await channel.fetchMessages();
  let image =
    reaction.message.attachments.size > 0
      ? getImage(reaction, reaction.message.attachments.array()[0].url)
      : "";
  let starEmbeds = fetchedMessages
    .array()
    .filter(
      msg =>
        msg.embeds[0].footer.text.startsWith(emoji) &&
        msg.embeds[0].footer.text.endsWith(reaction.message.id)
    );
  if (minCount <= reaction.count && starEmbeds[0]) {
    let embed = new Discord.RichEmbed()
      .setColor("GOLD")
      .setTitle(`Yıldızlanan Mesaj!`)
      .setURL(`https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id}`)
      .addField("**Mesaja git:**",`**[Zıpla](https://discordapp.com/channels/${msg.guild.id}/${msg.channel.id}/${msg.id})**`, true)
      .addField("**Mesaj sahibi:**", `<@${reaction.message.author.id}>`, true)
      .addField("Kanal: ", `<#${msgChannelID}>`, true)
      .addField("Mesaj: ", reaction.message.content, true)
      .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL)
      .setImage(image)
      .setTimestamp()
      .setThumbnail(reaction.message.author.avatarURL)
      .setFooter(emoji + " " + reaction.count + " | Mesaj ID: " + reaction.message.id);
 if (reaction.message.content) {
        embed.addField("Mesaj:", reaction.message.content, true);
      }
      if (msg.attachments.size > 0) {
        embed.setImage(msg.attachments.first().url);
      }

    let message = await channel.fetchMessage(starEmbeds[0].id);
    message.edit(embed);
  } else if (starEmbeds[0]) {
    let message = await channel.fetchMessage(starEmbeds[0].id);
    message.delete();
  }
};