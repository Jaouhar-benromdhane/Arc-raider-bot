const { EmbedBuilder } = require('discord.js');
const { loadConfig, addSentNewsId, isNewsSent, updateLastCheck } = require('../utils/config');

// Simule la récupération des news (dans un vrai scénario, on scraperait le site)
// Pour l'instant, on utilise des données statiques basées sur ce qu'on a vu
function getMockNews() {
  return [
    {
      id: 'arc-news-20251120-1',
      title: 'The Evolution of ARC Raiders: Interviews with the developers',
      date: '20 novembre 2025',
      url: 'https://arcraiders.com/fr/news/evolution-of-arc-raiders-documentary',
      excerpt: 'Découvrez les coulisses du développement d\'Arc Raiders avec les interviews exclusives des développeurs.',
      type: 'news' // news ou notification
    },
    {
      id: 'arc-patch-20251120',
      title: 'Patch Notes Update 1.3.0',
      date: '20 novembre 2025',
      url: 'https://arcraiders.com/fr/news/duck-update-patch-notes-1-3-0',
      excerpt: 'Nouvelle mise à jour majeure avec corrections de bugs et améliorations de gameplay.',
      type: 'notification' // Important: patch = notification
    },
    {
      id: 'arc-event-20251119',
      title: 'Help us Stake Our Claim! - Community Event Phase Two',
      date: '19 novembre 2025',
      url: 'https://arcraiders.com/fr/news/community-event-phase-two-has-begun',
      excerpt: 'La phase 2 de l\'événement communautaire a commencé ! Participez et gagnez des récompenses exclusives.',
      type: 'notification'
    }
  ];
}

async function checkAndSendNews(client) {
  try {
    const config = loadConfig();
    const news = getMockNews();
    
    for (const article of news) {
      // Skip si déjà envoyé
      if (isNewsSent(article.id)) {
        continue;
      }

      // Créer l'embed
      const embed = new EmbedBuilder()
        .setColor(article.type === 'notification' ? '#FF6B35' : '#4ECDC4')
        .setTitle(`${article.type === 'notification' ? '🔔' : '📰'} ${article.title}`)
        .setDescription(article.excerpt)
        .addFields({ name: '📅 Date', value: article.date, inline: true })
        .setURL(article.url)
        .setFooter({ text: 'Arc Raiders - Actualités officielles' })
        .setTimestamp();

      // Envoyer dans le salon approprié
      let channelId;
      let mentionRole = '';

      if (article.type === 'notification') {
        channelId = config.notificationChannels.notifications;
        mentionRole = '<@&NEWS_ROLE_ID>'; // À remplacer par l'ID du rôle @News
      } else {
        channelId = config.notificationChannels.news;
      }

      if (channelId) {
        try {
          const channel = await client.channels.fetch(channelId);
          if (channel) {
            const message = article.type === 'notification' ? `${mentionRole}\n` : '';
            await channel.send({ content: message, embeds: [embed] });
            console.log(`✅ Nouvelle actualité envoyée: ${article.title}`);
            addSentNewsId(article.id);
          }
        } catch (err) {
          console.error(`Erreur envoi dans salon ${channelId}:`, err.message);
        }
      }
    }

    updateLastCheck();
  } catch (err) {
    console.error('Erreur lors de la vérification des news:', err);
  }
}

function startNewsChecker(client) {
  console.log('🔔 Système de notifications automatiques activé');
  
  // Vérifier immédiatement au démarrage
  setTimeout(() => checkAndSendNews(client), 30000); // 30s après le démarrage
  
  // Puis toutes les heures
  setInterval(() => {
    checkAndSendNews(client);
  }, 60 * 60 * 1000); // 1 heure
}

module.exports = { startNewsChecker, checkAndSendNews };
