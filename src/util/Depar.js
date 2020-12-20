import axios from 'axios'
import { url } from './Connection'

export default class Department {
    fetchAll(uid, sessid) {
        return new Promise(async(resolve, reject) => {
            try {
                var response = await axios.post(url+"/api/1/deparment/fetch?session="+sessid+"&userid="+uid)
                resolve(response.data)
            } catch(error) { reject(error) }
            
        })
    }
}