const Discord = require("discord.js")
exports.run = async (client, message, args, lang) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(lang.lang.perms)

    if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.prefixerror));
    await client.db.set(`prefix_${message.guild.id}`, args[0]);
    message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.setprefix + `\`${args[0]}\``));
};
