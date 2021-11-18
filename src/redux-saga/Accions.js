import { types } from "./RrduxTypes"
 
export const getApi = () =>({
type:types.GET_API,


})

export const getApiSet = (posts) =>({

    type:types.GER_API_SET,
    payload: posts
})