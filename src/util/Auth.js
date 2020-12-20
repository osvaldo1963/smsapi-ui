import axios from 'axios'
import { url } from './Connection'

export default class Auth {
    saveSession(data) {
        localStorage.setItem("session", data.user)
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
            var response = await axios.post(url+"/api/1/login?email="+email+"&pass="+password)
            var { data, status } = response
            if(status === 200) this.saveSession(data)
            return response
        } catch(error) {return error}
        
    }

}


