export const loginStore = {
  phone: ''
};

function loginReducer(state = loginStore, action) {
  if (action.type === 'CHANGE_INPUT_NUMBER') {
    return { ...state, phone: action.phone }
  }

  return state;
}


export default loginReducer;
