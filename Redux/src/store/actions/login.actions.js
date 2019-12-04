import { CHANGE_INPUT_NUMBER } from './actionsTypes';

export const phoneNumberHandler = (event) => {
  return {
    type: CHANGE_INPUT_NUMBER,
    value: event.target.value,
  };
};
