module.exports = {
    name: 'members',
    description: "this is a online command",
    execute(message, args){
        message.channel.send(`Total Members: ${message.guild.memberCount}`);
    }
}    