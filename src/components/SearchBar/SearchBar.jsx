export default function SearchBar({value, onChange}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.elements.search.value;
         onChange(search);
    form.reset();
    }


    return (
        
             <form  onSubmit={handleSubmit}>
          <input
           name="search" 
      type="text"
      autoComplete="off"
      autoFocus
     placeholder="Search the best movies"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                
    />
                <button type="submit">Search</button>
          
  </form>

    )
}