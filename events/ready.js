const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
console.log('>>Oynuyor kısmı başarıyla güncellendi.');
console.log('Bot hazır ve giriş yaptı Üstadım.');

    var Games = [

        "🔥vvyardım🔥 Tüm Komutlar Aktif",
    
        "🔥vveğlence & vveğlence2 Aktif!🔥",
        
        "🔥vvatatürk Aktif🔥",
        
        "🔥vvcoolresim Aktif🔥",
        
        "🔥vvstresçarkı Aktif🔥",
        
        "🔥vvaşkölçer Aktif🔥",
      
        "🔥vvanakomutlar Aktif🔥",
		
		"🔥vvsayaç Aktif🔥",
		
		"🔥2 Ay Günlük Komut Güncellemesi🔥",
		
		"🔥vvotorol Aktif🔥",
		
		"🔥vvslowmode Aktif🔥",
		
		"🔥Varius BOT🔥",
		
		"🔥vvdavet🔥",
		
		"🔥Bot 7/24'tür 2 Ay Günlük Güncellemeden Bot Offline Olabilir🔥",
		
		"🔥vvhata , vvistek , vvşikayet Yazarak Bottan isteğiniz varsa belirtebilirsiniz🔥",

		"🔥Bütün Komutlar Aktif🔥",
        
        `${client.users.size} Kullanıcıya Hizmet Ediyoruz`,
        
        `${client.guilds.size} Sunucuya Hizmet Ediyoruz`,
        
        `Rıca Etsem Beni Eklermisin vvdavet`,



        `🔥Yapımcım ?SaFIRTINA?#0892🔥`


    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(Games.length-0+1)+0);

      client.user.setGame(Games[random], "https://twitch.tv/salegendforty");
        }, 2 * 1500);

}; 