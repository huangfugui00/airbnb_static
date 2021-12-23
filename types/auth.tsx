
import { Session } from "@supabase/gotrue-js/src/lib/types"

export type authType = {
    session:string | null,
    loading:boolean,
}

// export type authType = {
//     session:Session | null,
//     loading:boolean,
// }
