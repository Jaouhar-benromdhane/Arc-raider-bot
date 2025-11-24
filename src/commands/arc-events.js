const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-events')
    .setDescription('Actualités et événements récents d\'Arc Raiders'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#4ECDC4')
      .setTitle('📅 Actualités Arc Raiders')
      .setDescription('Dernières news et événements en cours')
      .addFields(
        {
          name: '🎬 The Evolution of ARC Raiders',
          value: 'Interviews avec les développeurs\n📅 20 novembre 2025',
          inline: false
        },
        {
          name: '🔧 Patch Notes Update 1.3.0',
          value: 'Dernière mise à jour du jeu\n📅 20 novembre 2025',
          inline: false
        },
        {
          name: '🎯 Community Event Phase Two',
          value: 'Help us Stake Our Claim!\n📅 19 novembre 2025',
          inline: false
        },
        {
          name: '📦 North Line Update 1.2.0',
          value: 'Patch notes novembre\n📅 13 novembre 2025',
          inline: false
        }
      )
      .addFields({
        name: '🔗 Plus d\'infos',
        value: '[Voir toutes les actualités](https://arcraiders.com/fr/news)',
      })
      .setFooter({ text: 'Infos mises à jour depuis arcraiders.com' })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  },
};
