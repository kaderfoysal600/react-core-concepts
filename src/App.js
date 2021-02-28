import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

const nayoks = ['jasim','riaz', 'shakib','salman']
const products = [{name:'photoShop',price:'$99.99'},
{name:'Illustator',price:'$69.99'},
{name:'PDF',price:'$9.99'}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
          {
            products.map(pd =><Products product={pd}></Products>)
          }

        <Person name = 'kader'></Person>
        <Person name = 'foysal'></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Products(props) {
const productStyle = {
  border : '1px solid gray',
  borderRadius : '5px',
  backgroundColor : 'red',
  height: '200px',
  weight: '200px',
  float: 'left'
}


const {name,price} = props.product;
  return(
      <div style = {productStyle}>
        <h3>{name}</h3>
        <h5>{price}</h5>
        <button>Buy Now</button>
      </div>
    
  )
  
}


function Person(props) {
  return (
    <div style = {{border: '2px solid white', width: '400px'}}>
    <h3>My name : {props.name} </h3>
    <p>profession</p>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count+1)
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count-1)}>decrease</button>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
  
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>

      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
        
      </ul>
    </div>
  )
}




export default App;
