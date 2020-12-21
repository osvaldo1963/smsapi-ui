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
    fetchAll(uid, sessid) {
        return new Promise(async(resolve, reject) => {
            try {
                var response = await axios.post(url+"/api/1/deparment/fetch?session="+sessid+"&userid="+uid)
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
}