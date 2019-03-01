module.exports = member => {
  const channel = member.guild.channels.find('name', 'giriş-çıkış');
  if (!channel) return;
  channel.send(`**:rage:** ${member} **Sunucudan Ayrıldı ;(**`);
};