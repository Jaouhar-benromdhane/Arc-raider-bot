const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Montre les commandes disponibles pour le bot Arc Raider'),
  async execute(interaction) {
    const helpText = `**🤖 Commandes Arc Raiders Bot**\n\n` +
      `**📰 Informations générales**\n` +
      `\`/ping\` - Vérifie que le bot répond\n` +
      `\`/help\` - Affiche cette aide\n` +
      `\`/arc-info\` - Informations complètes sur Arc Raiders\n` +
      `\`/arc-events\` - Actualités et événements récents\n` +
      `\`/arc-links\` - Liens utiles (Steam, Discord, support)\n\n` +
      `**🎮 Guides de gameplay**\n` +
      `\`/arc-craft\` - Guide de craft et fabrication\n` +
      `\`/arc-pole\` - Guide de la Pole (base) et upgrades\n` +
      `\`/arc-weapons\` - Guide des armes et modifications\n` +
      `\`/arc-tips\` - Conseils et astuces de survie\n` +
      `\`/arc-survival\` - Guide de survie complet\n\n` +
      `💡 *Utilise les options des commandes pour plus de détails !*\n` +
      `*Bot créé pour la communauté Arc Raiders* 🎮`;
    await interaction.reply({ content: helpText, ephemeral: true });
  },
};
