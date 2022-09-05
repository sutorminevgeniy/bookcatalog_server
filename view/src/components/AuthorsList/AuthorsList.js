import style from './AuthorsList.module.css'

import AuthorsListItem from './AuthorsListItem';

const AuthorsList = (props) => {
  const authorsElements = props.authors.map( 
    row => <AuthorsListItem author={row.author} countBooks={row.countBooks} id={row.id} key={row.id} />
  );

  return (
    <div className="author">
      <div className={style.authorList}>
        {authorsElements}
      </div>
    </div>
  );
};

export default AuthorsList;
