module.exports = {
    cfx: {
        baslat: "serverpanel"
    },
run: async(client, message, args, Discord, db) => { 
  let prefix = client.ayarlar.ON_EK
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`MANAGE_GUILD\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`MANAGE_GUILD\` may use this command.`))
  
  let panel = await db.fetch(`sunucupanel_${message.guild.id}`)
  
  let rekoronline = await db.fetch(`panelrekor_${message.guild.id}`)
  if(args[0] === "sil" || args[0] === "kapat" || args[0] === "off") {
    db.delete(`sunucupanel_${message.guild.id}`)
    db.delete(`panelrekor_${message.guild.id}`)
  try{
    message.guild.channels.find(x =>(x .name).includes("• Server Panel")).delete()
    message.guild.channels.find(x =>(x .name).includes("Total User •")).delete()
    message.guild.channels.find(x =>(x .name).includes("Online User •")).delete()
    message.guild.channels.find(x =>(x .name).includes("Bot's •")).delete()
    message.guild.channels.find(x =>(x .name).includes("Record Activity •")).delete()
  } catch(e) { }
    message.channel.send(`The preset server panel has been disabled!`)
   return 
  }

  if(panel) return message.channel.send(`The panel is already set up on this server! To disable;  \`${prefix}serverpanel off\``)
  
      message.channel.send(new Discord.RichEmbed().setColor('ff0000').setTitle('Server Panel').setDescription('Install necessary channels / roles?').setFooter('If you approve, you should write "yes" within 15 seconds.'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'yes', {
max: 1,
time: 15000,
errors: ['time'],
}) 
.then((collected) => { 
  
  db.set(`sunucupanel_${message.guild.id}`, message.guild.id)
  try{
  let role = message.guild.roles.find("name", "@everyone");
  message.guild.createChannel(`${client.user.username} • Server Panel`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
        message.guild.createChannel(`Toplam Kullanıcı• ${message.guild.members.size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Paneli`))).then(c => {
      c.overwritePermissions(role, {
          CONNECT: false,
      });
  })
  
        message.guild.createChannel(`Aktif Kullanıcılar • ${message.guild.members.filter(off => off.presence.status !== 'offline').size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Paneli`))).then(c => {
      c.overwritePermissions(role, {
          CONNECT: false,
      });
  })
  
        message.guild.createChannel(`Botlar • ${message.guild.members.filter(m => m.user.bot).size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Paneli`))).then(c => {
      c.overwritePermissions(role, {
          CONNECT: false,
      });
  })
  
        message.guild.createChannel(`Record Activity • ${message.guild.members.filter(off => off.presence.status !== 'offline').size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Paneli`))).then(c => {
      c.overwritePermissions(role, {
          CONNECT: false,
      });
  })
  db.set(`panelrekor_${message.guild.id}`, message.guild.members.filter(off => off.presence.status !== 'offline').size)
  
  message.channel.send(`Necessary channels were created for the Server Panel and adjustments were made! \`(Do not change the room, it will not work!) \` To close: \`${prefix}serverpanel off\``)
    
}catch(e){
      console.log(e.stack);
    }
  
    });
});
    }
}
