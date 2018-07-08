const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const requisitos = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Requisitos")
       
       .setDescription("Nossos requisitos para obter TAGS dentro da rede são:\n\nYT: 300 inscritos + vídeo no servidor\nSemipro: 50 inscritos + video no servidor\nDivulgador: 10 inscritos + vídeo no servidor\n\nCaso tenha os requisitos contate um **staff**!")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(requisitos)

}
