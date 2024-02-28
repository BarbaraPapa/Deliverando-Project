import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../context/context";
import "../style/menuPage.css";

export default function MenuPage() {
  const { cart, setCart } = useContext(MyContext);
  const { state } = useLocation();
  console.log(state);

  // create a new array that includes all the elements from the
  // previous cart array and adds the new dish
  function addToCart(dish) {
    setCart((prevCart) => [...prevCart, dish]);
  }

  return (
    <div className="menu">
      {state && (
        <div>
          <h1>{state.restaurantName}</h1>
          <div className="info">
            <p>Minimum order €10 </p>
            <p>Delivery time: 20-40 min.</p>
            <p>Delivery charge €2.50 </p>
          </div>

          {state.dishes.map((dish) => {
            return (
              <div className="card-container" key={dish._id}>

                <section>

                  <img src={dish.image_url} alt="restaurant image" />

                  <div className="ingredients">
                    <h2>{dish.dishName} <span>{dish.price}€</span> </h2>
                    <p>{dish.ingredients.join(" - ")}</p>    
                  </div>

                </section>

                <button onClick={() => addToCart(dish)}>Add to Cart</button>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
