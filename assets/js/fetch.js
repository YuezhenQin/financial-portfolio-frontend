const fetchData = async () => {
    let stocksDiv = document.querySelector('.stockList'); //get div.stockList from DOM
    stocksDiv.innerText = 'Loading';

    const data = await fetch("http://localhost:8081/oneinvest/stockList");
    const jsonStocks = await data.json();
    stocksDiv.innerText = 'fetched';

    stocksDiv.innerHTML = `<p>${jsonStocks['stockList']}</p>`
}
fetchData()



