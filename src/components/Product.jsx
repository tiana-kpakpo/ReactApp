import React, { useState, useEffect} from 'react'
import Slide1 from '../assets/cart.jpg'
import Slide2 from '../assets/menf.jpg'
import Slide3 from '../assets/sofa.webp'
import Slide4 from '../assets/womenf.jpg'
import useAuth from '../context/useAuth'
import { useNavigate } from 'react-router-dom';



function Product() {
  const [products, setProducts] = useState(null)
  // const addToCart = useAuth();
  const { setCartCount, cart } = useAuth();
 
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

  
  const cartBtn = async (product_id) => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log(user)

    // const navigate = useNavigate();
  
    if (!user || !user.id) { 
      alert('Login to add to cart');
      // navigate('/login');
        console.error("User not found in localStorage");
    }

    let customer_id = user.id;


    const order = await fetch('http://localhost:7070/shop/v1/order', {
        method: 'POST',
        headers: {
            "content-type": "application/json "
        },
        body: JSON.stringify({
            product_id: Number(product_id),
            customer_id: Number(customer_id)
        })
    })

    try {
      if (order.status === 409) {
        let res = await order.json();
        alert('Item has already been added to cart')
        console.error('Product has already been added to cart', res);
        return;
      }
  
      if (order.status === 200 || order.status === 201) {
        let res = await order.json();
        console.log(res);
  
        alert("Item successfully added to cart");
        handleAddToCart();
      }
    } catch (error) {
      console.error('Error processing the response:', error);
    }

   
};

// console.log(currentUser);
console.log(cart);

const handleAddToCart = async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user || !user.id) {
      console.error("User not found in localStorage");
      return;
  }

  const res = await fetch('http://localhost:7070/shop/v1/orders-with-customerId', {
      method: 'POST',
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify({
          customer_id: user.id
      })

  });

  if (res.status == 200) {
      let orders = await res.json();

      const { order } = orders;
      const count = order.length;

      setCartCount(count);
  }
}

useEffect(() => {
  handleAddToCart();
});


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

<h1></h1>

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
    <button className="button w-32 bg-green-600 text-white hover:bg-slate hover:text-green-600" id={item.id} onClick={() => cartBtn(item.id)} >Buy Now</button>

    </div>
  </div>
</div>
    ))}
</div> 


    </>
  )
}

export default Product