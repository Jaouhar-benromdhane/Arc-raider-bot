const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('arc-tips')
    .setDescription('Conseils et astuces pour Arc Raiders')
    .addStringOption(option =>
      option.setName('categorie')
        .setDescription('Choisir une catégorie de tips')
        .setRequired(false)
        .addChoices(
          { name: '🎯 Débutant', value: 'beginner' },
          { name: '⚔️ Combat', value: 'combat' },
          { name: '🎒 Loot & Extraction', value: 'loot' },
          { name: '🤖 Machines ARC', value: 'arc' },
          { name: '👥 Coopération', value: 'coop' }
        )),
  async execute(interaction) {
    const category = interaction.options.getString('categorie') || 'beginner';
    
    const embeds = {
      beginner: new EmbedBuilder()
        .setColor('#06D6A0')
        .setTitle('🎯 Tips pour Débutants')
        .addFields(
          { 
            name: '1️⃣ Commence doucement', 
            value: 'Ne rush pas - explore la carte, familiarise-toi avec les mécaniques',
            inline: false 
          },
          { 
            name: '2️⃣ Stockage prioritaire', 
            value: 'Upgrade ton stockage à la Pole AVANT tout - tu perdras moins de loot',
            inline: false 
          },
          { 
            name: '3️⃣ Fuis les gros combats au début', 
            value: 'Les machines ARC lourdes sont mortelles - évite-les jusqu\'à avoir de l\'équipement décent',
            inline: false 
          },
          { 
            name: '4️⃣ Écoute les sons', 
            value: 'Les machines émettent des sons distinctifs - apprends à les reconnaître',
            inline: false 
          },
          { 
            name: '5️⃣ Extrais régulièrement', 
            value: 'Mieux vaut extraire avec peu de loot que tout perdre. Joue safe au début !',
            inline: false 
          }
        )
        .setFooter({ text: 'La prudence paye sur la Surface !' }),

      combat: new EmbedBuilder()
        .setColor('#E63946')
        .setTitle('⚔️ Tips de Combat')
        .addFields(
          { 
            name: '🎯 Vise les points faibles', 
            value: 'Chaque machine ARC a des zones orange = dégâts critiques x2-3',
            inline: false 
          },
          { 
            name: '🏃 Mobilité = Survie', 
            value: 'Reste mobile, utilise le cover, ne reste JAMAIS immobile face aux machines',
            inline: false 
          },
          { 
            name: '🔫 Gestion des munitions', 
            value: 'Les munitions sont précieuses - privilégie les tirs précis aux spray & pray',
            inline: false 
          },
          { 
            name: '💥 Grenades EMP', 
            value: 'Les EMP stunnent les machines pendant 5s - parfait pour fuir ou finisher',
            inline: false 
          },
          { 
            name: '👥 Focus fire en équipe', 
            value: 'Concentrez vos tirs sur UNE machine à la fois - plus efficace',
            inline: false 
          }
        ),

      loot: new EmbedBuilder()
        .setColor('#FFD93D')
        .setTitle('🎒 Tips Loot & Extraction')
        .addFields(
          { 
            name: '📍 Zones de loot riches', 
            value: '• Zones industrielles : Composants électroniques\n• Dépôts militaires : Armes et munitions\n• Zones résidentielles : Consommables et matériaux',
            inline: false 
          },
          { 
            name: '⏰ Timing d\'extraction', 
            value: 'Les extractions se font toutes les 10 min - planifie ton raid autour de ces horaires',
            inline: false 
          },
          { 
            name: '🎒 Priorise ton inventaire', 
            value: 'Ordre de priorité : Cristaux > Composants rares > Armes > Ferraille basique',
            inline: false 
          },
          { 
            name: '🚁 Sécurise la zone d\'extraction', 
            value: 'Arrive 2-3 min en avance, vérifie qu\'aucun joueur hostile ni machine n\'est proche',
            inline: false 
          },
          { 
            name: '💡 Assure-toi', 
            value: 'Si tu as du loot précieux, assure-le à la Pole (coûte 10% de sa valeur)',
            inline: false 
          }
        ),

      arc: new EmbedBuilder()
        .setColor('#C77DFF')
        .setTitle('🤖 Tips Machines ARC')
        .addFields(
          { 
            name: 'Scout (léger)', 
            value: '**Point faible :** Œil central\n**Tactique :** Tire et recule, facile en solo',
            inline: false 
          },
          { 
            name: 'Enforcer (moyen)', 
            value: '**Point faible :** Dos (plaques orange)\n**Tactique :** Flanque-le, évite le front',
            inline: false 
          },
          { 
            name: 'Titan (lourd)', 
            value: '**Point faible :** Cœur énergétique (ventre)\n**Tactique :** Équipe requise, focus les jambes d\'abord pour le ralentir',
            inline: false 
          },
          { 
            name: '⚡ Pattern d\'attaque', 
            value: 'Les machines ont des patterns prévisibles - observe avant d\'engager',
            inline: false 
          },
          { 
            name: '🔊 Bruit = Aggro', 
            value: 'Les tirs attirent les machines proches - engage seulement si prêt',
            inline: false 
          }
        ),

      coop: new EmbedBuilder()
        .setColor('#4361EE')
        .setTitle('👥 Tips Coopération')
        .addFields(
          { 
            name: '🎙️ Communication', 
            value: 'Utilise le vocal - appelle les machines, les joueurs hostiles, le loot rare',
            inline: false 
          },
          { 
            name: '🎯 Rôles en équipe', 
            value: '• Tank : Attire l\'aggro, armure lourde\n• DPS : Focus les points faibles\n• Support : Heal et EMP',
            inline: false 
          },
          { 
            name: '📦 Partage du loot', 
            value: 'Décidez d\'une répartition équitable AVANT le raid - évite les conflits',
            inline: false 
          },
          { 
            name: '🚁 Extraction groupée', 
            value: 'Attendez-vous à la zone d\'extraction - n\'abandonnez pas vos coéquipiers',
            inline: false 
          },
          { 
            name: '⚠️ PvP en équipe', 
            value: 'Si vous engagez des joueurs : focus fire, flanquez, ne vous séparez pas',
            inline: false 
          }
        )
    };

    await interaction.reply({ embeds: [embeds[category]] });
  },
};
