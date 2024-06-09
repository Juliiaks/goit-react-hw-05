import { useState } from "react";
import css from "./SearchBar.module.css"
import { FaRegHeart } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

export default function SearchBar({ value, onChange }) {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const search = form.elements.search.value;
    //      onChange(search);
    // form.reset();
    // }

     const [searchValue, setSearchValue] = useState(value);

  const handleSubmit = (event) => {
      event.preventDefault();
        const form = event.target;
      onChange(searchValue);
      form.reset()
  }

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }



    return (
        <>
        <p className={css.text}>Find your favourite movies here <FaRegHeart /></p>
             <form  onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.search}
           name="search" 
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search the best movies..."
                value={searchValue}
                onChange={handleInputChange}
                
    />
                <button className={css.btn} type="submit"><BsSearch /></button>
          
  </form>
</>
    )
}