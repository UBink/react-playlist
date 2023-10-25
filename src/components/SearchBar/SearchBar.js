import React, {useCallback, useState} from 'react';
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

    return (
        <div className = {styles.container} >
          <input type= 'text' placeholder= 'Search' className={styles.search} onChange={handleTermChange}></input>
          <button type='button' className = {styles.button} onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar