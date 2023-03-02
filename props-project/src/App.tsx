import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import Body from './components/Body'
import './App.css'

function App() {
  const [items,SetItems] = useState([
      {name: 'Item 1', clicked:false, id: 0,description: "Piss yonky mean when im sippin drank an ion wanna piss out tha drank high so it be getting me yonky Piss yonky mean when im sippin drank an ion wanna piss out tha drank high so it be getting me yonky Piss yonky mean when im sippin drank an ion wanna piss out tha drank high so it be getting me yonky"},
      {name: 'Item 2', clicked:false, id: 1,description: "AWDADWDWDAW"},
      {name: 'Item 3', clicked:false, id: 2,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nisl nisl aliquam nisl, eget aliquam"}
        ]);

    useEffect(() => {
        console.log("Item clicked");
    }, [items]);

 function LogItem (number: number) {
     const newItems = [...items];
     newItems[number].clicked = !newItems[number].clicked;
     SetItems(newItems);
     console.log(items[number].name);
  }

  return (
    <div className="App">
        <Body items={items} LogItem={LogItem}/>
    </div>
  )
}

export default App
