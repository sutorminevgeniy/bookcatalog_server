import { Field, reduxForm } from 'redux-form'

const LoginForm = (prpos) => {
    return (
        <form onSubmit={prpos.handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder="Login" />
            </div>
            <div>
                <Field name="password" component="input" type="text" placeholder="Password" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" /> remember me
            </div>
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