const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        let result = Math.floor(Math.random() * 100);
        let ballembed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Percent of gay:", result);

        message.channel.send(ballembed);

};

