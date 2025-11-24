# 🎮 Arc Raiders Discord Bot

Bot Discord complet pour la communauté Arc Raiders avec commandes enrichies, embeds stylés et actualités en temps réel.

## ✨ Fonctionnalités

- `/ping` — Vérifie que le bot répond
- `/help` — Affiche toutes les commandes disponibles
- `/arc-info` — Informations complètes sur Arc Raiders (plateformes, développeur, updates)
- `/arc-events` — Actualités et événements récents du jeu
- `/arc-links` — Liens rapides vers Steam, Epic, PS5, Xbox, Discord officiel, support

## 🚀 Installation Locale

### Prérequis
- Node.js 18+ recommandé
- Un bot Discord (créé depuis le [Developer Portal](https://discord.com/developers/applications))

### Configuration

1. **Cloner ou télécharger ce projet**

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env
```
Édite `.env` et ajoute :
```
DISCORD_TOKEN=ton_bot_token_ici
CLIENT_ID=ton_application_id
GUILD_ID=ton_server_id_pour_tests  # optionnel
```

4. **Enregistrer les commandes slash**
```bash
npm run register-commands
```

5. **Lancer le bot**
```bash
npm start
```

## 🌐 Déploiement 24/7 (Gratuit)

Pour que le bot tourne en permanence, déploie-le sur Railway (gratuit) :

**👉 [Guide complet de déploiement](./DEPLOYMENT.md)**

Résumé rapide :
1. Push le code sur GitHub
2. Connecte-toi sur [Railway](https://railway.app)
3. Importe ton repo GitHub
4. Ajoute les variables d'environnement
5. Railway démarre automatiquement le bot 24/7 !

## 📝 Créer ton Bot Discord

1. Va sur https://discord.com/developers/applications
2. Clique "New Application" → donne un nom
3. Onglet "Bot" → "Add Bot"
4. Copie le TOKEN (c'est ton `DISCORD_TOKEN`)
5. Onglet "General Information" → copie l'Application ID (c'est ton `CLIENT_ID`)
6. Invite le bot avec cette URL (remplace CLIENT_ID) :
```
https://discord.com/oauth2/authorize?client_id=TON_CLIENT_ID&permissions=2048&scope=bot%20applications.commands
```

## 🛠️ Stack Technique

- **Node.js** 18+
- **discord.js** v14 (slash commands, embeds)
- **dotenv** pour la config

## 📂 Structure du Projet

```
bot-discod/
├── src/
│   ├── index.js              # Point d'entrée du bot
│   ├── register-commands.js  # Script d'enregistrement des slash commands
│   └── commands/             # Toutes les commandes
│       ├── ping.js
│       ├── help.js
│       ├── arc-info.js
│       ├── arc-events.js
│       └── arc-links.js
├── .env                      # Variables d'environnement (ne pas commit)
├── .env.example              # Template des variables
├── package.json
├── README.md
├── DEPLOYMENT.md             # Guide de déploiement Railway
├── railway.json              # Config Railway
└── nixpacks.toml             # Config build Railway
```

## 🔒 Sécurité

⚠️ **Ne partage JAMAIS ton `DISCORD_TOKEN`** publiquement (GitHub, Discord, etc.)

Si tu l'as exposé accidentellement :
1. Va sur Discord Developer Portal
2. Onglet "Bot" → "Reset Token"
3. Mets à jour ton `.env` et Railway

## 📈 Améliorations Futures

- [ ] Système de notifications pour nouvelles actualités Arc Raiders
- [ ] Commandes d'administration (kick/ban avec raisons)
- [ ] Statistiques de serveur
- [ ] Intégration avec une API Arc Raiders (si disponible)
- [ ] Système de rôles automatique
- [ ] Commandes de modération

## 🤝 Contribution

Ce bot est open source ! N'hésite pas à :
- Proposer des améliorations
- Signaler des bugs
- Ajouter de nouvelles commandes

## 📄 Licence

MIT License - utilise et modifie comme tu veux !

## 🎯 Support

- [Discord Arc Raiders Officiel](https://discord.com/invite/arcraiders)
- [Site officiel Arc Raiders](https://arcraiders.com)

---

Créé avec ❤️ pour la communauté Arc Raiders