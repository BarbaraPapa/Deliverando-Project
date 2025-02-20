import "../style/productsPageStyle.css";
import RestaurantCard from "./RestaurantCard";

export default function Products() {
  return (
    <div className="total">
      {/* Side Options */}
      <div className="Side-Panel">
        <div className="Side-Option">
          <p>Open Now</p>
          {/* First Slider */}
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="Side-Option">
          <p>Free Delivery</p>
          {/* Second Slider */}
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      {/* Searchbox Part */}
      <div className="col-2">

        {/* Restaurants */}
        <RestaurantCard />
      </div>
    </div>
  );
}
