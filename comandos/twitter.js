const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const tt = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Twitter")
       
       .setDescription("Acesse já nosso twitter: https://twitter.com/HarleyMC_")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(tt)

}
