const initialState = {
    signInStatus: false
};

const loginReducer = (loginState = initialState, action) => {
    if(action.type === 'UPDATE_SIGNIN_STATUS')
        return {...loginState, signInStatus: action.signInStatus}
    return loginState;
}

export default loginReducer;