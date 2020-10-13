module.exports = {
    cfx: {
        baslat: "jail"
    },
run: async(client, message, args, Discord, db) => { 
    // kodunuz
if(args[0] == 'sıfırla' || args[0] == 'cezalırol' || args[0] == 'yetkilirol') {
if(message.member.hasPermission('ADMINISTRATOR')) {
  if(args[0] == 'sıfırla') {
    db.delete(`jailyrole${message.guild.id}`)
    db.delete(`jailrole${message.guild.id}`)
    db.delete(`jailrolename${message.guild.id}`)
    message.channel.send(`**[\`TR\`]**\nJail Sistemi Başarıyla Sıfırlandı!\n**[\`EN\`]**\nJail System Has Been Successfully Reset!`)
    return;
  }
  
  if(args[0] == 'cezalırol') {
    let role = message.mentions.roles.first() || message.guild.roles.find(ff => ff.name === args.slice(1).join(' '))
    db.set(`jailrole${message.guild.id}`, role.id)
    db.set(`jailrolename${message.guild.id}`, role.name)
    message.channel.send(`**[\`TR\`]**\nJail Cezalı-Rol Ayarlandı! Ayarlanan Rol: ${role}\n**[\`EN\`]**\nPrison Authority-Role Adjusted! Adjusted Role: ${role}`)
    return;
  }
  
  if(args[0] == 'yetkilirol') {
    let role = message.mentions.roles.first() || message.guild.roles.find(ff => ff.name === args.slice(1).join(' '))
    db.set(`jailyrole${message.guild.id}`, role.id)
    message.channel.send(`**[\`TR\`]**\nJail Yetkili-Rol Ayarlandı! Ayarlanan Rol: ${role}\n**[\`EN\`]**\nPrison Authority-Role Adjusted! Adjusted Role: ${role}`)
    return;
  }
} else {
  return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`ADMINISTRATOR\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`ADMINISTRATOR\` may use this command.`))
  }
}
  let yetkili = await db.fetch(`jailyrole${message.guild.id}`)
  if(!message.guild.member(message.author).roles.has(yetkili)) return message.reply(`**[\`TR\`]**\nJail Yetkilisi Değilsin!\n**[\`EN\`]**\nYou're Not a Jail Official!`)
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply(`**[\`TR\`]**\nEtiket Atmayı Unuttun!\n**[\`EN\`]**\nForgot to tag!`)

  if(user) {
  let rl1 = await db.fetch(`jailrolename${message.guild.id}`)
  let rl = await message.guild.roles.find(x => x.name === rl1)
  let check1 = await db.fetch(`jailrole${message.guild.id}`)
  if(!rl) {
  let rl1 = await db.fetch(`jailrolename${message.guild.id}`)
  await message.guild.createRole({name: "jail", color:'BLACK'}).then(async p => {
    await db.set(`jailrole${message.guild.id}`, p.id)
    let check2ch = message.guild.channels.find(x => x.name === 'jail')
    if(check2ch) {
      check2ch.overwritePermissions(p, {SEND_MESSAGES: true,READ_MESSAGES: true}); 
    }
  })
}
    if(rl) {
    let jail = message.guild.channels.find(x => x.name === 'jail')
    if(!jail) {
     await message.guild.createChannel('jail', 'text').then(async perm => {
        let rl1 = await db.fetch(`jailrolename${message.guild.id}`)
        let role1 = message.guild.roles.find(z => z.name === '@everyone')
        let role2 = message.guild.roles.find(f => f.name === rl1)
        perm.overwritePermissions(role1, {SEND_MESSAGES: false,READ_MESSAGES: false}); 
        perm.overwritePermissions(role2, {SEND_MESSAGES: true,READ_MESSAGES: true}); 
      })
    }
  }
  let jail = message.guild.channels.find(x => x.name === 'jail')
  if(jail) {
    let newrole = await db.fetch(`jailrole${message.guild.id}`)
  const ky = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`**[\`TR\`]**\n${user} Başarıyla Jaile Atıldı!\n**[\`EN\`]**\n${user} Jail Has Started Successfully!`)
        .setColor('ff0000')
        .setTimestamp()
        message.channel.send(ky)
        message.react('692123205648777237')
    user.roles.forEach(x => user.removeRole(x).then(f => f.addRole(newrole)))
    }
  }
    }
}
