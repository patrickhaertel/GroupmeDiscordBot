import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
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
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
const port = process.env.PORT || 3030

client.on("messageCreate", async (message) => {
    console.log(`Message: ${message.content}`)
})

app.post('/gm-msg', (req, res) => {
    console.log(`Body: ${req.body.text}`)
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })