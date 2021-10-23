import axios from 'axios'
import { URLSearchParams } from 'url'
import { Http } from '.'
import { Client } from '../client'

export class APIRequest {
    res: Http
    client: Client
    method: string
    path: string
    API: string
    url: string
    options: { [key: string]: string }
    constructor(
        res: Http,
        method: string,
        path: string | string[],
        options: { [key: string]: string } = {}
    ) {
        this.res = res
        this.client = res.client
        this.method = method
        this.options = options

        if (typeof path !== 'string') path = path.join('/')

        let query = ''
        if (options.query)
            query = new URLSearchParams(
                Object.entries(options.query).filter(([key, value]) => key && value)
            ).toString()

        this.path = (!path.startsWith('/') ? `/${path}` : path) + (query ? `?${query}` : '')
        this.API = this.client.options.http.API
        this.url = this.API + this.path

        let henders: { [key: string]: string } = {
            // @ts-ignore
            ...this.options.headers,
            "User-Agent": `DiscordBot (, ${this.client.__version__})`
        }

        if (this.options.auth) henders.Authorization = this.res.token()
        if (this.options.reason) henders["X-Audit-Log-Reason"] = this.options.reason
    }
}
