import axios from 'axios'
import { url } from './Connection'

export default class Department {
    async converArray(data) {
        var clean = []
        var allData = data.map((each) => {
            var holder = []
            holder["key"]   = each.id
            holder["text"]  = each.department
            holder["value"] = each.program_id
            clean.push(holder)
        })
        await Promise.all(allData)
        return clean
    }
    fetchById(id) {
        return new Promise(async(resolve, reject) => {
            try {
                var session = localStorage.getItem("session")
                var json =JSON.parse(session)
                var response = await axios.post(url+"/deparment/programid?session="+json.session+"&userid="+json.user_id+"&id="+id)
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
                var response = await axios.post(url+"/deparment/fetch?session="+json.session+"&userid="+json.user_id)
                var {data, status} = response
                if(status === 200) {
                    var result = this.converArray(data.deparment)
                    resolve(result)
                } else  {
                    resolve(data)
                }
                
            } catch(error) { reject(error) }
            
        })
    }
    create(programid, department) {
        return new Promise(async(resolve, reject) => {
            try {
            var session = localStorage.getItem("session")
                var json =JSON.parse(session)
                var response = await axios.post(url+"/deparment/create?session="+json.session+"&userid="+json.user_id+"&department="+department+"&programid="+programid)
                var {data, status} = response
                if(status === 200) {
                    resolve(data)
                } else  {
                    resolve(data)
                }
            } catch(error) { reject(error) }
        })
    }
}