import axios from 'axios'
import { url } from './Connection'

export default class Users {
    
    fetchUsers(name, proid, depaid) {
        return new Promise(async(resolve, reject) => {
            try {
                var result = await axios.post(url+"/api/1/users/search?name="+name+"&programid="+proid+"&deparmentid="+depaid)
                resolve(result.data)
            } catch(error) { reject(error) }
        })
    }   
}