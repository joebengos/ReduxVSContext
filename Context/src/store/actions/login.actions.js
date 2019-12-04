import { CHANGE_INPUT_NUMBER } from './actionsTypes';


export const phoneNumberHandler = (phone) => {
  return {
    type: CHANGE_INPUT_NUMBER,
    phone,
  };
};
