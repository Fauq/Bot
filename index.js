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

// Init discord giveaways
const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./database.json",
    updateCountdownEvery: 3000,
    default: {
        botsCanWin: false,
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
//Coded by Zero

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});

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
        message.delete();
        client.commands.get('poll').execute(message, args);
    } else if (command == '3invites'){
        message.delete();
        client.commands.get('3invites').execute(message, args);
    } else if (command == '5invites'){
        message.delete();
        client.commands.get('5invites').execute(message, args);
    } else if (command == '10invites'){
        message.delete();
        client.commands.get('10invites').execute(message, args);
    } else if (command == 'level10'){
        message.delete();
        client.commands.get('level10').execute(message, args);
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
