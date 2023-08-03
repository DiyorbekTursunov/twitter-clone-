import axios from "./api"

const Authservise = {
    async userRegister (user) {
        const response = await axios.post('/api/users' , {user})
        return response
    },
    async userLogin () {
        const response = await axios.post('/users/login')
    },
    async getUser () {
        const response = await axios.post('/users')
    }
}
export default Authservise