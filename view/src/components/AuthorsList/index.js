import style from './style.module.css'

import Item from './Item';

const Authors = (props) => {
  const authorsElements = props.state.authors.map( 
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
