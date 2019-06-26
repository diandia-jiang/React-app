let assObject = (state,obj) => {
  return Object.assign({},state,obj)
}
const store = (state = {
  homeBannerList: [],
  homeProList: [],
},action) => {
  let { type, data } = action
  switch (type) {
    case 'changeHomeBannerList':
      // return Object.assign({}, state,{homeBannerList: data})
      return assObject(state,{homeBannerList:data})
    case 'changeHomeProList':
      return assObject(state,{homeProList:data})
    default:
      return state
  }
}

export default store