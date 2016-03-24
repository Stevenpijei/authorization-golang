/*********************************************************************
||  Import required modules
*********************************************************************/
import {fromJS, Map} from 'immutable'

/*********************************************************************
||  Define the state tree
*********************************************************************/
export const INITIAL_STATE = fromJS({
  ID: "",
  Username: "",
  Password: "",
  Email: "",
  AuthToken: "",
  IsLoggedIn: false
})

const fetchProjectMetadataURL = 'http://localhost:3000/project'

/*********************************************************************
||  The reducer
*********************************************************************/
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "setUserFieldValue":
      return state.set(action.key, action.value)
  }
  return state;
}

/*********************************************************************
||  Allowed Actions
*********************************************************************/

// Sets a field value
export function setUserFieldValue(key, value) {
  return({
    type: "setUserFieldValue",
    key: key,
    value: value
  })
}

// Deletes the container record at the given index
export function login(creds) {
  console.log(creds)
  var request = {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      "x-authentication": "myLittleSecret"
    }
  }
  return dispatch => {
    fetch("http://localhost:3000/login", request)
      .then( response => response.json())
      .then( json => {
        console.log("data is posted", json)
      })
  }
}