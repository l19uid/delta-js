import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {EmojiType} from "./EmojiType";
import {filterEmoji} from "./filterEmojis";

interface  SearchInputProps {
    setFilteredEmoji: Dispatch<SetStateAction<EmojiType[]>>;
}
export function Search({setFilteredEmoji}: SearchInputProps) {
    const handleOnChanges = (event: FormEvent<HTMLInputElement>) => {
        setFilteredEmoji(filterEmoji(event.currentTarget.value));
    };

    return (
        <div className="search-container">
            <h2>Search</h2>
            <input type="text" onChange={handleOnChanges} />
        </div>
    );
}