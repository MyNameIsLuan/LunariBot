const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const requisitos = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Requisitos")
       
       .setDescription("Nossos requisitos para obter TAGS dentro da rede são:\n\nYT: 300 inscritos + 100 Views + vídeo no servidor\nStream:150 inscritos + video no servidor e Lives Semanais com FEED ACEITAVEL\nSPRO: 50 inscritos + 30 views + vídeo no servidor\n\nCaso tenha os requisitos contate um **staff**!")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(requisitos)

}
