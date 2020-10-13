module.exports = {
    cfx: {
        baslat: "forceban"
    },
run: async(client, message, args, Discord, db) => { 
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`BAN_MEMBERS\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`BAN_MEMBERS\` may use this command.`))
  
  
    let member = args[0];
    if (isNaN(member)) return message.reply(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nLütfen Banlanılacak Kişinin ID'sini Giriniz!\n**[\`EN\`]**\nPlease enter the ID of the Person to Be Banned!`))
    const sebep = args.splice(1, args.length).join(' ') || `Sebep belirtilmemiş.`;

message.guild.ban(member, sebep+" | Yetkili: "+message.author.tag).then(() => {
  if(db.fetch(`dil_${message.guild.id}`) != "EN") {
  return message.channel.send(`>>> <@${member}> \`(${member})\` Adlı Kişi Banlandı!\nBanlayan Yetkili: <@${message.author.id}>\nSebep: \`${sebep}\``)
  }
  
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
  return message.channel.send(`>>> <@${member}> \`(${member})\` Person named Banned!\nBanning Authorized: <@${message.author.id}>\nReason: \`${sebep}\``)
  }      
  })
            .catch((err) => {
                console.log(err);
            });

    }
}

