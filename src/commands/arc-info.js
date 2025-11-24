const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-info')
    .setDescription('Affiche des informations sur Arc Raiders'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#FF6B35')
      .setTitle('🎮 Arc Raiders')
      .setDescription('Un jeu d\'aventures et d\'extraction multijoueur se déroulant dans un monde futuriste ravagé par une mystérieuse menace mécanisée nommée l\'ARC.')
      .addFields(
        { name: '🎯 Genre', value: 'Extraction shooter / Action-aventure', inline: true },
        { name: '🌐 Plateformes', value: 'PC (Steam, Epic)\nPS5, Xbox Series X|S', inline: true },
        { name: '👥 Mode', value: 'Multijoueur crossplay', inline: true },
        { name: '📅 Sortie', value: 'Disponible maintenant', inline: true },
        { name: '🏢 Développeur', value: 'Embark Studios', inline: true },
        { name: '⚙️ Moteur', value: 'Unreal Engine 5', inline: true }
      )
      .addFields({
        name: '📰 Infos récentes',
        value: '• Update 1.3.0 (20 nov 2025)\n• Community Event Phase Two\n• North Line Update 1.2.0',
      })
      .setFooter({ text: 'Site officiel: arcraiders.com' })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  },
};
