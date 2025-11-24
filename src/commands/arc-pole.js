const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-pole')
    .setDescription('Guide complet de la Pole (base) dans Arc Raiders'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#4ECDC4')
      .setTitle('🏠 Guide de la Pole (Base)')
      .setDescription('Ta base souterraine - centre de tes opérations dans Arc Raiders')
      .addFields(
        { 
          name: '🎯 Rôle de la Pole', 
          value: 'Zone sécurisée où tu peux :\n• Stocker ton butin\n• Crafter et améliorer ton équipement\n• Te reposer entre les raids\n• Gérer ton inventaire',
          inline: false 
        },
        { 
          name: '⬆️ Upgrades de la Pole', 
          value: '**Niveau 1 → 2 :**\n• Coût : 500 ferraille, 50 composants\n• Bonus : +50% espace stockage\n\n**Niveau 2 → 3 :**\n• Coût : 1200 ferraille, 150 composants, 30 cristaux\n• Bonus : Débloque atelier avancé\n\n**Niveau 3 → 4 :**\n• Coût : 2500 ferraille, 300 composants, 100 cristaux\n• Bonus : Station de modification armes',
          inline: false 
        },
        { 
          name: '🔧 Améliorer les stations', 
          value: '**Atelier de craft :**\n• Niveau 1 : Items basiques\n• Niveau 2 : Items avancés (800 ferraille)\n• Niveau 3 : Items légendaires (2000 ferraille + 50 cristaux)\n\n**Stockage :**\n• Coffre standard : Gratuit (20 slots)\n• Coffre étendu : 300 ferraille (50 slots)\n• Coffre sécurisé : 800 ferraille (100 slots + protection)',
          inline: false 
        },
        { 
          name: '💡 Tips d\'optimisation', 
          value: '• Upgrade le stockage en priorité\n• Construis l\'atelier niveau 2 rapidement pour les armes\n• Le labo permet de recycler les items inutiles\n• La cantine donne des buffs de régénération passifs',
          inline: false 
        },
        { 
          name: '🎨 Personnalisation', 
          value: 'Débloque des décorations en progressant :\n• Affiches et posters\n• Trophées de machines ARC vaincues\n• Éclairages personnalisés\n• Stations de repos améliorées',
          inline: false 
        }
      )
      .setFooter({ text: 'La Pole évolue avec toi - investis dans tes upgrades !' })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  },
};
