const commando = require('discord.js-commando');
const discord = require ('discord.js');

class BotInfo extends commando.Command{
    constructor(client){
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Shows information about the bot.'
        });
    }

    async run (message, args){
        var myInfo = new discord.RichEmbed()
            .setDescription("I am a bot created for music. I am the S.M.A.E. unit, which stands for Simple Musician for All and Everyone. You can call me Smae. <3")
            .setColor("#A687DE")
            .setThumbnail(message.author.avatarURL)
            .setFooter("Thanks for being interested!")
            .setTitle("About Me")
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = BotInfo;