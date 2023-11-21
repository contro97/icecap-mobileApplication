import axios from 'axios'

const API_KEY = 'AIzaSyD791zOoQOHESZw3hknHfeUK-Ymgt1ClF4'

async function createUser(email, password) { // returns promise object when finished processing
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, 
    {
        email: email,
        password: password,
        returnSecureToken: true
    }
    );
}

export default createUser;