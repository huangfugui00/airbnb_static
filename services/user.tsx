// const api = require('./api')

import {supabase} from '../utils/supabaseClient'


const userServices = {
    async getProfile(){
        const user = supabase.auth.user()
        if (!user){
            return {status:0,message:"you have to login to access the function"}
        }
        let { data, error, status } = await supabase
          .from('profiles')
          .select(`username, website, avatar_url`)
          .eq('id', user.id)
          .single()
        if (error && status !== 406) {
           return {status:0,message:"fetch data wrong"}
        }
        return {status:1,message:"fetch data sucess", data}
    },
  
}

export default userServices