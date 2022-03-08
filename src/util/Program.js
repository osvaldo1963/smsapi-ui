import axios from 'axios'
import { url } from './Connection'

export default class Program {
    async converArray(data) {
        var clean = []
        var allData = data.map((each) => {
            var holder = []
            holder["key"]   = each.id
            holder["text"]  = each.program
            holder["value"] = each.id
            clean.push(holder)
        })
        await Promise.all(allData)
        return clean
    }

    create(program) {
        return new Promise(async(resolve, reject) => {
            try {
            var session = localStorage.getItem("session")
                var json =JSON.parse(session)
                var response = await axios.post(`${url}/program/create?session=${json.session}&userid=${json.user_id}&program=${program}`)
                var {data, status} = response
                if(status === 200) {
                    resolve(data)
                } else  {
                    resolve(data)
                }
            } catch(error) { reject(error) }
        })
    }
    
    fetchAll() {
        return new Promise(async(resolve, reject) => {
            try {
                var session = localStorage.getItem("session")
                var json =JSON.parse(session)
                var response = await axios.post(`${url}/program/fetch?session=${json.session}&userid=${json.user_id}`)
                var {data, status} = response
                if(status === 200) {
                    var result = this.converArray(data.program)
                    resolve(result)
                } else  {
                    resolve(data)
                }
                
            } catch(error) { reject(error) }
            
        })
    }
}