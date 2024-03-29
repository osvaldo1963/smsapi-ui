import axios from 'axios'
import { url } from './Connection'

export default class Auth {
    saveSession(data) {
        console.log(JSON.stringify(data.user))
        localStorage.setItem("session", JSON.stringify(data.user))
    }
    checkSession() {
        var session = localStorage.getItem("session")
        if(session) {
            return true
        } else {
            return false
        }
    }
    async Login(email, password) {   
        try {
            var response = await axios.post(`${url}/auth/login?email=${email}&pass=${password}`)
            var { data, status } = response
            if(status === 200) this.saveSession(data)
            return response
        } catch(error) {return error}
        
    }

}


