const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'poll',
    description: "this is a poll command",
    execute(message, args){
        (async() => {
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        const embedPoll = new MessageEmbed()
         .setTitle('New Poll!')
         .setDescription(pollDescription)
         .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
    })();

}
}