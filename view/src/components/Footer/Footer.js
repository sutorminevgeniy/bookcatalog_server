import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default Footer;
