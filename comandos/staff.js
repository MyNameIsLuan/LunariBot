const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
   const staf = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("STAFF")
       
       .setDescription("SEJA STAFF de nossa rede acessando tais links:\n\nPara Helper: [Clique Aqui](http://bit.ly/formajd)\nPara Trial[Clique Aqui](https://bit.ly/2Lg7XBC)\nPara Builder: [Clique Aqui](http://bit.ly/2hLuFAh)\nPara GC: [Clique Aqui](https://goo.gl/forms/k3CwCxFpHsY7Ubqf1)\n\n")
       
       .setTimestamp()
       .setFooter(`Comando executado por: ${message.author.tag}`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")
    
    message.channel.send(staf)

}
