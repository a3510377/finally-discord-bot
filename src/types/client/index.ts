import { Http } from '../http'
import { DiscordLink } from './WebSocket'
import Package from "../../../package.json"

export class Client {
    __version__: string = `v${Package.version}`
    userType: 'bot' | 'user'
    APIVersion: number = 9
    options: any = {
        http: {
            API: `https://rear-end-1.a102009102009.repl.co/api/discord/v1/?v=${this.APIVersion}&url=`,
            version: this.APIVersion,
        }
    };

    http: Http = new Http(this)
    ws: DiscordLink = new DiscordLink(this)
    token?: string
    constructor(options?: any) {
        this.options = { ...options, ...this.options }
        this.userType = this.options?.notBot ? 'user' : 'bot'
    }
    get api(): { [key: string]: any } {
        return this.http.use()
    }
    async run(token: string | undefined = this.token) {
        if (!token || typeof token !== 'string') throw new Error('Token Error!!!')
        this.token = token = token.replace(/^(Bot|Bearer)\s*/i, '')
        try {
            await this.ws.connect()
            return this.token
        } catch (error) {
            this.kill()
            throw error
        }
    }
    kill() {

    }
}

let bot = new Client()

bot.api.use.a.a.a.a

bot.run('')
