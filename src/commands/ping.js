const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Répond Pong pour vérifier que le bot fonctionne'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
