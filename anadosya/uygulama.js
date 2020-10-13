const express = require('express');
const app = express();
const http = require('http');
const moment = require('moment');
const Discord = require('discord.js')
const db = require('quick.db')
const ms = require("parse-ms")
const client = new Discord.Client();
const fs = require('fs')
client.komutlar = new Discord.Collection();
client.ayarlar = { version: '3.5', ON_EK: 'qq!', SAHIP: '673250061026852904', dbl_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MDcxMTk4MzgxNjgzNTA5NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg2MjU2NzQ2fQ.EuzlIxorY3_4qtAeVoI3dw89gAiaECZ0yZh3je_y6v4' } 
client.on('ready', () => {
var oyun = [
"twitch.tv/wandas3",
"w!yardım" ,
];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], );
        }, 2 * 9000);
  
  console.log('Çevrimiçi.')
})
client.on('messageReactionAdd', require('../starboard/messageReactionAdd.js'))
client.on('messageReactionRemove', require('../starboard/messageReactionRemove.js'))
// >> KOMUT YÜKLEYİCİ
const kategoriler = fs.readdirSync("./komut/")
kategoriler.forEach(cfx => {
fs.readdir(`./komut/${cfx.slice(0, 1) + cfx.slice(1)}`, (err, files) => {
    if(err) console.log(err)
    let jsdosya = files.filter(f => f.split(".").pop() === "js")
    if(jsdosya.length <= 0){
        console.log("Kod bulunamadı!");
        return;
    }
    jsdosya.forEach((f, i) => {
        let props = require(`../komut/${cfx.slice(0, 1) + cfx.slice(1)}/${f}`);
        console.log(`${f} yüklendi!`)
        client.komutlar.set(props.cfx.baslat, props);
        client.komutlar.set(props.cfx.baslat1, props);
     });
  });
});

//client.on('ready', () => {
  //let x = false;
  //while(!x) {
  //for(var i = 0; i < 500; i ++) {
  //require('util').promisify(setInterval)(() => {client.login(process.env.TOKEN)}, 100)
  //}
 // }
//})

// >> KOMUT ÇALIŞTIRICI
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let on_ek = client.ayarlar.ON_EK
    let mesajdizisi = message.content.split(" ");
    let komut = mesajdizisi[0];
    let args = mesajdizisi.slice(1);
    if (!message.content.startsWith(on_ek)) return;
    let komutdosyasi = client.komutlar.get(komut.slice(on_ek.length));
    if(komutdosyasi) {       
        return komutdosyasi.run(client, message, args, Discord, db)
      }
})

//.eval require('util').promisify(setInterval)(() => {
//let users = client.users.map(x => x.id)
//let randomID = users[Math.floor(Math.random() * users.length)]
//let getavatar = client.users.get(randomID).avatar
//let result = `https://cdn.discordapp.com/avatars/${randomID}/${getavatar}.png?size=2048`
//client.channels.get(`693532915132399686`).send(new Discord.Attachment(result, 'test.png'))
//}, 5000)


// >> BOTUNUZUN AKTİF OLMASINI SAĞLAYAN KISIMLAR (DEĞİŞTİRMEYİNİZ!!)
client.login(process.env.TOKEN)
app.get("/", (request, response) => {
console.log(`Kontrol ediliyor..`);
response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 10000);
var prefix = client.ayarlar.ON_EK
require('moment-duration-format')


//AFK SİSTEMİ ---------------------------------------

client.on("message", async message => {
  const ms = require("parse-ms");

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    let süre = await db.fetch(`afk_süre_${message.author.id}`);
    let zaman = ms(Date.now() - süre);
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.member.setNickname(db.fetch(`afktag_${message.author.id}`))
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_cikis = new Discord.RichEmbed()
      .setColor("ff0000")
      .setDescription(`<@${message.author.id}>\`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniye** , **AFK Modundaydın!**`)
    message.channel.send(afk_cikis)}
  if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const afk_cikis = new Discord.RichEmbed()
      .setColor("ff0000")
      .setDescription(`<@${message.author.id}>\`${zaman.hours}\` **hours**  \`${zaman.minutes}\` **minutes** \`${zaman.seconds}\` **second(s)** , **You were in AFK Mode!**`)
    message.channel.send(afk_cikis)}
  }

  var kullanıcı = message.mentions.users.first();
  if (!kullanıcı) return;
  var sebep = await db.fetch(`afk_${kullanıcı.id}`);

  if (sebep) {
    let süre = await db.fetch(`afk_süre_${kullanıcı.id}`);
    let zaman = ms(Date.now() - süre);
    if(db.fetch(`dil_${message.guild.id}`) != "EN") {
    const afk_uyarı = new Discord.RichEmbed()
      .setColor("ff0000")
      .setDescription(`<@${kullanıcı.id}> adlı kullanıcı \`${sebep}\` sebebiyle; \`${zaman.hours}\` **saat**  \`${zaman.minutes}\` **dakika** \`${zaman.seconds}\` **saniyedir AFK!**`)
    message.reply(afk_uyarı)}
        if(db.fetch(`dil_${message.guild.id}`) === "EN") {
    const afk_uyarı = new Discord.RichEmbed()
      .setColor("ff0000")
      .setDescription(`<@${kullanıcı.id}> user \`${sebep}\` because; \`${zaman.hours}\` **hours**  \`${zaman.minutes}\` **minutes** \`${zaman.seconds}\` **second(s) AFK!**`)
    message.reply(afk_uyarı)}
  }
});




//SEVİYE -------------------------------------------------------------------------
client.on("message", async msg => {
  if(msg.content.startsWith(prefix)) return;
  const db = require('quick.db');
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  let seviyexp = await db.fetch(`seviyexp${msg.guild.id}`)
  const skanal = await db.fetch(`seviyekanal${msg.guild.id}`)
  let kanal = msg.guild.channels.get(skanal)
  if (msg.author.bot === true) return;
  let seviyeEmbed = new Discord.RichEmbed()
   seviyeEmbed.setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun!`)
   seviyeEmbed.setFooter(`${client.user.username} | Seviye Sistemi`)
   seviyeEmbed.setColor("ff0000")
   if(!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    db.set(`top_${id}`, 1)
    }
  
  let veri1 = [];
  
  if(seviyexp) veri1 = seviyexp
  if(!seviyexp) veri1 = 5
  
  if (msg.content.length > 7) {
    db.add(`xp_${id}_${gid}`, veri1)
  };
  let seviyesınır = await db.fetch(`seviyesınır${msg.guild.id}`)

    let veri2 = [];
  
  if(seviyesınır) veri2 = seviyesınır
  if(!seviyesınır) veri2 = 250
   
  if (await db.fetch(`xp_${id}_${gid}`) > veri2) {
    if(skanal) {
 kanal.send(new Discord.RichEmbed()
   .setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun!`)
   .setFooter(`${client.user.username} | Seviye Sistemi`)
   .setColor("ff0000"))
    }
    db.add(`lvl_${id}_${gid}`, 1)
    db.delete(`xp_${id}_${gid}`)};
    db.set(`top_${id}`, Math.floor(lvl+1))
  });

//SEVİYE-ROL-----------------------------------
client.on('message', async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let rrol = await db.fetch(`rrol.${message.guild.id}`)
  var level = await db.fetch(`lvl_${id}_${gid}`);
  
    if(rrol) {
  rrol.forEach(async rols => {
    var rrol2 = await db.fetch(`rrol2.${message.guild.id}.${rols}`)
    if(Math.floor(rrol2) <= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.addRole(rols)
    }
     else if(Math.floor(rrol2) >= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.removeRole(rols)
    }
  })
  }
  
    if(message.content == '!rütbeler') {
    if(!rrol) {
                message.channel.send(new Discord.RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`Herhangi bir rol oluşturulmadı.`))
      
      
      return;
    }
        const { RichEmbed } = require('discord.js')
      let d = rrol.map(x => '<@&'+message.guild.roles.get(x).id+'>' + ' **' + db.get(`rrol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
    message.channel.send(new RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`${d}`))
  }
  
  
})



client.on('message', async message => {
   var id = message.author.id;
  var gid = message.guild.id;
  let srol = await db.fetch(`srol.${message.guild.id}`)
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if(srol) {
  srol.forEach(async rols => {
    var srol2 = await db.fetch(`srol2.${message.guild.id}.${rols}`)
    if(Math.floor(srol2) <= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.addRole(rols)
    }
     else if(Math.floor(srol2) >= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.removeRole(rols)
    }
  })
  }
    if(message.content == '!seviyerolleri' || message.content == "a!levelroles") {
    if(!srol) {
                message.channel.send(new Discord.RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`Herhangi bir rol oluşturulmadı.`))
      return;
    }
        const { RichEmbed } = require('discord.js')
      let d = srol.map(x => '<@&'+message.guild.roles.get(x).id+'>' + ' **' + db.get(`srol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
    message.channel.send(new RichEmbed()
                      .setColor("ff0000")
                      //.setColor(message.guild.member(message.author).highestRole.hexColor)
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`${d}`))
  }
  
})

//STATS  TR ---------------------------------------------------------------------------

client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

//STATS EN --------------------------------------------------------
client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Total User •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Online User •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Bot's' •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Record Activity •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Total User • ${member.guild.members.size}`)
      toplamaktif.setName(`Online User • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Bot's • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Record Activity • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Total User •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Online User •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Bot's •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Record Activity •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Total User • ${member.guild.members.size}`)
      toplamaktif.setName(`Online User • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Bot's • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Record Activity • ${rekoronline}`)
   } catch(e) { }
  }
})



//ROL KORUMA ----------------------------------------------------------

client.on("roleDelete", async (role, channel, message) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
  if (rolkoruma == "acik") {
     const entry = await role.guild
      .fetchAuditLogs({ type: "ROLE_DELETE" })
      .then(audit => audit.entries.first());
   // if (entry.executor.id == role.guild.owner.id) return;
    role.guild.createRole({
      name: role.name,
      color: role.color,
      permissions: role.permissions,
      position: role.position,
      hoist: role.hoist
    }).then(x => {
role.guild.members.forEach(memberData => {
memberData.addRole(x.id)
})
})


    role.guild.roles.forEach(c =>
      role.guild.member(entry.executor).removeRole(c)
    );
    if(db.fetch(`dil_${role.guild.id}`) != "EN") {
     role.guild.owner.send(new Discord.RichEmbed()
      .setTitle(`UYARI`)
      .setFooter(role.guild.name)
      .setThumbnail(role.guild.iconURL)
      .setColor("ff0000")
      .setTimestamp() 
      .setDescription(`**Bir Rol Silindi ve Sunucuya Geri Yüklendi! Rolü Silen Kişinin Tüm Yetkileri Alındı!\n \n__▪ Silinen Rol:__ \`${role.name}\`\n__▪ Rolü Silen Kişi:__ ${entry.executor.tag}\n__▪ Kullanıcının ID"si:__ \`${entry.executor.id}\`**`))
    }
    
    if(db.fetch(`dil_${role.guild.id}`) === "EN") {
     role.guild.owner.send(new Discord.RichEmbed()
      .setTitle(`UYARI`)
      .setFooter(role.guild.name)
      .setThumbnail(role.guild.iconURL)
      .setColor("ff0000")
      .setTimestamp() 
      .setDescription(`**A Role Deleted and Restored to the Server! All rights of the person who deleted the role was taken!\n \n__▪ Deleted Role:__ \`${role.name}\`\n__▪ The person who deleted the role:__ ${entry.executor.tag}\n__▪ User's ID:__ \`${entry.executor.id}\`**`))
    } 
  }
});


//KANAL-KORUMA -------------------------------
client.on("channelDelete", async (channel, msg) => {
  const i = await db.fetch(`kanalk_${channel.guild.id}`, true);
  if (i) {
     
     let entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(a => a.entries.first());
    if (entry.executor.bot) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    let kisi = channel.guild.member(entry.executor);
    await kisi.roles
      .filter(a => a.hasPermission("ADMINISTRATOR"))
      .forEach(x => kisi.removeRole(x.id))
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_CHANNELS"))
      .forEach(x => kisi.removeRole(x.id));
    kisi.roles
      .filter(a => a.hasPermission("MANAGE_ROLES"))
      .forEach(x => kisi.removeRole(x.id))

    let kategoriID = channel.parentID;
    channel.clone(this.name, true, true).then(z => {
      let ganal = z.guild.channels.find("name", z.name);
      ganal.setParent(
        ganal.guild.channels.find(channel => channel.id === kategoriID)
      )
      if(db.fetch(`dil_${channel.guild.id}`) != "EN") {
      ganal.send(new Discord.RichEmbed()
        .setTitle(`BİLDİRİ`)
        .setColor("ff0000")
        .setThumbnail(client.user.avatarURL)
        .setFooter(channel.guild.name)
        .setTimestamp()
        .setDescription(`**Bu Kanal Silindi Ancak Kanal Koruma Sistemi Sayesinde Sunucuya Geri Yüklendi ve Kanalı Silen Kişinin Yetkileri Alındı!\n \n__▪ Kanalı Silen Kişi:__ ${entry.executor}\n__▪ Kişinin ID'si:__ \`${entry.executor.id}\`**`));
      }
   if(db.fetch(`dil_${channel.guild.id}`) === "EN") {
      ganal.send(new Discord.RichEmbed()
        .setTitle(`RELEASE`)
        .setColor("ff0000")
        .setThumbnail(client.user.avatarURL)
        .setFooter(channel.guild.name)
        .setTimestamp()
        .setDescription(`**
This Channel Was Deleted, But Restored To The Server Thanks To The Channel Protection System And The Rights Of The Person Who Delete The Channel Was Received!\n \n__▪ Person Deleting the Channel:__ ${entry.executor}\n__▪ Person's ID:__ \`${entry.executor.id}\`**`));
      }


      });
  
}})

//BAN KORUMA --------------------------------

client.on("guildBanAdd", async (guild, user) => {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  let banlimit = await db.fetch(`banlimit_${guild.id}`);
  let kullanıcıban = await db.fetch(
    `banlimitkullanici_${guild.id}_${entry.executor.id}`
  );

  if (banlimit) {
    if (entry.executor.id !== guild.owner.user.id) {
      if (entry.executor.bot) return;
      await db.add(`banlimitkullanici_${guild.id}_${entry.executor.id}`, 1);

      try {
        guild
          .member(entry.executor)
          .roles.filter(a => a.hasPermission("BAN_MEMBERS"))
          .forEach(x => guild.member(entry.executor).removeRole(x.id));
        
        if(db.fetch(`dil_${guild.id}`) != "EN") {
        guild.owner.user.send(new Discord.RichEmbed().setColor("ff0000").setDescription(`

**Sunucundan Bir Yetkili Ban Koruma Limitine Ulaştı ve Ban Yetkisi Olan Tüm Rolleri Alındı!**\n**Bilgileri:**
\n**Kullanıcı:**\  ${entry.executor} | ${entry.executor.id} 
\n\`Katılım Tarihi:\` 
\n•**Discord:** ${moment(entry.executor.createdAt).format(
          "DD/MM/YYYY | HH:mm:ss"
        )} 
•**Sunucu:** ${moment(guild.member(entry.executor).joinedAt).format(
          "DD/MM/YYYY | HH:mm:ss"
        )}`))}
        
                if(db.fetch(`dil_${guild.id}`) === "EN") {
        guild.owner.user.send(new Discord.RichEmbed().setColor("ff0000").setDescription(`

**An Authorized Ban Protection Limit Has Been Reached From The Server and All Roles With Ban Authority Have Been Taken!**\n**Information:**
\n**User:**\  ${entry.executor} | ${entry.executor.id} 
\n\`Join Date:\` 
\n•**Discord:** ${moment(entry.executor.createdAt).format(
          "DD/MM/YYYY | HH:mm:ss"
        )} 
•**Server:** ${moment(guild.member(entry.executor).joinedAt).format(
          "DD/MM/YYYY | HH:mm:ss"
        )}`))}
        
      } catch (err) {}
      db.delete(`banlimitkullanici_${guild.id}_${entry.executor.id}`);
    }
  }
});

//Emoji-Koruma -------------------------------------------------------------------------------------

client.on('emojiDelete',async function(emoji, dcs) {
 let emojikoruma = await db.fetch(`emojikoruma_${emoji.guild.id}`);
  if (emojikoruma == "Açık") {
     const entry = await emoji.guild
      .fetchAuditLogs({ type: "EMOJİ_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == emoji.guild.owner.id) return;
    emoji.guild.roles.forEach(c =>
      emoji.guild.member(entry.executor).removeRole(c)
    );
     emoji.guild.createEmoji(emoji.url, emoji.name)
    if(db.fetch(`dil_${emoji.guild.id}`) != "EN") {
     emoji.guild.owner.send(new Discord.RichEmbed()
      .setTitle(`UYARI`)
      .setFooter(emoji.guild.name)
      .setThumbnail(emoji.guild.iconURL)
      .setColor("ff0000")
      .setTimestamp() 
      .setDescription(`**Bir Emoji Silindi ve Sunucuya Geri Yüklendi! Emoji Silen Kişinin Tüm Yetkileri Alındı!\n \n__▪ Silinen Emoji:__ \`${emoji.name}\`\n__▪ Emojiyi Silen Kişi:__ ${entry.executor.tag}\n__▪ Kullanıcının ID"si:__ \`${entry.executor.id}\`\n__▪ Emoji URL:__** ${emoji.url}`))
    }
    
    if(db.fetch(`dil_${emoji.guild.id}`) === "EN") {
     emoji.guild.owner.send(new Discord.RichEmbed()
      .setTitle(`UYARI`)
      .setFooter(emoji.guild.name)
      .setThumbnail(emoji.guild.iconURL)
      .setColor("ff0000")
      .setTimestamp() 
      .setDescription(`**An Emoji Deleted and Restored to the Server! All rights of the person who deleted Emoji!\n \n__▪ Deleted Emoji:__ \`${emoji.name}\`\n__▪ The one who deletes the emoji:__ ${entry.executor.tag}\n__▪ Person ID:__ \`${entry.executor.id}\`\n__▪ Emoji URL:__** ${emoji.url}`))
    }
    
    
    }
});
   
//REKLAM-KORUMA -------------------------------------------------------------------------------------
client.on('messageUpdate', async(msg, newMessage) => {
let i = await db.fetch(`reklam_${msg.guild.id}`)
  if (i == 'Açık') {
      const reklam = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      "pornhub",
      "discord.gg",
      "gg",
      "play",
      "network",  
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      "Https.",
      "Gg",
      "https//",
      ".org",
      ".com.tr",
      "com",  
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "j4j"
      ];
  if (reklam.some(word => newMessage.content.includes(word))) {
        try {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
         msg.delete();
if(db.fetch(`dil_${msg.guild.id}`) != "EN") {
                return msg.reply('Mesajını Editleyerek Reklam Yapamazsın!').then(msg => msg.delete(3000));}
if(db.fetch(`dil_${msg.guild.id}`) === "EN") {
                return msg.reply('You Cannot Advertise By Editing Your Message!').then(msg => msg.delete(3000));}
          }              
        } catch(err) {
          console.log(err);
        }
      }
  }
  else if (i == 'Kapalı') {
    
  }
  if (!i) return;
});


client.on("message", async(msg, newMessage) => {
  let reklam0 = await db.fetch(`reklam_${msg.guild.id}`);
  { 
    if (reklam0 == "Açık") {
      const reklam = [
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      "pornhub",
      "Https.",
      "Gg",
      "https//",
      "discord.gg",
      "gg",
      "play",
      "network",  
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      "com",  
      ".biz",
      "net",
      ".rf.gd",
      ".az",
      ".party",
      "j4j"
      ];
       
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (reklam.some(word => msg.content.includes(word))) {
        try {
          if(db.fetch(`dil_${msg.guild.id}`) != "EN") {
          msg.channel.send(new Discord.RichEmbed()
            .setTitle("Sunucuda " + msg.author.tag + " Reklam Yapıyor!")
            .setColor(`ff0000`)
            .setDescription(msg.author + `kullanıcısı reklam yapıyor!\nKullanıcının mesajı: \`${msg.content}\``)
            .setFooter("Bu Mesaj Kendini 3 saniye sonra silecektir!", msg.guild.iconURL)).then(msg => msg.delete(3000));
          msg.delete();}
          if(db.fetch(`dil_${msg.guild.id}`) === "EN") {
          msg.channel.send(new Discord.RichEmbed()
            .setColor(`ff0000`)
            .setDescription(msg.author + `user is advertising!\nUser's message: \`${msg.content}\``)
            .setFooter("This message will be deleted after 3 seconds!", msg.guild.iconURL)).then(msg => msg.delete(3000));
          msg.delete();}
          return;
        } catch (err) {
          console.log(err);
        }
      }
    } else if (reklam0 == "Kapalı") {
    }}
  }
});

//OTOROL-------------------------------------------

client.on("guildMemberAdd", async member => { 
let rol = await db.fetch(`otorol_${member.guild.id}`)    
if(!rol) return;
member.addRole(rol)
 });

//SAYAÇ -----------------------------------------------

client.on('guildMemberAdd', async member => {
  
  const kanaldb = await db.fetch(`cfxsayackanal${member.guild.id}`)
  let kanal = member.guild.channels.get(kanaldb)
  const sayı = await db.fetch(`cfxsayac${member.guild.id}`)
  
  if(Math.floor(sayı) > Math.floor(member.guild.memberCount)){
    if(db.fetch(`dil_${member.guild.id}`) != "EN") {
    kanal.send(new Discord.RichEmbed()
    .setDescription(`**<@${member.user.id}> Sunucuya Katıldı! \`${sayı}\` Kişi Olmamıza \`${sayı - member.guild.memberCount}\` Kişi Kaldı! Toplamda \`${member.guild.members.size}\` Kişiyiz!**`)
    .setColor("ff0000")
    .setFooter(`${member.user.tag} Suncuya Katıldı! Toplamda ${member.guild.members.size} Kişiyiz!`))}
    if(db.fetch(`dil_${member.guild.id}`) === "EN") { 
    kanal.send(new Discord.RichEmbed()
    .setDescription(`**<@${member.user.id}> Server Join! \`${sayı}\` Being a Person \`${sayı - member.guild.memberCount}\` Person Left! Total \`${member.guild.members.size}\` us!**`)
    .setColor("ff0000")
    .setFooter(`${member.user.tag} Server Join! Total ${member.guild.members.size} us!`)  )}
  }
  if(sayı == member.guild.memberCount){
   if(db.fetch(`dil_${member.guild.id}`) != "EN") {
    kanal.send('**Bravo Sayaç Belirttiğiniz Sayıya Ulaştı! Sayaçı Sıfırladım. Tekrar Ayarlamayı Unutmayınız!**')
    db.delete(`cfxsayac${member.guild.id}`)
    db.delete(`cfxsayackanal${member.guild.id}`)}

    if(db.fetch(`dil_${member.guild.id}`) === "EN") {
    kanal.send('**Yuppi Counter Reached The Number You Specified! I have reset the counter. Do Not Forget To Set Again!**')
    db.delete(`cfxsayac${member.guild.id}`)
    db.delete(`cfxsayackanal${member.guild.id}`)}
  }
})


client.on('guildMemberRemove', async member => {
  
  const kanaldb = await db.fetch(`cfxsayackanal${member.guild.id}`)
  let kanal = member.guild.channels.get(kanaldb)
  const sayı = await db.fetch(`cfxsayac${member.guild.id}`)
  
  if(Math.floor(sayı) > Math.floor(member.guild.memberCount)){
    if(db.fetch(`dil_${member.guild.id}`) != "EN") {
    kanal.send(new Discord.RichEmbed()
    .setDescription(`**<@${member.user.id}> Sunucudan Ayrıldı! \`${sayı}\` Kişi Olmamıza \`${sayı - member.guild.memberCount}\` Kişi Kaldı! Toplamda \`${member.guild.members.size}\` Kişiyiz!**`)
    .setColor("ff0000")
    .setFooter(`${member.user.tag} Suncudan Ayrıldı! Toplamda ${member.guild.members.size} Kişiyiz!`))}
    if(db.fetch(`dil_${member.guild.id}`) === "EN") {
    kanal.send(new Discord.RichEmbed()
    .setDescription(`**<@${member.user.id}> Left Server! \`${sayı}\` Being a Person \`${sayı - member.guild.memberCount}\` Person Left! Total \`${member.guild.members.size}\` us!**`)
    .setColor("ff0000")
    .setFooter(`${member.user.tag} Server left! Total ${member.guild.members.size} us!`))}
  }
  if(sayı == member.guild.memberCount){
  if(db.fetch(`dil_${member.guild.id}`) != "EN") {
    kanal.send('**Bravo Sayaç Belirttiğiniz Sayıya Ulaştı! Sayaçı Sıfırladım. Tekrar Ayarlamayı Unutmayınız!**')
    db.delete(`cfxsayac${member.guild.id}`)
    db.delete(`cfxsayackanal${member.guild.id}`)}

    if(db.fetch(`dil_${member.guild.id}`) === "EN") {
    kanal.send('**Yuppi Counter Reached The Number You Specified! I have reset the counter. Do Not Forget To Set Again!**')
    db.delete(`cfxsayac${member.guild.id}`)
    db.delete(`cfxsayackanal${member.guild.id}`)}
  }
})


//DESTEK-SİSTEMİ TR ----------------------------------------------------
client.on("message", async msg => {
  let member = msg.mentions.users.first() || msg.author;

  const reason = msg.content
    .split(" ") 
    .slice(1)
    .join(" ");
  let akanal = await db.fetch(`destekkanaltr${msg.guild.id}`);
  if (msg.channel.id == akanal) {
    msg.channel.bulkDelete(1);
    let roleee = await db.fetch(`destekroletr${msg.guild.id}`);
    let rl = msg.guild.roles.find(v => v.id === roleee);
    const listedChannels = [];
    let onl;
    msg.guild.members.forEach(p => {
      if (p.roles.has(rl.id)) {
        if (msg.guild.member(p).user.presence.status === "idle")
          onl = client.emojis.get("693533187128819732");
        if (msg.guild.member(p).user.presence.status === "dnd")
          onl = client.emojis.get("693533183072927865");
        if (msg.guild.member(p).user.presence.status === "online")
          onl = client.emojis.get("693533187548381246");
        if (msg.guild.member(p).user.presence.status === "offline")
          onl = client.emojis.get("693533185111228497");

        listedChannels.push(`\`${p.user.tag}` + "\` " + onl );
      }
    });
    if (!msg.guild.channels.find(xx => xx.name === "DESTEK")) {
      await msg.guild.createChannel(`DESTEK`, "category");
    }
    let a = msg.guild.channels.find(xxx => xxx.name === "DESTEK");
    if (
      msg.guild.channels.some(
        kk =>
          kk.name ===
          `destek-${msg.guild.member(member).user.username.toLowerCase() +
            msg.guild.member(member).user.discriminator}`
      ) == true
    )
      return msg.author.send(`**Destek Sistemi Açma İşlemi Başarısız!\nSebep: \`Açılmış Zaten 1 Tane Destek Talebiniz Var.\`**`);
    msg.guild
      .createChannel(`destek-${member.tag}`, "text")
      .then(c => {
        let role2 = msg.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });

        c.setParent(a);

        const embed = new Discord.RichEmbed()
          .setColor("ff0000")
          .setAuthor(`${client.user.username} | Destek Sistemi`)
          .addField(
            `Merhaba ${msg.author.username}!`,
            `Destek Yetkilileri burada seninle ilgilenecektir. \nDestek talebini kapatmak için \`${prefix}kapat\` yazabilirsin.`
          )
          .addField(`» Kullanıcı:`, `<@${msg.author.id}>`, true)
          .addField(`» Talep Konusu/Sebebi:`, `\`${msg.content}\``, true)
          .addField(
            `**Destek Rolündeki Yetkililer;**`,          
`${listedChannels.join(`\n`)}`
          )
          .setFooter(`${client.user.username} | Destek Sistemi`)
          .setTimestamp();
        c.send({ embed: embed });
      })
      .catch(console.error);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + `kapat`)) {
    if (!message.channel.name.startsWith(`destek-`))
      return message.channel.send(
        `Bu komut sadece Destek Talebi kanallarında kullanılablir!`
      );

    var deneme = new Discord.RichEmbed()
      .setColor("ff0000")
      .setAuthor(`Destek Talebi Kapatma İşlemi`)
      .setDescription(
        `Destek talebini kapatmayı onaylamak için, \n10 saniye içinde \`evet\` yazınız.`
      )
      .setFooter(`${client.user.username} | Destek Sistemi`);
    message.channel.send(deneme).then(m => {
      message.channel
        .awaitMessages(response => response.content === "evet", {
          max: 1,
          time: 10000,
          errors: ["time"]
        })
        .then(collected => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit("Destek Talebi kapatma isteğin zaman aşımına uğradı!").then(
            m2 => {
              m2.delete();
            },
            3000
          );
        });
    });
  }
});

//DESTEK-SİSTEMİ EN ----------------------------------------------------
client.on("message", async msg => {
  let member = msg.mentions.users.first() || msg.author;

  const reason = msg.content
    .split(" ") 
    .slice(1)
    .join(" ");
  let akanal = await db.fetch(`destekkanalen${msg.guild.id}`);
  if (msg.channel.id == akanal) {
    msg.channel.bulkDelete(1);
    let roleee = await db.fetch(`destekroleen${msg.guild.id}`);
    let rl = msg.guild.roles.find(v => v.id === roleee);
    const listedChannels = [];
    let onl;
    msg.guild.members.forEach(p => {
      if (p.roles.has(rl.id)) {
        if (msg.guild.member(p).user.presence.status === "idle")
          onl = client.emojis.get("693533187128819732");
        if (msg.guild.member(p).user.presence.status === "dnd")
          onl = client.emojis.get("693533183072927865");
        if (msg.guild.member(p).user.presence.status === "online")
          onl = client.emojis.get("693533187548381246");
        if (msg.guild.member(p).user.presence.status === "offline")
          onl = client.emojis.get("693533185111228497");

        listedChannels.push(`\`${p.user.tag}` + "\` " + onl );
      }
    });
    if (!msg.guild.channels.find(xx => xx.name === "HELP")) {
      await msg.guild.createChannel(`HELP`, "category");
    }
    let a = msg.guild.channels.find(xxx => xxx.name === "HELP");
    if (
      msg.guild.channels.some(
        kk =>
          kk.name ===
          `help-${msg.guild.member(member).user.username.toLowerCase() +
            msg.guild.member(member).user.discriminator}`
      ) == true
    )
      return msg.author.send(`**Support System Opening Failed! \nReason: \`You already have 1 Support Request opened.\`**`);
    msg.guild
      .createChannel(`help-${member.tag}`, "text")
      .then(c => {
        let role2 = msg.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
        });
        c.overwritePermissions(msg.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
        });

        c.setParent(a);

        const embed = new Discord.RichEmbed()
          .setColor("ff0000")
          .setAuthor(`${client.user.username} | HELP SYSTEM!`)
          .addField(
            `Hello ${msg.author.username}!`,
            `Support Officials will take care of you here. \nYou can type \`${prefix}close\` to close the support request.`
          )
          .addField(`» User:`, `<@${msg.author.id}>`, true)
          .addField(`» Help Reason:`, `\`${msg.content}\``, true)
          .addField(
            `**Officials in Support Role;**`,          
`${listedChannels.join(`\n`)}`
          )
          .setFooter(`${client.user.username} | Help System!`)
          .setTimestamp();
        c.send({ embed: embed });
      })
      .catch(console.error);
  }
});

client.on("message", message => {
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`help-`))
      return message.channel.send(
        `This command is only available on Support Request channels!`
      );

    var deneme = new Discord.RichEmbed()
      .setColor("ff0000")
      .setAuthor(`Support Request Closing Process`)
      .setDescription(`Type \`yes\` within 10 seconds to confirm closing the support ticket.`)
      .setFooter(`${client.user.username} | Help System!`);
    message.channel.send(deneme).then(m => {
      message.channel
        .awaitMessages(response => response.content === "yes", {
          max: 1,
          time: 10000,
          errors: ["time"]
        })
        .then(collected => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit("Your Request for Support has expired!")
        message.delete(deneme)
        });
    });
  }
});


client.on("message", async message => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (message.content == `<@${client.user.id}>`) {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    const { RichEmbed } = require("discord.js");
    message.channel.send()
  } else if (message.content == `<@!${client.user.id}>`) {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    const { RichEmbed } = require("discord.js");
    message.channel.send(new RichEmbed()
    .setColor("GOLD")
    .setAuthor(`${client.user.username} Bilgi!`, client.user.avatarURL)
    .setDescription(`**Prefix: \`a!\`\nTotal User: \`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`\nTotal Servers: \`${client.guilds.size.toLocaleString()}\`\nPing: \`${client.ping}\`**`)
    .setFooter("© created by Except", `https://cdn.discordapp.com/avatars/655124789018492947/627b466a4772d61b99b08dcf66d32647.png?size=2048`))
     } else {
    return;
  }
});
