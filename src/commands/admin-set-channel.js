const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { setNotificationChannel, setNewsChannel, loadConfig } = require('../utils/config');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('admin-set-channel')
    .setDescription('Configure les salons de notifications (Admin uniquement)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(option =>
      option.setName('type')
        .setDescription('Type de salon à configurer')
        .setRequired(true)
        .addChoices(
          { name: '🔔 Notifications (patches, events importants)', value: 'notifications' },
          { name: '📰 News (toutes les actualités)', value: 'news' }
        ))
    .addChannelOption(option =>
      option.setName('salon')
        .setDescription('Le salon où envoyer les notifications')
        .setRequired(true)),
  
  async execute(interaction) {
    const type = interaction.options.getString('type');
    const channel = interaction.options.getChannel('salon');

    if (type === 'notifications') {
      setNotificationChannel(channel.id);
    } else {
      setNewsChannel(channel.id);
    }

    const emoji = type === 'notifications' ? '🔔' : '📰';
    await interaction.reply({
      content: `✅ ${emoji} Salon **${type}** configuré : ${channel}\n\nLes actualités Arc Raiders y seront postées automatiquement toutes les heures.`,
      ephemeral: true
    });
  },
};
