module.exports = {
    cfx: {
        baslat: "avatar"
    },
run: async(client, message, args, Discord, db) => { 
let user;  
if (message.mentions.users.first()) {
user = message.mentions.users.first();
    } else {
        user = message.author;
    }
const member = message.guild.member(user)
if(db.fetch(`dil_${message.guild.id}`) != "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setDescription(`\`${user.tag}\` Profil Fotoğrafı!`)
.setImage(user.avatarURL))}
if(db.fetch(`dil_${message.guild.id}`) === "EN") {
message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setDescription(`\`${user.tag}\` Profile İmage!`)
.setImage(user.avatarURL))}
  
  
  
  
  
    }
}
