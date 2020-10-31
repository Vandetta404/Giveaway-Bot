const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args, lang) => {
    let version = require("../../package.json").version;
    let discord_giveaways = require("../../package.json").dependencies["discord-giveaways"];
    let supportURL = client.config.support;
    let donate = "https://paypal.me/AshourYoussef";
    let invite = `https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`;
    message.channel.send(new MessageEmbed()
        .setTitle(lang.help.title)
        .setAuthor(`PowerGift's | Version ${version}`)
        .addField(lang.help.giveawaycmd,'`create`, `start`, `end`, `edit`, `reroll`, `delete`')
        .addField(lang.help.featuredcmd,'`setlang`, `set logs`, `set mention on`, `set mention off`, `setprefix`, `set role`')
        .addField(lang.help.infocmd,'`stats`, `ping`, `invite`, `help`')
        .addField(lang.help.ownerbot, '`eval`, `blacklist`')
        .addField(lang.help.link, `[Support server](${supportURL}) | [Invite](${invite}) | [Donate](${donate})`)
        .setColor(client.config.embeds.color)
        .setFooter(client.config.embeds.footers));
}
