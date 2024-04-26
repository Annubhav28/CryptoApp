const URL = "https://api.coinlore.net/api/tickers/?start=0&limit=10";




const changebit = document.querySelector(".btc-chng");
const changebnb = document.querySelector(".bnb-chng");
const changeeth = document.querySelector(".eth-chng");
const changeusdt = document.querySelector(".usdt-chng");
const pricebit = document.querySelector(".bitc");
const priceeth = document.querySelector(".eth");
const pricebnb = document.querySelector(".bnb");
const priceusdt = document.querySelector(".usdt");

const getPrice = async () => {
    let promise = await fetch(URL);
    let response = await promise.json();

    const data = response.data


    data.forEach((j) => {

        const price = j.price_usd;
        const market = Number(j.market_cap_usd).toFixed();
        const change = Number(j.percent_change_24h);
        const coin = j.name;
        const symb = j.symbol.toLowerCase();
        const colorchange = change < 0 ? "#ea3943" : "#16c784" || 'white'; 
       






        if (symb === 'btc') {

            changebit.textContent = change + '%';
            changebit.style.color = colorchange;
            pricebit.textContent = '$' + price;
        }

        else if (symb === 'eth' ) {

            changeeth.textContent = change + '%';
            changeeth.style.color = colorchange;
            priceeth.textContent = '$' + j.price_usd;
        }
        else if (symb === 'bnb') {
            changebnb.textContent = change + '%';
            changebnb.style.color = colorchange;
            pricebnb.textContent = '$' + price
        }
        else if (symb === 'usdt') {
            changeusdt.textContent = change + '%';
            changeusdt.style.color = colorchange;
            priceusdt.textContent = '$' + price;
        }

    


        document.querySelector(".coin-info").innerHTML += `
        <div class="coin-row">
            <span class="coin-logo">
                <img src="https://assets.coincap.io/assets/icons/${symb}@2x.png" height="44" width="44" alt="">
                ${coin}
            </span>
            <span class="coin-price">$${price}</span>
            <span class="coin-change" style="color: ${colorchange};">${change}</span>
            
        </div>`;
    


    });
}


getPrice();

$(function(){
    if(screen.width<767){
        $("nav a").click(function(e){
            $(".navbar").slideup();
        })


        $(".menu").click(function(){
            $(".navbar").slideToggle();
        });
    }


})

const goUp=document.querySelector(".top");
goUp.addEventListener("click",()=>{
    window.scrollTo(0,0)
})
