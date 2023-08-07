import axios from "axios"

const CangeUser = {
    async getUserServise () {
        const {data} = await axios.get(`/user`)
        return data
    },
    async putUserServise (user) {
        const {data} = await axios.put('user' , {user})
        return data
    }
}

export default CangeUser