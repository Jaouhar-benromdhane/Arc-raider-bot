const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { checkAndSendNews } = require('../utils/newsChecker');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin-force-check')
    .setDescription('Force la vérification immédiate des news (Admin uniquement)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });
    
    try {
      await checkAndSendNews(interaction.client);
      await interaction.editReply('✅ Vérification des news effectuée ! Consulte les salons configurés.');
    } catch (err) {
      await interaction.editReply(`❌ Erreur lors de la vérification: ${err.message}`);
    }
  },
};
