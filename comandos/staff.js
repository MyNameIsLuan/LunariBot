const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const staff = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("STAFF")
       
       .setDescription("Nosso FORMULARIO para a staff ATUALMENTE é: \n\nAcesse já: [Clique Aqui](https://goo.gl/forms/cgSjkZEmAN1tT5s33)")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(staff)

}
