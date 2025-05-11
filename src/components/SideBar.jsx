import { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import axios from 'axios';

export default function SideBar(props) {

  const {category, handleCatChange} = props;

  const [categories, setCategories] = useState([]);

  /* ADIM 2: kategorileri buradan alıp CategoryList'e yollayabilirsin: https://fakestoreapi.com/products/categories */

    useEffect(() => {
        axios
        .get("https://fakestoreapi.com/products/categories")
        .then(response => setCategories(response.data))
        .catch(error => console.log(error))
    }, [])


  return (
    <>
      <div className="side-container">
        <h2>Categories</h2>
        <CategoryList categories = {categories}/>
      </div>
    </>
  );
}
