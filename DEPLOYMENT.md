# 🚀 Guide de Déploiement Railway (Gratuit)

Ce guide te montre comment déployer ton bot Discord Arc Raiders sur Railway pour qu'il tourne 24/7 gratuitement.

## Prérequis
- Un compte GitHub (gratuit)
- Ton bot Discord déjà configuré localement

## Étapes de Déploiement

### 1. Créer un dépôt GitHub

**Option A : Avec Git en ligne de commande**
```bash
cd /home/jaouhar/Bureau/bot-discod
git init
git add .
git commit -m "Initial commit - Arc Raiders Discord Bot"
# Crée un nouveau repo sur github.com puis :
git remote add origin https://github.com/TON_USERNAME/arc-raiders-bot.git
git branch -M main
git push -u origin main
```

**Option B : Upload manuel**
1. Va sur https://github.com/new
2. Crée un nouveau repository (ex: `arc-raiders-bot`)
3. Upload tous les fichiers du dossier `bot-discod` (sauf `.env` !)

⚠️ **IMPORTANT** : Ne commit JAMAIS le fichier `.env` avec ton token ! Il est déjà dans `.gitignore`.

### 2. S'inscrire sur Railway

1. Va sur https://railway.app
2. Clique sur "Start a New Project"
3. Connecte-toi avec ton compte GitHub (gratuit)
4. Railway offre $5 de crédit gratuit par mois (largement suffisant pour un bot Discord)

### 3. Déployer le bot

1. Dans Railway, clique sur "New Project"
2. Sélectionne "Deploy from GitHub repo"
3. Autorise Railway à accéder à ton repo GitHub
4. Choisis le repository `arc-raiders-bot`
5. Railway détectera automatiquement Node.js et commencera le build

### 4. Configurer les variables d'environnement

**CRUCIAL** : Tu dois ajouter tes variables d'environnement sur Railway :

1. Dans ton projet Railway, clique sur l'onglet "Variables"
2. Ajoute ces 3 variables (copie depuis ton `.env` local) :
   ```
   DISCORD_TOKEN=ton_token_ici
   CLIENT_ID=1442504809042149540
   GUILD_ID=1252990028259393681
   ```
3. Clique sur "Add Variable" pour chacune

### 5. Démarrer le bot

1. Railway va automatiquement redéployer après avoir ajouté les variables
2. Vérifie les logs dans l'onglet "Deployments"
3. Tu devrais voir : `Logged in as Arc Raider Bot#3744`

### 6. Vérifier que le bot est en ligne

- Va sur ton serveur Discord
- Le bot devrait avoir un point vert (en ligne)
- Teste `/ping` pour confirmer

## 🎉 C'est fait !

Ton bot tourne maintenant 24/7 gratuitement sur Railway. Tu peux fermer ton PC, le bot continuera de fonctionner.

## Mises à jour futures

Pour mettre à jour le bot après avoir modifié le code :

```bash
git add .
git commit -m "Description de tes changements"
git push
```

Railway redéploiera automatiquement ton bot !

## Alternatives gratuites

Si Railway ne fonctionne pas pour toi :

- **Render** : https://render.com (similaire à Railway)
- **Fly.io** : https://fly.io (gratuit avec limites généreuses)
- **Replit** : https://replit.com (plus simple mais moins stable)

## Support

- Railway docs : https://docs.railway.app
- Discord Railway : https://discord.gg/railway

## Limites du plan gratuit Railway

- $5 de crédit/mois (environ 500h d'exécution)
- Pas de carte de crédit requise
- Suffisant pour un bot Discord qui consomme très peu de ressources
