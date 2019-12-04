const INITIAL_STATE = {
  phone: ''
};

function loginReducer(state = INITIAL_STATE, action) {
  if (action.type === 'CHANGE_INPUT_NUMBER') {
    return { ...state, phone: action.value }
  }
  
  return state;
}


export default loginReducer;
