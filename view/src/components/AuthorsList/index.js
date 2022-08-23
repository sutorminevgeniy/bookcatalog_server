import style from './style.module.css'

import Item from './Item';

const Authors = () => {
  const authorsData = [
    { author: "Автор 1", countBooks: "11", id: "1" },
    { author: "Автор 2", countBooks: "13", id: "2" },
    { author: "Автор 3", countBooks: "8", id: "3" },
  ];

  const authorsElements = authorsData.map( 
    row => <Item author={row.author} countBooks={row.countBooks} id={row.id} key={row.id} />
  );

  return (
    <div className="author">
      <div className={style.authorList}>
        {authorsElements}
      </div>
    </div>
  );
};

export default Authors;
