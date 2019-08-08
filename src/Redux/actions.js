// Action creators

const loginUser = user => ({
  type: 'LOGIN',
  payload: user
})

const logoutUser = user => ({
  type: 'LOGOUT'
})

const signupUser = user => ({
  type: 'SIGNUP',
  payload: user
})

const persistUser = user => ({
  type: 'PERSIST',
  payload: user
})


// Fetch

const loginUserToDB = user => dispatch => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }
  fetch("http://localhost:3000/login", config)
  .then(res => res.json())
  .then(user => {
    dispatch(loginUser(user))
  })
}
