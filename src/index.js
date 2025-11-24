require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits, Collection } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
if (fs.existsSync(commandsPath)) {
  const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));
  for (const file of commandFiles) {
    // load every command
    const command = require(path.join(commandsPath, file));
    if (command && command.data && command.execute) {
      client.commands.set(command.data.name, command);
    }
  }
}

client.once('clientReady', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (err) {
    console.error('Command error:', err);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'Erreur lors de l\'exécution de la commande.', ephemeral: true });
    } else {
      await interaction.reply({ content: 'Erreur lors de l\'exécution de la commande.', ephemeral: true });
    }
  }
});

const token = process.env.DISCORD_TOKEN;
if (!token) {
  console.error('Veuillez définir DISCORD_TOKEN dans le fichier .env');
  process.exit(1);
}

// Démarrer le système de notifications automatiques
client.once('clientReady', () => {
  const { startNewsChecker } = require('./utils/newsChecker');
  startNewsChecker(client);
});

client.login(token);
