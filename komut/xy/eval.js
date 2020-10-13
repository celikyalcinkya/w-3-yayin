module.exports = {
  cfx: {
    baslat: "eval"
  },
  run: async (client, message, args, Discord, db, fs) => {
    const util = require("util");

    if (args[0] === "client.token")
      return message.channel.sendMessage("YARAMI KEMİR İBNE!");
    let owner = ["624346501010685969"];
    if (owner.includes(message.author.id)) {
      try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
        for (let i = 0; i < evaled.length; i += 2000) {
          const toSend = evaled.substring(i, Math.min(evaled.length, i + 2000));
          message.channel.send(
            new Discord.RichEmbed()
              .setDescription("```xl\n" + clean(toSend) + "\n```")
              .setColor("#00ff88")
              .setTimestamp()
              .setFooter(`${client.user.username}`, client.user.avatarURL)
          );
        }
      } catch (err) {
        message.channel.sendMessage(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
      function clean(text) {
        if (typeof text === "string")
          return text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203));
        else return text;
      }
    } else {
      return;
    }
  }
};
/*client.on('voiceStateUpdate', (oldMember, newMember, message) => {
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
const ms = require("parse-ms")

  if(oldUserChannel === undefined && newUserChannel !== undefined) {
db.set(`sesstats_${oldMember.user.id}_${oldMember.guild.id}`, Date.now())
  } else if(newUserChannel === undefined){
let süre = db.fetch(`sesstats_${oldMember.user.id}_${oldMember.guild.id}`);
let zaman = ms(Date.now() - süre);
let saniye = zaman.seconds
let dakika = zaman.minutes
let saat = zaman.hours
client.channels.get("706270667711971339").send(`${oldMember.user} \`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniye**`)
let oldData = db.get(`sesstats1_${oldMember.user.id}_${oldMember.guild.id}`)
db.set(`sesstats1_${oldMember.user.id}_${oldMember.guild.id}`, {
saat: Math.floor(saat + oldData.saat),
dakika: Math.floor(dakika + oldData.dakika),
saniye: Math.floor(saniye + oldData.saniye)
})
 }
})*/