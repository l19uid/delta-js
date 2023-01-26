import {EmojiType} from "./EmojiType";
import emojiList from "./assets/emojiList.json";

const MAX_RESULTS = 20;

export const filterEmoji = (searchText:string): EmojiType[] => {
    return emojiList
        .filter((emoji) => {
            if(emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (emoji.keywords.includes(searchText.toLowerCase())){
                return true;
            }
            return false;
        })
    .slice(0, MAX_RESULTS);
}