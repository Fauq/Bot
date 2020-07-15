const Discord = require("discord.js");

module.exports = {
    name: '8ball',
    description: "this is a 8ball command",
    execute(message, args){
        if(!args[1]) return message.reply("Please ask a full question!");
        let replies = ["Yes.", "No.", "I don't know.", "Ask again later", "maybe one day", "after you die", "In a thousand years", "100% no", "100% yes"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        let ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Question", question)
        .addField("Answer", replies[result]);

        message.channel.send(ballembed);
    }
}