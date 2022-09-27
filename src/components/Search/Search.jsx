import { SearchWrapper } from "./SearchStyle"


const Search = ({handleChange, handleSubmit, form}) => {

  return (
    <SearchWrapper onSubmit={handleSubmit}>
        <h3 style={{color: '#e7ebc5'}}>Busca el pokemon</h3>
        <input type="text" onChange={handleChange} value={form} />
        <input type="submit" value='Buscar'/>
    </SearchWrapper>
  )
}

export default Search