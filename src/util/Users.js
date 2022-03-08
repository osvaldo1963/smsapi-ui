import axios from 'axios'
import { url } from './Connection'

export default class Users {
    fetchUsers(name, proid, depaid) {
        return new Promise(async(resolve, reject) => {
            try {
                var result = await axios.post(`${url}/auth/search?name=${name}&programid=${proid}&deparmentid=${depaid}`)
                resolve(result.data)
            } catch(error) { reject(error) }
        })
    }   
    createUser(parameters) {
        return new Promise(async(resolve, reject) => {
            try {
                var {name, lastname, phone, email, program, department, type} = parameters
                var result = await axios.post(
                    `${url}/auth/register?name=${name}&lastname=${lastname}&email=${email}&phone=${phone}&program=${program}&department=${department}&type=${type}`
                )
                resolve(result.data)
            } catch(error) {reject(error)}
        })
    }
    deleteUser(id) {
        return new Promise(async(resolve, reject) => {
            try {
                var session = localStorage.getItem("session")
                var json =JSON.parse(session)
                var result = await axios.post(`${url}/auth/delete?session=${json.session}&userid=${json.user_id}&uidd=${id}`)
                resolve(result.data)
            } catch(error) { reject(error) }
        })
    }
    async sendMessage(parameters) {
        try {
            var session = localStorage.getItem("session")
            var json =JSON.parse(session)
            var {numbers, message} = parameters
            var result = await axios.post(`${url}/sms?numbers=${numbers}&session=${json.session}&message=${message}&userid=${json.user_id}`)
            console.log(result.data)
            
        } catch(error) {console.log(error)}
    }
}