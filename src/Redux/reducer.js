const initialState = {}

export default (state = initialState, {type,  payload }) => {
  switch (type){
    case 'LOGIN':
      return payload
    case 'SIGNUP':
      return
    case 'PERSIST':
      return
    case 'LOGOUT':
      return 
  }
}
