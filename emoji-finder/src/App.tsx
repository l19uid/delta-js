import React, { useState } from 'react'
import { Search } from "./Search";
import { Header } from "./Header";
import { filterEmoji } from "./filterEmojis";
import {EmojiType} from "./EmojiType";
import {EmojiResults} from "./EmojiResults";
import './App.css'

function App() {
    const[filteredEmoji, setFilteredEmoji] = useState<EmojiType[]>(
        filterEmoji("")
    );

  return (
    <div className="App">
        <Header />
        <Search setFilteredEmoji={setFilteredEmoji}/>
        <EmojiResults emojiData={filteredEmoji} />
    </div>
  )
}

export default App
