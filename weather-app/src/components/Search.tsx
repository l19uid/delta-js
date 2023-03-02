import {FormEvent, useEffect} from "react";

interface SearchProps {
    setCity: any;
}

function Search(props : SearchProps) {
    const handleOnChanges = (event: FormEvent<HTMLInputElement>) => {
        props.setCity(event.currentTarget.value);
    };

    return (
        <div className="search-container">
            <h2>Search</h2>
            <input type="text" onChange={handleOnChanges} />
        </div>
    );
}

export default Search;