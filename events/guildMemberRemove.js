module.exports = member => {
  const channel = member.guild.channels.find('name', 'giri�-��k��');
  if (!channel) return;
  channel.send(`**:rage:** ${member} **Sunucudan Ayr�ld� ;(**`);
};