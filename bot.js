require('dotenv').config()

const { Client } = require('discord.js');
const client = new Client();
const Canvas = require('canvas')

let hello = Math.floor(Math.random()*10);

client.on('ready', () => {
        console.log(`${client.user.tag} logged in`)
});

client.on('message', (message) =>{
    if(message.author.bot) return;

    else if(message.content === ('-help')){
        message.channel.send("List of commands: hi -- responds , -spam -- starts spamming, -p -- repeats text after '-p', -rev -- same as '-p' but reverse , and few secret ones *wink* ");
    }


    if(message.content === 'hi'){
        switch (hello){
            case 0:
                message.channel.send('hello');
                hello = Math.floor(Math.random*10);
                break;
            case 1:
                message.channel.send('hi');
                hello = Math.floor(Math.random*10);
                break;
            case 2:
                message.channel.send('hey');
                hello = Math.floor(Math.random*10);
                break;
            case 3:
                message.channel.send('whatsup');
                hello = Math.floor(Math.random*10);
                break;
            case 4:
                message.channel.send('Hi');
                hello = Math.floor(Math.random*10);
                break;
            case 5:
                message.channel.send('Hello');
                hello = Math.floor(Math.random*10);
                break;
            case 6:
                message.channel.send('Hey');
                hello = Math.floor(Math.random*10);
                break;
            case 7:
                message.channel.send('Whatsup');
                hello = Math.floor(Math.random*10);
                break;
            case 8:
                message.channel.send('Hiiiiiii');
                hello = Math.floor(Math.random*10);
                break;
            case 9:
                message.channel.send('Hiii');
                hello = Math.floor(Math.random*10);
                break;

        }
    }


    else if(message.content === '-spam'){
        for(i =0;i <10;i++){
            message.channel.send('spam');
        }
            
    } 
    else if(message.content === 'whos joe'){
            message.channel.send('Joe mama (please laught)');
            
    } 
    else if(message.content.includes('-s')){
        message.channel.send(message.content.replace('-s',''));
    }
    else if(message.content.includes('-rev')){
        message.channel.send(message.content.replace('-rev','').split('').reverse().join(''));
    }
    else if(message.content === ('ping')){
        message.channel.send('pong');
    }
    else if(message.content === ('pong')){
        message.channel.send('ping');
    }
    else if(message.content.includes('Childish bot')){
        message.channel.send('what do you want');
    }

    else if(message.content.includes('fuck')){
        message.channel.send('that was very rude');
    }

    else if(message.content.includes('-password')){  
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"
        let Ranlet = alphabet[Math.floor(Math.random() * alphabet.length)]
        let Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)]
        for(i = 1;i < 10 ;i++){
            Ranlet += Ranlet2;
            Ranlet2 = alphabet[Math.floor(Math.random() * alphabet.length)];
        }

        message.channel.send(Ranlet);
    }
    
    else if(message.content.includes('-n')){
        message.channel.send(hello);
        hello = Math.floor(Math.random()*10);
    }
    else if(message.content.includes('-name')){
        let av = client.users.get(event.user.uid).avatarURL
        message.channel.send(av);
    }
    
    const canvas = Canvas.createCanvas(500,200);
    const ctx = canvas.getContext('2d');

    //const background = await Canvas.loadImage("")
    
    
});

client.login(process.env.DISCORDJS_BOT_TOKEN);