//styles
import './Coin.css'

const Coin = ({name, image, symbol, price, volume, priceChange, marketCap}) => {
    return (
        <div className="coin-container">
            <div className="coin-row">

                <div className="coin">
                    <img src={image} alt="currency-img"/>
                    <h1>{name}</h1>
                    <p className="coin-symbol"> [{symbol.toUpperCase()}]</p>
                </div>

                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString("pl-PL")}</p>
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='market-cap'>${marketCap.toLocaleString("pl-PL")}</p>
                </div>

            </div>
        </div>
    );
}

export default Coin;