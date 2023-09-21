import './App.css';
import Checkbox from './Components/Checkbox';
import TextInput from './Components/TextInput';
import Header from './Components/Header';
import Category from './Components/Category';
import Items from './Components/Items';
import { useState } from 'react';

const sportingGoods = [
  {id: 1, name: 'Baseball', price: 9.99, stock: 0},
  {id: 2, name: 'Football', price: 49.99, stock: 0},
  {id: 3, name: 'Basketball', price: 29.99, stock: 2},
]

function App() {
  const [textValue, setTextValue] = useState('')
  const [showOnlyStock, setShowOnlyStock] = useState(false)

  const handleClick = () => {
    alert(textValue)
  }
  console.log(showOnlyStock)

  return (
    <div className="App">
      <div className='Container'>
        {textValue}
        <TextInput value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
        <Checkbox checked={showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>
        <button onClick={handleClick}> Submit </button>
        <table>
          <tbody>
            <Header/>
            <Category/>
            <Items items={sportingGoods} query={textValue} showOnlyStock={showOnlyStock}/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
