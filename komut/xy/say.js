module.exports = {
    cfx: {
        baslat: "say" // komutunuzun on_ek ile çalıştılacak komut adı.
    },
    run: async(client, message, args, Discord, db,) => {
    const mapping = {
        " ": "   ",
        "0": ":zero:",
        "1": ":one:",
        "2": ":two:",
        "3": ":three:",
        "4": ":four:",
        "5": ":five:",
        "6": ":six:",
        "7": ":seven:",
        "8": ":eight:",
        "9": ":nine:",
        "!": ":grey_exclamation:",
        "?": ":grey_question:",
        "#": ":hash:",
        "*": ":asterisk:"
      };
      
        "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => { mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;});
        let onlinesayi = message.guild.members.filter(x => x.user.presence.status === 'online').size
        let offlinesayi = message.guild.members.filter(x => x.user.presence.status === 'offline').size
        let idlesayi = message.guild.members.filter(x => x.user.presence.status === 'idle').size
        let dndsayi = message.guild.members.filter(x => x.user.presence.status === 'dnd').size
        let stoplam = message.guild.memberCount
        let onlinesayi1 = `${onlinesayi}`.split("").map(c => mapping[c] || c).join(" ")
        let offlinesayi1 = `${offlinesayi}`.split("").map(c => mapping[c] || c).join(" ")
        let idlesayi1 = `${idlesayi}`.split("").map(c => mapping[c] || c).join(" ")
        let dndsayi1 = `${dndsayi}`.split("").map(c => mapping[c] || c).join(" ")
        let stoplam1 = `${stoplam}`.split("").map(c => mapping[c] || c).join(" ")
        message.channel.send(new Discord.RichEmbed().setColor("ff0000").setDescription(`\`-----------------------\`
Çevrimiçi sayısı: ${onlinesayi1}
\`-----------------------\`
Çevrimdışı Sayısı: ${offlinesayi1}
\`-----------------------\`
Boşta Sayısı: ${idlesayi1}
\`-----------------------\`
Sunucudaki Toplam Üye: ${stoplam1}
\`-----------------------\``))
}}
