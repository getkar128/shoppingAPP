import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import useDebounce from "../../hooks/useDebounce"


const SearchBar = () => {

    const [ searchValue, setSearchValue ] = useState('')

    const debouncedValue = useDebounce(searchValue)

    useEffect(() => {
        // todo api call for getting sercah results
        console.log(debouncedValue)
    }, [debouncedValue])

    return (
        <div className="relative">
            <input 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-dark-2 p-2 w-full rounded-lg pl-10 focus-within:outline-0"
                id=""
                type="text"
                placeholder="Search"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 inset-y-0 my-auto" />
        </div>
    )
}

export default SearchBar