module.exports = member => {
  const channel = member.guild.channels.find('name', 'giriþ-çýkýþ');
  if (!channel) return;
  channel.send(`**:tada:** ${member} **Sunucuya Giriþ Yaptý!**`);
};