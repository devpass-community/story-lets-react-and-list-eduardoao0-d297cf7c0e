import Container from './components/Container';
import data from './products.json';

const Item = ({ img, title, description, brand, price }) => {
  return (
    <li className='item' data-testid='product-item'>     
      <img src={img} alt=''></img>     
      <h4> {title} </h4>
      <p>  {description} </p>
      <span> {brand} </span>
      <span> {price} </span>
    </li>
  )
}

function App() { 

   return (   
    
    <Container>
      <ul className='list' data-testid='product-list'>           
      {          
          data.filter(data => data.category === "smartphones")
          .map(dataFiltered => 
                (
                  <Item img={dataFiltered.thumbnail} title= {dataFiltered.title} description={dataFiltered.description} brand={dataFiltered.brand} price={dataFiltered.price}/>                  
                )
              )
        }
      </ul>
     </Container> 
   );

 
}

export default App;
