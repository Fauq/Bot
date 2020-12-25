const { MessageEmbed, Message } = require("discord.js");


module.exports = {
    name: 'help',
    description: "this is a help command",
    execute(message, args){
        const embed = new MessageEmbed()
            .setAuthor(message.author.tag)
            .setColor("RANDOM")
            .setTitle('List of avaliable commands')
            .setDescription('Prefix for this server is *')
            .addFields(
                { name: 'Help', value: 'shows all avaliable commands' },
                { name: '8ball', value: 'Play 8ball', inline: true },
            )
            .addField('Meme', 'Sends a random meme', false)
        message.channel.send(embed);
    }
}