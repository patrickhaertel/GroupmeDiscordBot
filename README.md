# GroupmeDiscordBot

### Adding the Discord Bot to a Server 

 - Click [here](https://discord.com/api/oauth2/authorize?client_id=1043989129546956931&permissions=8&scope=bot) to authorize bot and add it to a server

### Connecting with Groupme

 1. Go to https://dev.groupme.com/bots
 2. Select **Create Bot**
 3. Choose the Group for the Bot to forward messages from and choose a name for the bot.
 4. Set the callback url to https://groupmediscordbot.onrender.com/gm-msg?to=CHANNEL_ID
	 - The CHANNEL_ID is the id of the Discord Channel the bot will forward messages to. This id can be found if developer mode is enabled on Discord. 
