import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Coin from './Coin';
//styles
import './App.css';

function App() {

    const [coins,
        setCoins] = useState([]);
    const [search,
        setSearch] = useState('')

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_' +
            'desc&per_page=250&page=1&sparkline=false'

    useEffect(() => {

        axios
            .get(url)
            .then((response) => {

                setCoins(response.data)
                console.log(response.data);

            })
            .catch((error) => {
                console.log("error", error);
            });

    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="coin-app">
            <div className="coin-search">
                <h1 className='coin-text'>CoinGecko API</h1>
                <form>
                    <input
                        type="text"
                        placeholder='Search..'
                        className='coin-input'
                        onChange={handleChange}/>
                </form>
            </div>
            
            {filteredCoins.map(coin => {
                return (<Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    volume={coin.total_volume}
                    priceChange={coin.price_change_percentage_24h}
                    marketCap={coin.market_cap}/>)
            })}
        </div>
    );
}

export default App;
