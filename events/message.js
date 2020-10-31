let cd = new Set(), cdseconds = 5;

module.exports = (client, message) => {
 if(message.author.bot || !message.guild)return;
  let language = client.db.fetch(`language_${message.guild.id}`);
  if (!language) language = client.config.basiclang;
  const lang = require(`../language/${language}`);

  let prefix;
  let prefixes = client.db.fetch(`prefix_${message.guild.id}`);
  (!prefixes) ? (prefix = client.config.prefix) : (prefix = prefixes);
    if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g), commandName = args.shift().toLowerCase();
  const command = client.commands.get(commandName);

  if (!command) return;

  let blacklist = client.db.fetch(`blacklist_${message.author.id}`)
  if (blacklist === "Blacklisted") return message.reply(lang.blacklist.blacklist)
  
 command.run(client, message, args, lang);
};
