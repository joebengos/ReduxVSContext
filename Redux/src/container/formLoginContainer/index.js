import React from 'react';
import { Form, Input, SubmitButton } from '../../components/form';
import {phoneNumberHandler} from '../../store/actions/login.actions';
import { connect } from 'react-redux';


const FormLogin = (props) => {
  return(
    <Form>
      <div className="wrapper">
        <div>
          <Input placeholder="00 0000-0000" value={props.phone} onChange={props.phoneNumberHandler}/>
        </div>
        <div>
          <SubmitButton> Enviar </SubmitButton>
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    phone: state.loginReducer.phone
  };
}


export default connect(mapStateToProps, { phoneNumberHandler })(FormLogin);
