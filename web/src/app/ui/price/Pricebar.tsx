import { useEffect, useState } from 'react';

// Générer des prix et pourcentages aléatoires pour les cryptomonnaies
const generateCryptoData = () => {
  const cryptos = ['BTC', 'ETH', 'XRP', 'LTC', 'BCH', 'ADA', 'DOT', 'LINK'];
  return cryptos.map(crypto => ({
    name: crypto,
    price: (Math.random() * 150 + 0.02).toFixed(2),
    change: (Math.random() * 50 - 25).toFixed(2)
  }));
};

export default function Pricebar() {
  const [cryptoData, setCryptoData] = useState(generateCryptoData());

  return (
    <div className="relative w-full overflow-hidden bg-bckgd">
      <div className="slide-track flex whitespace-nowrap">
        {cryptoData.concat(cryptoData).map((crypto, index) => (
          <p key={index} className="inline-block px-8 text-white text-sm leading-8">
            {crypto.name} : {crypto.price} USD | 
            <span className={crypto.change.startsWith('-') ? 'text-fear' : 'text-gread'}>
              {crypto.change}%
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
