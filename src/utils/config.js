const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config.json');

// Structure de configuration par défaut
const defaultConfig = {
  notificationChannels: {
    notifications: null, // ID du salon #📢・notifications
    news: null          // ID du salon #📰・news
  },
  lastNewsCheck: null,
  sentNewsIds: []      // IDs des news déjà envoyées pour éviter doublons
};

function loadConfig() {
  try {
    if (!fs.existsSync(configPath)) {
      saveConfig(defaultConfig);
      return defaultConfig;
    }
    const data = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading config:', err);
    return defaultConfig;
  }
}

function saveConfig(config) {
  try {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  } catch (err) {
    console.error('Error saving config:', err);
  }
}

function setNotificationChannel(channelId) {
  const config = loadConfig();
  config.notificationChannels.notifications = channelId;
  saveConfig(config);
}

function setNewsChannel(channelId) {
  const config = loadConfig();
  config.notificationChannels.news = channelId;
  saveConfig(config);
}

function addSentNewsId(newsId) {
  const config = loadConfig();
  if (!config.sentNewsIds.includes(newsId)) {
    config.sentNewsIds.push(newsId);
    // Garde seulement les 100 dernières news pour éviter un fichier trop gros
    if (config.sentNewsIds.length > 100) {
      config.sentNewsIds = config.sentNewsIds.slice(-100);
    }
    saveConfig(config);
  }
}

function isNewsSent(newsId) {
  const config = loadConfig();
  return config.sentNewsIds.includes(newsId);
}

function updateLastCheck() {
  const config = loadConfig();
  config.lastNewsCheck = new Date().toISOString();
  saveConfig(config);
}

module.exports = {
  loadConfig,
  saveConfig,
  setNotificationChannel,
  setNewsChannel,
  addSentNewsId,
  isNewsSent,
  updateLastCheck
};
