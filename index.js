// Intruções para o seu bot funcionar
// Primeiramente acesse "config.json" e coloque o token de se bot
// Instale Node Js
// E instale a biblioteca do DiscordJs
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on("ready", () => {
	console.log("O bot foi iniciado com sucesso!");
});

client.on("message", msg => {
	if(msg.content === "<@627521574576193586>") {
		msg.channel.send("Olá me chamo BotDc meu prefixo é ``"+config.prefix+"``");
	}
});

client.login(config.token);