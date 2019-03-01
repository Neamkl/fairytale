const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor("#36393F")
    .setDescription(`** ${mesaj} ` + ' HazretiYasuodan Kafa Show!**')
    .setImage(`https://cdn.discordapp.com/attachments/549951782734921750/550709107376783377/2uvc0r.gif`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şov'],
  permLevel: 0,
  kategori:"bot"
};

exports.help = {
  komut: 'kafashow',
  description: 'HazretiYasuodan Kafa Show .',
  usage: 'kafashow'
};