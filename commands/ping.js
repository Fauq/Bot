module.exports = {
    name: 'ping',
    execute(message, args){
        message.channel.send(`Your Ping is ${Date.now() - message.createdTimestamp} ms`)
    }
}
 