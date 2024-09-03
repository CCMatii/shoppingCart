import { useState } from 'react';

export default function Filter() {
  const [minPrice, setMinPrice] = useState(0);

  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <section className="filters">
      <div>
        <label htmlfor="price">Price:</label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handlePriceChange}
        />
        <span>${minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select id="category">
          <option value="all">All</option>
        </select>
          
      </div>
    </section>
  );
}
