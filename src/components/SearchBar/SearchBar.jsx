export default function SearchBar({submit}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.elements.search.value;
         submit(search);
    form.reset();
    }


    return (
        
             <form onSubmit={handleSubmit} >
          <input
            
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search the best movies"
    name='search'
    />
                <button type="submit">Search</button>
          
  </form>

    )
}