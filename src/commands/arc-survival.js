const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-survival')
    .setDescription('Guide de survie et stratégies pour Arc Raiders'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor('#06D6A0')
      .setTitle('🛡️ Guide de Survie - Arc Raiders')
      .setDescription('Conseils essentiels pour survivre sur la Surface')
      .addFields(
        { 
          name: '🎒 Gestion de l\'inventaire', 
          value: '**Avant chaque raid :**\n• Minimum 2 kits de soin\n• 1-2 grenades (EMP si possible)\n• Munitions suffisantes (120-180 balles)\n• Eau et nourriture pour buff de régénération\n\n**Pendant le raid :**\n• Drop les items inutiles si inventaire plein\n• Garde toujours 1 slot libre pour loot précieux',
          inline: false 
        },
        { 
          name: '⚠️ Gestion des risques', 
          value: '**Niveaux de danger :**\n🟢 Zone verte : Peu de machines, loot basique\n🟡 Zone jaune : Machines moyennes, loot moyen\n🔴 Zone rouge : Machines lourdes, loot rare\n\n**Règle d\'or :** Commence en vert, évolue vers jaune/rouge quand équipé',
          inline: false 
        },
        { 
          name: '🏃 Éviter les combats', 
          value: 'Parfois, fuir = meilleure option :\n• Machine trop puissante → fuis\n• Équipe hostile nombreuse → fuis\n• Peu de HP/munitions → fuis vers extraction\n\n**Remember :** Un Raider vivant > Un Raider mort avec du loot',
          inline: false 
        },
        { 
          name: '🗺️ Connaissance de la carte', 
          value: '**Points d\'intérêt à mémoriser :**\n• Zones d\'extraction (3-4 par map)\n• Caches de loot garanties\n• Spawn des machines lourdes\n• Raccourcis et passages secrets\n• Points de sniper en hauteur',
          inline: false 
        },
        { 
          name: '⏰ Gestion du temps', 
          value: '**Timeline d\'un raid typique :**\n• 0-5 min : Loot rapide zone de spawn\n• 5-15 min : Exploration et engagement machines\n• 15-25 min : Loot final, préparation extraction\n• 25-30 min : Vers extraction, sécurisation\n\n⚠️ Ne reste JAMAIS plus de 30 min (risque tempête ARC)',
          inline: false 
        },
        { 
          name: '💊 Régénération et buffs', 
          value: '**Buffs utiles :**\n• Repas chaud (+2 HP/s pendant 5 min)\n• Boost vitesse (+25% mvt pendant 3 min)\n• Résistance (+15% réduction dégâts pendant 5 min)\n\n**Craft à la Cantine avant raids importants**',
          inline: false 
        },
        { 
          name: '🤝 Stratégies solo vs équipe', 
          value: '**Solo :**\n• Joue stealth, évite confrontations\n• Privilégie zones vertes/jaunes\n• Extrait dès que inventaire à 70%\n\n**Équipe :**\n• Répartissez les rôles (tank/dps/support)\n• Partagez les ressources équitablement\n• Couvrez-vous mutuellement\n• Extrayez ensemble (toujours)',
          inline: false 
        },
        { 
          name: '⚡ Situations d\'urgence', 
          value: '**Si attaqué par équipe hostile :**\n1. Fuis vers zone machines (elles attaquent tout le monde)\n2. Utilise fumigènes/EMP pour disparaître\n3. Ne défends ton loot QUE si tu peux gagner\n\n**Si machine Titan aggro :**\n1. Grenade EMP immédiate\n2. Fuis pendant stun (5s)\n3. Cache-toi jusqu\'à désaggro (30s)',
          inline: false 
        }
      )
      .setFooter({ text: 'La Surface est impitoyable - sois prudent, Raider !' })
      .setTimestamp();
    
    await interaction.reply({ embeds: [embed] });
  },
};
