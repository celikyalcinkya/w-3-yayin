module.exports = {
    cfx: {
        baslat: "banlist"
    },
run: async(client, message, args, Discord, db) => { 
var userlist = message.guild.fetchBans();
let emoji = `693533134200766644`  
let cizgi = `692676160399867977`
let p = client.ayarlar.ON_EK
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       if(db.fetch(`dil_${message.guild.id}`) != "EN") {
       const embed = new Discord.RichEmbed()
       .setTitle(`Sunucunuzda Banlanan Kişi Bulunmamaktadır!`)
       .setColor("ff0000");
       message.channel.send({embed})}
       if(db.fetch(`dil_${message.guild.id}`) === "EN") {
       const embed = new Discord.RichEmbed()
       .setTitle(`There Is No Banned Person On Your Server!`)
       .setColor("ff0000");
       message.channel.send({embed})}
     }
     else
     {
       if(db.fetch(`dil_${message.guild.id}`) != "EN") {
       const embed = new Discord.RichEmbed()
       .setTitle(`${client.emojis.get(`${emoji}`)} Sunucudan Banlananlar`)
       .setColor("ff0000");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(`\`${user.tag} / (${user.id})\``, `///////////////////////////////////`);
           embed.setFooter(`Banı Açmak İçin ${p}unban <id>`, client.user.avatarURL)
       }
       message.channel.send({embed});}
       
        if(db.fetch(`dil_${message.guild.id}`) === "EN") {
       const embed = new Discord.RichEmbed()
       .setTitle(`${client.emojis.get(`${emoji}`)} Server Prohibited`)
       .setColor("ff0000");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(`\`${user.tag} / (${user.id})\``, `///////////////////////////////////`);
           embed.setFooter(`To Open Ban ${p}unban <id>`, client.user.avatarURL)
       }
       message.channel.send({embed});}
     }
   });
    }
}
