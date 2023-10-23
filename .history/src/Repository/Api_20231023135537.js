import axios from 'axios'
import { Store } from 'react-notifications-component';


const Baseurl = 'https://frameskart-backend.vercel.app/'



export const userLogin = async () => {
    try{
        const response = await axios.post(`${Baseurl}api/v1/user/login`)
    }catch{}
}