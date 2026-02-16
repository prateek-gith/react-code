
function Input({oDisplay, label,amount, onAmountChange, OnCurrenyChange, currencyOpthions=[], selectCurrency="usd"}) {

  return (
    <div className="container">
        <div className="detail">
            {label}
        </div>
        <div className="inputcurrency">
            <label htmlFor="currency-input">Input Currency : </label>
            <input type="number" id="currency-input" placeholder="Exp. 200.00" value={amount} onChange={(e)=> onAmountChange &&  onAmountChange(Number(e.target.value))}/>
        </div>
        <div className="selectcurrency">
            <label htmlFor="select-currency">Select Currency : </label>
            <select name="select-cur" id="select-cur" value={selectCurrency} onChange={(e)=> OnCurrenyChange && OnCurrenyChange(e.target.value)}>
                {currencyOpthions.map((curr)=>(
                    <option value={curr} key={curr}>{curr}</option>
                ))}
            </select>
        </div>
        <div className="other" style={{display: oDisplay}}>
            Converter
        </div>
    </div>
  )
}

export default Input;
