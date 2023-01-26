import emojiList from "./assets/emojiList.json";

export function List()
{
    return (
        <div className="list-container"><h2>List</h2>
                {emojiList.map((emoji) => (
                <ul key={emoji.title}>
                <span>{emoji.symbol}</span>
                <span>{emoji.title}</span>
                </ul>
                ))}
        </div>
    )
}