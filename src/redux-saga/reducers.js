import { types } from "./RrduxTypes";

const ini_api = {posts:[]};


export const reducerApi = (state = ini_api, action) => {

  switch (action.type) {
    
    case types.GET_API:
      return { ...state}
    case types.GER_API_SET:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
