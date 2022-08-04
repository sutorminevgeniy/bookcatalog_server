import style from './style.module.css'

import Item from './Item';

const Authors = () => {
  return (
    <div className="author">
      <div className={style.authorList}>
        <Item author="Автор 1" countBooks="11" />
        <Item author="Автор 2" countBooks="12" />
        <Item author="Автор 3" countBooks="13" />
      </div>
    </div>
  );
};

export default Authors;
