import {EmojiType} from "./EmojiType";
import {useEffect} from "react";
import ClipboardJS from "clipboard";

interface EmojiResultsProps {
    emojiData: EmojiType[];
}

export function EmojiResults({ emojiData }: EmojiResultsProps) {
    useEffect(() => {
        const clipboard = new ClipboardJS(".copy-to-clipboard");
        return () => {
            clipboard.destroy();
        }
    },[])

    return (
        <div className="emoji-results">
            {emojiData.map((emoji) => (
                <ul key={emoji.title}>
                    <span>{emoji.symbol}</span>
                    <span>{emoji.title}</span>
                </ul>
            ))}
        </div>
    );
}