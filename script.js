document.getElementById("button").addEventListener("click", function(){
  let buyingPrice = document.getElementById("buy").value;
  let desiredPercentage = document.getElementById('percent').value;

  if(buyingPrice == " " || desiredPercentage == " "){
    alert("Please fill all the fields marked(*)")
  }else{

    buyingPrice = Number(buyingPrice)
    desiredPercentage = Number(desiredPercentage)

    let Y = (desiredPercentage * buyingPrice) / 100;
    let sellingPrice = buyingPrice + Y

     document.getElementById("sell").innerHTML = "To Make a profit of " + desiredPercentage+ "%"+ " you are to sell at "+ sellingPrice ;
  }
  
});

document.getElementById("buttonP").addEventListener("click", function(){
  let buyingPrice = document.getElementById("buyP").value;
  let sellingPrice = document.getElementById('sellP').value;

  if(buyingPrice == " " || sellingPrice == " "){
    alert("Please fill all the fields marked(*)")
  }else{

    buyingPrice = Number(buyingPrice)
    sellingPrice = Number(sellingPrice)

    let Y = (sellingPrice - buyingPrice) * 100;
    let percentageProfit = Y / buyingPrice

     document.getElementById("percentageP").innerHTML = "When you sell at " + sellingPrice+ "%"+ " you will make a profit of "+ percentageProfit + "%" ;
  }
  
});