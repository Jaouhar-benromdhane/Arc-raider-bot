const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Montre les commandes disponibles pour le bot Arc Raider'),
  async execute(interaction) {
    const helpText = `**🤖 Commandes disponibles:**\n\n` +
      `\`/ping\` - Vérifie que le bot répond\n` +
      `\`/help\` - Affiche cette aide\n` +
      `\`/arc-info\` - Informations complètes sur Arc Raiders\n` +
      `\`/arc-events\` - Actualités et événements récents\n` +
      `\`/arc-links\` - Liens utiles (acheter, social, support)\n\n` +
      `*Bot créé pour la communauté Arc Raiders* 🎮`;
    await interaction.reply({ content: helpText, ephemeral: true });
  },
};
