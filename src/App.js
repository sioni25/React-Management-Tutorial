import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  "image": 'https://placeimg.com/32/32/any',
  'name': '홍길동',
  'age': '23',
},
{
  'id': 2,
  "image": 'https://placeimg.com/32/32/any',
  'name': '고객2',
  'age': '55',
},
{
  'id': 3,
  "image": 'https://placeimg.com/32/32/any',
  'name': '고객3',
  'age': '255',
},
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
              <Customer 
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                age={c.age}
            />
          );
        })
      }
     
    
    </div>
  );
}

export default App;
