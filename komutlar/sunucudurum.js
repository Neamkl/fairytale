const Discord = require('discord.js');
exports.run = (client, message, args, ops) => {
  var embed = new Discord.RichEmbed()
  .setColor('ORANGE')
    .setDescription(`**Sunucu Kullanıcı Durumları
:green_heart: Çevrimiçi:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart: Rahatsız Etmeyin:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: Boşta:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: Çevrimdışı:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   Toplam:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});
}
module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['durumlar','durum'],
    permLevel: 0
};

module.exports.help = {
    name: 'sunucudurum',
    description: 'Kullanıcı Durumlarını gösterir.',
    usage: 'sunucudurum'
};