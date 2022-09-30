import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Navigate} from 'react-router-dom';

import { InputField } from '../common/FormsControls/FormsControls';
import { required, maxLength30 } from '../../utils/validators/validators';
import { login } from '../../redux//auth-reducer';

const LoginForm = (prpos) => {
    return (
        <form onSubmit={prpos.handleSubmit}>
            <Field name="email"
                component={InputField}
                type="text"
                validate={[required, maxLength30]}
                placeholder="Login" />
            <Field name="password"
                component={InputField}
                type="text"
                placeholder="Password" />
            <Field name="rememberMe"
                component={InputField}
                type="checkbox"
                label="remember me" />
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Navigate to={'/users'} replace={true} />
    }
    
    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        
    );
};


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, { login })(Login);