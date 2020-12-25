const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', ()=>{
    console.log("Bot is online.");
    client.user.setActivity('discord.gg/bobux', { type: 'WATCHING'}).catch(console.error);
})

client.on('message', (message)=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == '8ball'){
        client.commands.get('8ball').execute(message, args);
    } else if (command == 'members'){
        client.commands.get('members').execute(message, args);
    } else if (command == 'meme'){
        client.commands.get('meme').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message, args);
    } else if (command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command == 'ppsize'){
        client.commands.get('ppsize').execute(message, args);
    } else if (command == 'poll'){
        client.commands.get('poll').execute(message, args);
    } 



    if(message.content.startsWith(prefix + "prune")){
        let args = message.content.split(" ").slice(1);
        let author = message.member;
            if(!args[0]){
                message.delete();
                message.author.send("No arguments given.")
                return;
            }
            if(args[0] > 100){
                message.delete();
                message.channel.send("Maxiumum is 100 messages at once.")
                return;
            }

            message.delete();
            message.channel.bulkDelete(args[0]);
            return;
        }

    }


)




client.login(process.env.token);
