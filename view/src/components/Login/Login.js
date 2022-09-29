import { Field, reduxForm } from 'redux-form'

import { InputField } from '../common/FormsControls/FormsControls';
import { required, maxLength15 } from '../../utils/validators/validators';

const LoginForm = (prpos) => {
    return (
        <form onSubmit={prpos.handleSubmit}>
            <Field name="login"
                component={InputField}
                type="text"
                validate={[required, maxLength15]}
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

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    
    return (
        <div>
            <h1>Логин</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
        
    );
};

export default Login;