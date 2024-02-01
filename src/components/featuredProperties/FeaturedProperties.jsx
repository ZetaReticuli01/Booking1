import React from 'react';
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" />
        <span className="fpName">Hotel Name 1</span>
        <span className="fpCity">City 1</span>
        <span className="fpPrice">$100</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" />
        <span className="fpName">Hotel Name 2</span>
        <span className="fpCity">City 2</span>
        <span className="fpPrice">$120</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Great</span>
        </div>
      </div>

      {/* Add more fpItem elements as needed */}
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" alt="" />
        <span className="fpName">Hotel Name 2</span>
        <span className="fpCity">City 2</span>
        <span className="fpPrice">$120</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fpItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=" alt="" />
        <span className="fpName">Hotel Name 2</span>
        <span className="fpCity">City 2</span>
        <span className="fpPrice">$120</span>
        <div className="fpRating">
          <button>8.5</button>
          <span>Great</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
