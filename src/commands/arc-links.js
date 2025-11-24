const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-links')
    .setDescription('Liens utiles pour Arc Raiders (acheter, social, support)'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#FFD93D')
      .setTitle('🔗 Liens Arc Raiders')
      .setDescription('Accès rapide aux plateformes et réseaux sociaux')
      .addFields(
        {
          name: '🎮 Acheter le jeu',
          value: '[Steam](https://store.steampowered.com/app/1808500/ARC_Raiders/) | [Epic Games](https://store.epicgames.com/p/arc-raiders) | [PlayStation](https://store.playstation.com/concept/10003610) | [Xbox](https://www.xbox.com/games/store/arc-raiders/9NDF1F263RZ4)',
          inline: false
        },
        {
          name: '💬 Réseaux sociaux',
          value: '[Discord officiel](https://discord.com/invite/arcraiders) | [Twitter/X](https://x.com/ARCRaidersGame)',
          inline: false
        },
        {
          name: '📰 Ressources',
          value: '[Site officiel](https://arcraiders.com) | [Actualités](https://arcraiders.com/fr/news) | [FAQ](https://arcraiders.com/fr#faq)',
          inline: false
        },
        {
          name: '🏢 Studios',
          value: '[Embark Studios](https://www.embark-studios.com/) | [Support](https://id.embark.games/arc-raiders/support)',
          inline: false
        }
      )
      .setFooter({ text: 'Rejoins la communauté Arc Raiders !' })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  },
};
