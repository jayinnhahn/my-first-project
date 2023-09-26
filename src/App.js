import './App.css';
import Checkbox from './Components/Checkbox';
import TextInput from './Components/TextInput';
import Header from './Components/Header';
import Category from './Components/Category';
import Items from './Components/Items';
import { useState } from 'react';

function App() {
  const [sportingGoods, setSportingGoods] = useState([
    {id: 1, name: 'Baseball', price: 9.99, stock: 3},
    {id: 2, name: 'Football', price: 49.99, stock: 0},
    {id: 3, name: 'Basketball', price: 29.99, stock: 2},
  ])
  const [textValue, setTextValue] = useState('')
  const [form, setForm] = useState({
    nameItem: '',
    priceItem: 0,
    stockItem: 0,
  })

  const [showOnlyStock, setShowOnlyStock] = useState(false)

  const handleClick = () => {
    alert(textValue)
  }

  const handleForm = (e) => setForm({...form, [e.target.id]: e.target.value})

  const Submit = (e) =>{
    e.preventDefault()
    setSportingGoods([...sportingGoods, {id:sportingGoods.length+1, name:form.nameItem, price:form.priceItem, stock:form.stockItem}])
  }

  return (
    <div className="App">
      <div className='Container'>
        <form style={{border: 2, borderStyle: 'solid', padding: 10, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20}}>
          <div style={{display: 'flex', flexDirection: 'column'}}> 
            <label htmlFor='nameItem'> Name:</label>
            <input placeholder='Basketball' id="nameItem" type='text' value={form.nameItem} onChange={handleForm}/>
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}>  
            <label htmlFor='priceItem'> Price:</label>
            <input id="priceItem" type='number' value={form.priceItem} onChange={handleForm}/>
          </div>

          <div style={{display: 'flex', flexDirection: 'column'}}> 
            <label htmlFor='stockItem'> Stock:</label>
            <input id="stockItem" type='number' value={form.stockItem} onChange={handleForm}/>
          </div>
          <button onClick={Submit}>Submit</button>
        </form>
        
        <div style={{border: 2, borderStyle: 'solid', padding: 10}}> 
          {textValue}
          <TextInput value={textValue} onChange={(e) => setTextValue(e.target.value)}/>
          <Checkbox checked={showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>
          <button style={{width: '100%'}} onClick={handleClick}> Submit </button>
          <table style={{border: 2, borderColor: 'black'}}>
            <tbody>
              <Header/>
              <Category/>
              <Items items={sportingGoods} query={textValue} showOnlyStock={showOnlyStock}/>
              <tr> 
                <td colSpan='2' style={{textAlign:'right'}}> Total </td>
                <td style={{display: 'flex', justifyContent: 'center'}}>{sportingGoods.reduce((total, sportingGoods) => total + Number(sportingGoods.stock), 0)}</td>
              </tr>  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
