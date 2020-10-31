const Discord = require("discord.js")
exports.run = async (client, message, args, lang) => {
   let cmd = args[0];
  if (!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.msg))
      if (cmd.toLowerCase() === "mention") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.perms))
        }

        message.channel.send(lang.set.args)
    }
      if (cmd.toLowerCase() === "mention off") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.perms))
        }
        
        let mention = client.db.fetch(`mention_${message.guild.id}`);
        if (!mention) return message.channel.send(lang.set.erroff);
        client.db.set(`mention_${message.guild.id}`, false);
        message.channel.send(lang.set.moff)
    }

   if (cmd.toLowerCase() === "mention on") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.perms))
        }

        let mention = client.db.fetch(`mention_${message.guild.id}`);
        if (mention) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.erron));
        client.db.set(`mention_${message.guild.id}`, true);
        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.mon))
    }

    if (cmd.toLowerCase() ==="logs") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.perms))
        }
        
        var channel = message.mentions.channels.first();
        if (!channel) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.channel));
        client.db.set(`logs_${message.guild.id}`, channel.id);

        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.chon + "** **" + "`" + channel.name + "`" + "."))
    }

        if (cmd.toLowerCase() === "role") {
        if (!message.member.hasPermission("MANAGE_GUILD")) {
            return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.perms))
        }
        var role = message.mentions.roles.first();
        if (!role) return message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.role));
        client.db.set(`role_${message.guild.id}`, role.name);
        message.channel.send(new Discord.MessageEmbed().setColor("#00BFFF").setDescription(lang.set.ron + "** **" + "`" + role.name + "`" + "."))

    }
}
