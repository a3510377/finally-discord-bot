import axios, { AxiosResponse, Method } from 'axios'
import { Client } from '../client'

const methods = ['get', 'post', 'delete', 'patch', 'put']


export class Http {
    client: Client
    constructor(client: Client) {
        this.client = client
    }
    request(url: string, method: Method = 'GET', options = {}) {
    }
    use(): { [key: string]: any } {
        let data = {}
        let routers: string[] = []
        let _ = this
        let handler = {
            get(data_: any, name: string): any {
                if (methods.includes(name.toLocaleLowerCase())) return _.request(routers.join("/"))
                routers.push(name)
                return new Proxy(data_, handler)
            },
        }
        return new Proxy(data, handler)
    }
    token(): string {
        let token = this.client.token
        if (this.client.options?.notBot) return `Bearer ${token}`
        return `Bot ${token}`
    }
}
