import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import { Client, GatewayIntentBits, EmbedBuilder } from 'discord.js'

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

app.post('/gm-msg', (req, res) => {
    const channel = client.channels.cache.get(req.query.to)

    console.log(req.body)

    const embed = new EmbedBuilder()
        .setColor(0x5ABBF3)
        .setAuthor({ name: req.body.name, iconURL: req.body.avatar_url})

    if (req.body.text) {
        embed.setDescription(req.body.text)
    }

    if (req.body.attachments != []) {
        for (let attachment of req.body.attachments) {
            if (attachment.type == "image") {
                embed.setImage(attachment.url)
            }
        }
    }

    channel.send({embeds: [embed]})
    res.sendStatus(200)
})

app.get('/', (req, res) => {
    // res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })