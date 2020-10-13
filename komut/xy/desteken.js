module.exports = {
    cfx: {
        baslat: "help-system"
    },
run: async(client, message, args, Discord, db) => { 
var prefix = client.ayarlar.ON_EK
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.RichEmbed()
.setTitle(`Uyarı | Warning!`)
.setDescription(`**[\`TR\`]**\nBu Komutu Kullanmak İçin; \`MANAGE_MESSAGES\` Yetkisine Sahip Olmalısın!\n**[\`EN\`]**\nYou do not have permission to use this command. Only \`MANAGE_MESSAGES\` may use this command.`))
if (!args[0]) {

  
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(new Discord.RichEmbed() 
.setColor('ff0000') 
.setAuthor(`${client.user.username} Help System`, client.user.avatarURL) 
.setDescription(`**Incorrect Command Usage;**\n Proper use;\n\`${prefix}help-system channel #channel\n${prefix}help-system role @role\n${prefix}help-system off\``)
.setFooter(`request by: ${message.author.tag}`))}
 }

 
if(args[0] == 'kapat' || args[0] == "off") {
  
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.delete(`destekkanalen${message.guild.id}`)
    message.channel.send(`>>> **Support System Has Been Successfully Closed!**`)}
  
    return;
  }
if(args[0] == 'rol' || args[0] == "role") {
    let role = message.mentions.roles.first() || message.guild.roles.find(ff => ff.name === args.slice(1).join(' '))
    
   if(db.fetch(`dil_${message.guild.id}`) === "EN") { 
    db.set(`destekroleen${message.guild.id}`, role.id)
    message.channel.send(`>>> **Support System Authorized Role Adjusted! \ NAdjusted Role:** \`${role.name}\``)}
  return;
  }
  
  if(args[0] == 'kanal' || args[0] == "channel") {
    let akanal = message.mentions.channels.first()  || message.guild.channels.find(ff => ff.name === args.slice(1).join(' '))

    
    if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    db.set(`destekkanalen${message.guild.id}`, akanal.id)
    message.channel.send(`>>> **Support System Channel Adjusted! \n Adjusted Channel: \`${akanal.name}\`**`)} 
}}
}
