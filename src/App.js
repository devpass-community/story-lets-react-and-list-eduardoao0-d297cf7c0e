import Container from './components/Container';
import data from './products.json';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      { /* TODO */ }
      <img src="thumbnail here"></img>
      <h4> {data[0].id}  </h4>
      <p>  1 description here </p>
      <span> brand here </span>
      <span> price here </span>
    </li>
  )
}

function App() {
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        { /* TODO */ }
        <Item />
      </ul>
    </Container>
  );
}

export default App;
