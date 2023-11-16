import { useEffect } from "react";
import useAuth from "../context/useAuth";
import { Link , useNavigate} from 'react-router-dom';


const Cart = ()  => {
    const { cart, setCart, cartCount, setCartCount } = useAuth();
    console.log('cart', cart)
    const navigate = useNavigate();


    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user || !user.id){
        console.log('user not found in local storage')
      }
      let customer_id = user.id;

      const localCart = JSON.parse(localStorage.getItem('cart'));

      if (localCart && localCart.length > 0) {
        setCart(localCart);
        return;
      }

      if (customer_id > 0){
        console.log(customer_id)

        const item = fetch('http://localhost:7070/shop/v1/orderWithCustomerId', {
          method: 'POST',
          headers: {
            "content-type": "application/json "
          }, 
          body: JSON.stringify({customer_id})
        })

        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setCart(data);
     
        })
        .catch(error => {
          console.error('Error fetching data:', error);
            
        });
      }
      console.log(cart)
    
    }, [])


    const removeItem = async (orderId) =>{
      let confirmed = window.confirm('Are you sure you want to delete item?')
      if(confirmed){
        try {
          const result = await fetch (`http://localhost:7070/v1/deleteAnOrder/${orderId}`, {
            method: 'DELETE'
           })

           if (!result.ok) {
            console.log('product does not exist')
                 }

                 const updatedCart = cart.filter(item => item.product_id !== orderId)
                 console.log('updated cart', updatedCart)
                 setCart(updatedCart)
                 localStorage.setItem('cart', JSON.stringify(updatedCart))

                 alert('item deleted successfully')
          
        } catch (error) {
          alert('item not deleted')
          
        }
        
      } 

    }
const filteredCart = cart.slice(2);
console.log(filteredCart)


  return (
    <>
      <div className="container bg-white">
       <Link to = '/home'>
        <button className="w-44"> Back to Home</button></Link>
        <h1 className="p-8 ">My Cart</h1>

{filteredCart?.map(item => (
 
  <div key={item.id} className="card lg:card-side bg-base-100 shadow-xl">
    <figure><img src={item.products.image} alt="img" className="h-40"/></figure>
    <div className="card-body">
    <h2 className="card-title">{item.products.name}</h2>
      <p> ${item.products.price}</p>
      <div className="card-actions justify-end text-red-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={() => removeItem(item.product_id)}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

       
      </div>
    </div>
  </div>
))}

      </div>
    </>
  )
}

export default Cart