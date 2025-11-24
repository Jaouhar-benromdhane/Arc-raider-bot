const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-craft')
    .setDescription('Guide de craft et fabrication dans Arc Raiders')
    .addStringOption(option =>
      option.setName('item')
        .setDescription('Choisir un type d\'item')
        .setRequired(false)
        .addChoices(
          { name: '🔫 Armes', value: 'weapons' },
          { name: '🛡️ Équipement', value: 'gear' },
          { name: '💊 Consommables', value: 'consumables' },
          { name: '🔧 Munitions', value: 'ammo' }
        )),
  async execute(interaction) {
    const itemType = interaction.options.getString('item') || 'general';
    
    const embeds = {
      general: new EmbedBuilder()
        .setColor('#FF6B35')
        .setTitle('🔨 Guide de Craft - Arc Raiders')
        .setDescription('Système de fabrication et craft dans Arc Raiders')
        .addFields(
          { 
            name: '📦 Ressources de base', 
            value: '• Ferraille métallique\n• Composants électroniques\n• Matériaux organiques\n• Cristaux énergétiques',
            inline: false 
          },
          { 
            name: '🏭 Stations de craft', 
            value: '• **Cantine** : Consommables et équipement léger\n• **Atelier** : Armes et modifications\n• **Labo** : Items avancés et upgrades',
            inline: false 
          },
          { 
            name: '⚡ Tips de craft', 
            value: '• Récupère tous les items sur la Surface\n• Les machines ARC droppent des composants rares\n• Les crafts avancés nécessitent plusieurs étapes',
            inline: false 
          }
        )
        .setFooter({ text: 'Utilise /arc-craft [weapons/gear/consumables/ammo] pour plus de détails' }),

      weapons: new EmbedBuilder()
        .setColor('#E63946')
        .setTitle('🔫 Craft d\'Armes')
        .addFields(
          { 
            name: 'Fusil d\'assaut MK-2', 
            value: '**Ressources :**\n• 15x Ferraille métallique\n• 8x Composants électroniques\n• 5x Poudre à canon\n\n**Station :** Atelier',
            inline: false 
          },
          { 
            name: 'Fusil de sniper Longshot', 
            value: '**Ressources :**\n• 20x Ferraille métallique\n• 12x Composants électroniques\n• 10x Optique de précision\n\n**Station :** Atelier avancé',
            inline: false 
          },
          { 
            name: '💡 Astuce', 
            value: 'Démonte les armes trouvées pour récupérer des composants !',
            inline: false 
          }
        ),

      gear: new EmbedBuilder()
        .setColor('#457B9D')
        .setTitle('🛡️ Craft d\'Équipement')
        .addFields(
          { 
            name: 'Armure Raider Mk-1', 
            value: '**Ressources :**\n• 12x Ferraille métallique\n• 6x Tissu renforcé\n• 4x Plaques balistiques\n\n**Protection :** +25% contre balles',
            inline: false 
          },
          { 
            name: 'Sac à dos étendu', 
            value: '**Ressources :**\n• 8x Tissu renforcé\n• 4x Sangles métalliques\n\n**Capacité :** +40% inventaire',
            inline: false 
          }
        ),

      consumables: new EmbedBuilder()
        .setColor('#06D6A0')
        .setTitle('💊 Craft de Consommables')
        .addFields(
          { 
            name: 'Kit de soin avancé', 
            value: '**Ressources :**\n• 6x Matériaux organiques\n• 3x Composants médicaux\n• 2x Stimulants\n\n**Effet :** Restaure 75% HP en 3s',
            inline: false 
          },
          { 
            name: 'Boost d\'énergie', 
            value: '**Ressources :**\n• 4x Cristaux énergétiques\n• 2x Fluide catalyseur\n\n**Effet :** +25% vitesse pendant 60s',
            inline: false 
          }
        ),

      ammo: new EmbedBuilder()
        .setColor('#FFD93D')
        .setTitle('🔧 Craft de Munitions')
        .addFields(
          { 
            name: 'Munitions standards (x60)', 
            value: '**Ressources :**\n• 5x Ferraille métallique\n• 3x Poudre à canon',
            inline: true 
          },
          { 
            name: 'Munitions perforantes (x30)', 
            value: '**Ressources :**\n• 8x Ferraille métallique\n• 5x Poudre à canon\n• 2x Pointe tungstène',
            inline: true 
          }
        )
    };

    await interaction.reply({ embeds: [embeds[itemType]] });
  },
};
