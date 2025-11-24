const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const { loadConfig } = require('../utils/config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin-config')
    .setDescription('Affiche la configuration actuelle du bot (Admin uniquement)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  
  async execute(interaction) {
    const config = loadConfig();

    const notifChannel = config.notificationChannels.notifications 
      ? `<#${config.notificationChannels.notifications}>` 
      : '❌ Non configuré';
    
    const newsChannel = config.notificationChannels.news 
      ? `<#${config.notificationChannels.news}>` 
      : '❌ Non configuré';

    const lastCheck = config.lastNewsCheck 
      ? new Date(config.lastNewsCheck).toLocaleString('fr-FR')
      : 'Jamais';

    const embed = new EmbedBuilder()
      .setColor('#FFD93D')
      .setTitle('⚙️ Configuration du Bot')
      .addFields(
        { name: '🔔 Salon Notifications', value: notifChannel, inline: false },
        { name: '📰 Salon News', value: newsChannel, inline: false },
        { name: '🕐 Dernière vérification', value: lastCheck, inline: false },
        { name: '📊 News envoyées', value: `${config.sentNewsIds.length} articles`, inline: false }
      )
      .setFooter({ text: 'Utilise /admin-set-channel pour configurer les salons' })
      .setTimestamp();

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
