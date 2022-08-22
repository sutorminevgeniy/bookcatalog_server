import style from './style.module.css';

const Item = (props) => {
    return (
        <div className={style.reviewItem}>
            <div className={style.user}>{props.user}</div>
            <div className={style.message}>{props.message}</div>
            <div className={style.rate}>{props.rate}</div>
        </div>
    );
};

export default Item;