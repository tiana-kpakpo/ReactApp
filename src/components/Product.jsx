import React, { useState, useEffect} from 'react'
import Slide1 from '../assets/cart.jpg'
import Slide2 from '../assets/menf.jpg'
import Slide3 from '../assets/sofa.webp'
import Slide4 from '../assets/womenf.jpg'


function Product() {
  const [products, setProducts] = useState(null)
console.log(products)
  useEffect( () => {
    fetch('http://localhost:7070/product/v1/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setProducts(data);
 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    
    });
  }, [])
  return (
    <>
   
     <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img src= {Slide1} className="w-full h-96 object-cover" />
  </div> 
  <div id="item2" className="carousel-item w-full h-96 object-cover">
    <img src={Slide3}className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full h-96 object-cover">
    <img src={Slide2} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full h-96 object-cover">
    <img src={Slide4} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div> 

 <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto max-w-screen-xl pt-8 '>

    {products?.map(item => (
      // <div key={item.id}>
      //   <img src= {item.image} alt="" />
      //   {item.name}
      //   {item.price}
      //   {item.description}
      // </div>

      <div key={item.id} className="card bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" className='w-56 h-56' /></figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p> ${item.price}</p>
    <p> {item.description}</p>
    <div className="card-actions justify-end">
    <button className="button w-32 bg-green-600 text-white hover:bg-slate hover:text-green-600">Buy Now</button>

    </div>
  </div>
</div>
    ))}
</div> 


    </>
  )
}

export default Product