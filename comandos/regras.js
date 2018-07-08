const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const regras = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Regras")
       
       .setDescription("**Olá!**\nBem vindo à LunariPvP, uma rede de servidores de minecraft.\n\nComo em todos os lugares, há regras, então aqui não será diferente, tais regras são:\n\n:white_circle: Não divulgar outros grupos do discord;\n:white_circle: Não ofender nenhum membro ou integrantes da equipe;\n:white_circle: Proibido conteúdo Not Safe Work (NSFW), Nosso grupo não gosta de coisas feias;\n:white_circle: Não faça discurso de ódio, racismo, e xenofobia.\n\nRespeite as regras e evite ser banido!!")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(regras)

}