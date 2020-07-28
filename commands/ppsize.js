const Discord = require("discord.js");

module.exports = {
    name: 'ppsize',
    description: "this is a ppsize command",
    execute(message, args){
        let replies = ["8D.", "8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D"];

        let result = Math.floor((Math.random() * replies.length));
        let ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("PP Size:", replies[result]);

        message.channel.send(ballembed);
    }
}