const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**FairyTale sunucunuza eklendi!**',
  '**FairyTale BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot ?SaFIRTINA?#0892 tarafından geliştirilmektedir',
  'Botumuzun özelliklerini öğrenmek için !yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için fairy-log kanalı açın ve deneme için',
  'Botumuz Daha Geliştirilmektedir 7/24`tür ama offline olabilir güncellemelerden',
  'Botumuzu Paylaşmayı Ve Botumuza Destek Vermeyi Unutmayın',
  'Çok güzel komutlar sizi bekliyor, 2 ay günlük güncelleme sizi bekliyor ;)',
  'Sunucumuza Gelerek Diğer Projelerimize Bakabilirsiniz ;)',
  'Yapımcıyla konuşamazsanız Discord Sunucumuza Gelmeyi Unutma ;)',
  
  `**FairyTale BOT Resmî Discord Sunucusu** https://discord.gg/jAh6dmP`,
  `**Botu Davet Etmek için:** https://discordapp.com/api/oauth2/authorize?client_id=550622708875001866&permissions=8&scope=bot`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
})