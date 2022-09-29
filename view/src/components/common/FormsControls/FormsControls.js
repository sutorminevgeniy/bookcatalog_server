import style from './FormsControls.module.css';

export const InputField = ({
        input,
        label,
        placeholder,
        type,
        meta: { touched, error, warning }
    }) => (
        <div className={style.field}>
            <label>{label}</label>
            <div className={error && style.error}>
                <input {...input} placeholder={placeholder} type={type} />
                {touched &&
                ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )