const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "this is a kick command",
    execute(message, args){
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You don't have permission to kick members.");
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send('Please mention someone to kick');
        if(!toKick) return message.channel.send(`${args[0]} is not a member.`);
        if(!reason) return message.channel.send('Specify a reason.');
 
        if(!toKick.kickable){
            return message.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('Kick')
            .addField('Member Kicked', toKick)
            .addField('Kicked by', message.author)
            .addField('Reason', reason)
            .addField('Date', message.createdAt)
            .setColor("RANDOM");
 
            message.channel.send(x);
            toKick.kick();
        }
    }
}