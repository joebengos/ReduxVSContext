import React, { useState, useEffect } from 'react';
import { Form, Input, SubmitButton } from '../../components/form';
import ConnectTo from '../../store/config/connect';
import { phoneNumberHandler } from '../../store/actions/login.actions';

const FormLogin = props => {
  
  const [phone, setPhone] = useState(props.phone);

  useEffect (() => {
    props.dispatch(phoneNumberHandler(phone));
  }, [phone]);

  return(
    <Form>
      <div className="wrapper">
        <div>
          <Input 
            placeholder="00 0000-0000"
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </div>
        <div>
          <SubmitButton> Enviar </SubmitButton>
        </div>
      </div>
    </Form>
  );
};

const mapStateToPorps = ({ phone }, props) => {
  return {
    phone,
    ...props,
  };
};

//export default FormLogin;

export default ConnectTo (mapStateToPorps)(FormLogin)
