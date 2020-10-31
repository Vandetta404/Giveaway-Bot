//engilsh
let config = require(`../config.js`);
let prefix = config.prefix;

module.exports = {
  start: {
    perms: ` You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    duration: ` Type a valid \`time\` please!\n> Ex: \`1d (1 day)\`, \`1h (1 hour)\`, \`1m (1 minute)\`, \`1s (1 seconds)\`!`,
    argswinners: ` Type the \`number of winners!\`\n> Ex: \`${prefix}start 1h 4(4: number of winers) Nitro\``,
    prize: ` Add the \`prize\` please!\n> Ex: ${prefix}start 1h 1 \`Nitro(Nitro: the prize)\``
  },

  create: {
    perms: `You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    channel: ` You should mention on \`valid channel!\`\n> Ex: ${prefix}create \`#giveawaychannel (giveawaychanne: this channel)\` 1h 1 Nitro!`,
    otherServer: ` You cannot create a \`giveaway\` on another server!.`,
    duration: ` Type a valid \`time\` please!\n> Ex: \`1d (1 day)\`, \`1h (1 hour)\`, \`1m (1 minute)\`, \`1s (1 seconds)\`!`,
    argswinners: ` Type the \`number of winners!\`\n> Ex: \`${prefix}create #giveawaychannel 1h 4(4: number of winers) Nitro\``,
    prize: `Add the \`prize\` please!\n> Ex: ${prefix}create #giveawaychannel 1h 1 \`Nitro(Nitro: the prize)\``,
    good: ` I launched the \` giveaway \` in the living room:`,

    giveaway: ` **GIVEAWAY STARTED** `,
    giveawayEnded: ` **GIVEAWAY ENDED** `,

    timeRemaining: ` Remaining time: **{duration}**!`,
    inviteToParticipate: (message) => `React with :tada: to enter!`,
    winMessage: (message) => `🎉 | Congratulations, {winners}! You Won: **{prize}**!`,
    embedFooter: `**GIVEAWAY**`,
    noWinner: `❌ Giveaway cancelled, not enough participants `,
    hostedBy: `Hosted by: {user}`,
    winners: `Winner(s) 🎉`,
    endedAt: `Ended at`,
  },

  units: {
    seconds: `second(s)`,
    minutes: `minute(s)`,
    hours: `hour(s)`,
    days: `day(s)`,
  },

  end: {
    perms: `You do not have permission \`MANAGE_MESSAGES\`, you can create a rank for implementation:`,
    msg: `You have to specify a valid message ID!`,
    err: `Unable to recognize this id giveaway:`,
    errmod: `This giveaway already ended or deleted!`,
    good: `The giveaway will be finished in less than:`
  },

  reroll: {
    perms: `You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    msg: `You have to specify a valid message ID!`,
    err: `Unable to recognize this id giveaway:`,
    good: `:tada: New winner(s): {winners}! Congratulations!`,
    parts: `There weren't enough participants for this giveaway i can't choose!`
  },

  edit: {
    perms: `You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    msg: `You have to specify a valid message ID!`,
    time: ` please provide a valid time \n> Ex: \`1m, 1h, 1d\``,
    errtime: `Giveaway duration should be less than 10d.`,
    argswinners: ` type the \`number of winners!\`\n> Ex: \`${prefix}create #giveawaychannel 1h 2(2: number of winers) Nitro\``,
    errwinners: `Giveaway winners should be less than 15 winner.`,
    prize: `add the \`prize\` please!\n> Ex: ${prefix}create #giveawaychannel 1h 2 \`Nitro (Nitro: the prize)\``,
    err: `Unable to recognize this id giveaway:`,
    good: `Done the modifications will be changed immediately!`,
    errmod: `An error occurred, maybe this giveaway is already finished or deleted?!`
  },

  delete: {
    done: `Done the giveaway is deleted`,
    otherServer: `You cannot control someone else's \`giveaway\` on this server!`,
    otherUser: `You cannot control this \`giveaway\`, since you are not its owner!`
  },

  lang: {
    perms: `You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    msg: `please enter a vaild language (\`ar\`, \`en\`, \`ru\`, \`ua\`)`,
    err: `The chosen language is already the one active on this server. Try another one to see?!`
  },

  set: {
    perms: `You do not have permission \`MANAGE_GUILD\`, you can create a rank for implementation:`,
    msg: `Please indicate a function to be defined \`mention\` to mention the entire server if a giveaway is running, \`logs\` to define a room with the giveaway logs, and \`role\` choose a role so that users who have it can launch giveaways without having permission to manage messages.`,
    args: `Please indicate a function \`on\` to activate or \`off\` to disable.`,
    erroff: `This function is already disabled. Try turning it on to see?`,
    erron: `This function is already activated. Try turning it off to see? `,
    mon: `I have activated the function \`everyone\` for the next giveaways.`,
    moff: ` I've disabled the function \`everyone\` for the next giveaways.`,
    channel: `Please point me to a giveaway logs room, \n> Ex: ${prefix}set logs \`#logs\` to define the logs.`,
    chon: `I set up the giveaways logs on the channel:`,
    role: `Please select a valid role!\n> Ex: ${prefix}set role \`@giveaways\` to specify a role.`,
    ron: `I defined the alternative role with:`,
  },

  logs: {
    raddtitle: "New member",
    raddmsg1: "The member",
    raddmsg2: "just joined the giveaway",
    rremtitle: "Former participant",
    rremmsg1: "The member",
    rremmsg2: "just canceled his entry in the giveaway",
  },

  invite: {
    main: `Main links`,
    disc: `Type \`${prefix}invite copy\` to be able to copy the link!`,
    web: `PowerGift's Website`,
    inv: `Invite PowerGift's Bot`,
    vote: `Vote For PowerGift's Bot`,
    sup: `Join The Support Server`
  },

  help: {
    title: `Help Documents Overview:`,
    disc: '● Here you can find all `PowerGift Commands`',
    giveawaycmd: ` Giveaway commands - (6)`,
    featuredcmd: `Featured commands - (6)`,
    infocmd: `Info commands - (4)`,
    ownerbot: `Owner bot commands - (2)`,
    link: `Links:`
  },

  stats: {
    title: `PowerGift's Information:`,
    info: 'It is an open source bot that allows you to create giveaway with ease and gives you many distinct features. The bot is Programmed in `javascript language` and By: ! Mr » Ashour <3#0018',
    stats: `• __Statistics:__`,
    stat: `\`Servers:\``,
    set: `\`Users:\``,
    ch: `\`Channels:\``,
    ver: ` • __Versions:__`,
    ram: `• __RAM__`,
    on: ` • __Online__`,
    for: `**online for** `,
    moreinfo: ` • __MoreInfos:__`,
    comd: `\`Total Commands:\``,
    giv: `\`All Giveaways:\``,
  },

  prefixerror: ` Type a valid prefix!.`,
  setprefix: `The prefix on this server has been changed to `,

  info: {
    ping: ` My Ping is `,
  },
  blacklist: {
    blacklist: ` You cannot use commands because you are in the \`Blacklist!!\``
  }}