import dotenv from 'dotenv'
import express from 'express'
import { Client, GatewayIntentBits } from 'discord.js'

dotenv.config()

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.login(process.env.DISCORD_TOKEN)

const app = express()
const port = process.env.PORT || 3030

client.on("messageCreate", async (message) => {
    console.log(`Message: ${message.content}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })