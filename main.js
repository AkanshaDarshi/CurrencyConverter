console.log("main working");


const populate = async(value, currency)=>{
    let myStr = ""
    url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_q36FJif40jpcNIdYE1e863uDH0fKTCSDo8Hsp62z&base_currency="+currency;
    let response = await fetch(url);
    let rJson = await response.json();
    console.log(rJson);
    for(let key of Object.keys(rJson["data"])){
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${Math.round(rJson["data"][key]["value"])*value}</td>
                </tr>`
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}
const btn = document.querySelector(".btn");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("button is clicked");
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});

