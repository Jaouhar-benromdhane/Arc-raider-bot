const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-weapons')
    .setDescription('Guide des armes dans Arc Raiders')
    .addStringOption(option =>
      option.setName('type')
        .setDescription('Type d\'arme')
        .setRequired(false)
        .addChoices(
          { name: '🔫 Fusils d\'assaut', value: 'ar' },
          { name: '🎯 Fusils de sniper', value: 'sniper' },
          { name: '💥 Shotguns', value: 'shotgun' },
          { name: '⚡ Armes énergétiques', value: 'energy' },
          { name: '🔧 Modifications', value: 'mods' }
        )),
  async execute(interaction) {
    const weaponType = interaction.options.getString('type') || 'ar';
    
    const embeds = {
      ar: new EmbedBuilder()
        .setColor('#E63946')
        .setTitle('🔫 Fusils d\'Assaut')
        .addFields(
          { 
            name: 'MK-2 Raider', 
            value: '**Dégâts :** 28 | **Cadence :** 650 RPM | **Chargeur :** 30\n**Recul :** Moyen | **Portée :** Moyenne\n\n✅ Arme polyvalente, idéale pour débutants\n📍 Trouvable : Dépôts militaires',
            inline: false 
          },
          { 
            name: 'Phantom AR-X', 
            value: '**Dégâts :** 32 | **Cadence :** 720 RPM | **Chargeur :** 35\n**Recul :** Élevé | **Portée :** Moyenne-longue\n\n✅ Excellent DPS, demande maîtrise du recul\n📍 Drop : Machines ARC Enforcer',
            inline: false 
          },
          { 
            name: '💡 Meilleure utilisation', 
            value: 'Fusils d\'assaut = armes principales polyvalentes. Engage à moyenne distance, burst fire pour précision.',
            inline: false 
          }
        ),

      sniper: new EmbedBuilder()
        .setColor('#4361EE')
        .setTitle('🎯 Fusils de Sniper')
        .addFields(
          { 
            name: 'Longshot SR-1', 
            value: '**Dégâts :** 110 | **Cadence :** Bolt-action | **Chargeur :** 5\n**Portée :** Très longue\n\n✅ One-shot headshot sur Raiders\n📍 Craft : Atelier niveau 2',
            inline: false 
          },
          { 
            name: 'Viper DMR', 
            value: '**Dégâts :** 68 | **Cadence :** Semi-auto | **Chargeur :** 10\n**Portée :** Longue\n\n✅ Plus rapide que bolt, bon compromis\n📍 Trouvable : Bases abandonnées',
            inline: false 
          },
          { 
            name: '💡 Tips sniper', 
            value: '• Vise les points faibles orange des machines (x3 dégâts)\n• Reste en hauteur et à couvert\n• Porte toujours une arme secondaire pour CQC',
            inline: false 
          }
        ),

      shotgun: new EmbedBuilder()
        .setColor('#F72585')
        .setTitle('💥 Shotguns')
        .addFields(
          { 
            name: 'Breacher SG-8', 
            value: '**Dégâts :** 16x8 pellets | **Cadence :** Pompe | **Chargeur :** 8\n**Portée :** Très courte\n\n✅ Mortel en CQC, détruit les petites machines\n📍 Trouvable : Zones urbaines',
            inline: false 
          },
          { 
            name: 'Auto-Scattergun', 
            value: '**Dégâts :** 14x8 pellets | **Cadence :** Auto | **Chargeur :** 12\n**Portée :** Courte\n\n✅ Parfait pour rush et nettoyage rapide\n📍 Drop : Machines ARC Scout',
            inline: false 
          },
          { 
            name: '💡 Utilisation', 
            value: 'Shotguns = armes de support/défense. Excellent pour zones confinées et contre autres Raiders.',
            inline: false 
          }
        ),

      energy: new EmbedBuilder()
        .setColor('#7209B7')
        .setTitle('⚡ Armes Énergétiques')
        .addFields(
          { 
            name: 'Plasma Caster', 
            value: '**Dégâts :** 45 | **Cadence :** 300 RPM | **Énergie :** 50\n**Recharge :** Auto 5s\n\n✅ Perce les armures, bonus contre machines\n📍 Craft : Labo niveau 3',
            inline: false 
          },
          { 
            name: 'EMP Launcher', 
            value: '**Dégâts :** 20 | **Effet :** Stun 5s | **Chargeur :** 4\n**Type :** Projectile explosif\n\n✅ Désactive temporairement les machines\n📍 Drop : Machines ARC Titan',
            inline: false 
          },
          { 
            name: '⚠️ Important', 
            value: 'Armes énergétiques = pas de munitions classiques, mais recharge nécessaire. Idéales contre machines ARC.',
            inline: false 
          }
        ),

      mods: new EmbedBuilder()
        .setColor('#FFD93D')
        .setTitle('🔧 Modifications d\'Armes')
        .addFields(
          { 
            name: 'Lunette Holographique', 
            value: '**Effet :** +15% précision\n**Slot :** Optique\n**Coût :** 150 ferraille, 20 composants',
            inline: false 
          },
          { 
            name: 'Silencieux', 
            value: '**Effet :** Réduit aggro machines de 50%\n**Slot :** Canon\n**Coût :** 200 ferraille, 30 composants',
            inline: false 
          },
          { 
            name: 'Chargeur étendu', 
            value: '**Effet :** +50% munitions\n**Slot :** Magasin\n**Coût :** 100 ferraille, 15 composants',
            inline: false 
          },
          { 
            name: 'Stabilisateur de recul', 
            value: '**Effet :** -30% recul\n**Slot :** Crosse\n**Coût :** 180 ferraille, 25 composants',
            inline: false 
          },
          { 
            name: '💡 Conseil', 
            value: 'Priorité mods : Silencieux (stealth) > Lunette (précision) > Chargeur > Stabilisateur',
            inline: false 
          }
        )
    };

    await interaction.reply({ embeds: [embeds[weaponType]] });
  },
};
