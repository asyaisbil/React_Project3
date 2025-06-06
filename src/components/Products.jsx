import { useState, useEffect } from 'react';
import axios from 'axios'; 

import ProductList from '../components/ProductList';

export default function Products(props) {
  /* ADIM 5: App component'inden gelen propu burada destruct edelim. aynı isimler kullanalım */

  const {category} = props;

  const [products, setProducts] = useState([]);

  /* ADIM 6: category prop'unun değişmesine bağlı olarak useEffect kullanalım 
  ve kategorideki ürünleri getiren bir request yazalım. 
  İlgili Kategoriye ait ürünleri almak için 'https://fakestoreapi.com/products/category/jewellery' 
  şeklinde endpoint'e istek atalım ve response'daki data'yı products state'ine ekleyelim.
  */

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products/category/jewellery")
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, [category])

  return (
    <div className="main-area">
       <h2>{category.toUpperCase()}</h2> 
      <div className="products-container">
        <ProductList products={products}/>
      </div>
    </div>
  );
}
