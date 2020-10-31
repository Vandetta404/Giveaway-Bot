const Discord = require("discord.js")
exports.run = async (client, message, args, lang) => {
let language = client.db.fetch(`language_${message.guild.id}`);
    if (!args[0]) return message.channel.send(lang.lang.msg);

    // Arabic lang
    if (args[0] === "ar") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.perms))
        }

        if (language === "ar") return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.err))
        client.db.set(`language_${message.guild.id}`, "ar");
        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(":flag_sa: | لغة هذا السيرفر هي العربية الآن!"))
    }

    // English lang
    if (args[0] === "en") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.perms))        }

        if (language === "en") return message.channel.send(lang.lang.err)
        client.db.set(`language_${message.guild.id}`, "en")
        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(":flag_us: | The language of this server is now English!"))
    }

    // Russian lang
    if (args[0] === "ru") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.perms))
        }

        if (language === "ru") return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.err))
        client.db.set(`language_${message.guild.id}`, "ru")
       message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(":flag_ru: | Язык изменён на Русский!"))
    }

    // Ukranian lang
    if (args[0] === "ua") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.perms))
        }

        if (language === "ua") return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.lang.err))
        client.db.set(`language_${message.guild.id}`, "ua")
        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(":flag_ua: | Мову змінено на Українську!"))
    }
}
