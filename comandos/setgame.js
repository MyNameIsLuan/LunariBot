const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
        let mensg = args.join(" ");
        if(!mensg)
           return message.channel.send("Digite a msg do jogo")
        client.user.setPresence({ game: { name: `${mensg}`, type: 0 } });
        message.reply(`jogo setado para: ${mensg}`)
    }
