import { supabase } from '../utils/supabaseClient'


export const ssoAuth = async(provider)=>{
    const {error} = await supabase.auth.signIn({provider:provider})
    if(error) throw error
}