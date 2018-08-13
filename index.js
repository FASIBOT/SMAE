const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const TOKEN = 'NDc4MzQ2NjAzOTcyMDAxNzk3.DlN4eQ.r-c8bh65-AVaNVpeMUKu8JxZh6Q';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'hello'){
        message.channel.sendMessage('whazzap?');
    }
});

bot.on('ready', function(){
    console.log("Ready");
});

bot.login(TOKEN);