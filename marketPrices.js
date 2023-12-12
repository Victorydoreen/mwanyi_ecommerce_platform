import React, { useState, useEffect } from 'react';

const MarketPrices = () => {
  const [coffeePrices, setCoffeePrices] = useState([]);
  const [sortedPrices, setSortedPrices] = useState([]);

  useEffect(() => {
    const dummyCoffeePrices = [
      { market: 'Kampala', price: 5000 },
      { market: 'Jinja', price: 4500 },
      { market: 'Mbale', price: 4000 },
      { market: 'Iganga', price: 4000 },
      { market: 'Hoima', price: 4500 },
      { market: 'Masaka', price: 5000 },
      { market: 'Bundibugyo', price: 4000 },
    ];

    setCoffeePrices(dummyCoffeePrices);
    setSortedPrices(dummyCoffeePrices);
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...sortedPrices].sort((a, b) => a.price - b.price);
    setSortedPrices(sorted);
  };

  return (
    <div>
      <h2>Coffee Prices in Uganda</h2>
      <div>
        <h4>Production and Export</h4>
        <p>Uganda is known for producing both Arabica and Robusta coffee varieties, with Robusta being the predominant type.
Coffee is a major export commodity for Uganda, and it contributes significantly to the country's foreign exchange earnings.</p>
      </div>
      <div>
        <h4>Regions and Varieties:</h4>
        <p>Coffee is grown in various regions of Uganda, each with its unique climate and soil conditions. Some notable coffee-producing regions include the Bugisu region on the slopes of Mount Elgon and the Rwenzori Mountain region.
Robusta coffee is mainly produced in low-altitude regions, while Arabica is grown at higher elevations.</p>
      </div>
      <div>
        <h4>Harvest Season:</h4>
        <p>The coffee harvest season in Uganda varies depending on the region and the type of coffee. Generally, Uganda experiences two main coffee harvest seasons the main crop and the fly crop.</p>
      </div>

      <table style={{ borderCollapse: 'collapse', width: '60%' }}>
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Market</th>
            <th style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>Price per Kg (UGX)</th>
          </tr>
        </thead>
        <tbody>
          {sortedPrices.map((price, index) => (
            <tr key={index} style={{ border: '1px solid #dddddd' }}>
              <td style={{ padding: '8px' }}>{price.market}</td>
              <td style={{ padding: '8px' }}>{price.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketPrices;
