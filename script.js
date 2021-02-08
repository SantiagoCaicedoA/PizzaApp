function showDate() {
    var str = "";
    var now = new Date();
    str = "Current Time: " + now.toDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById("time").innerHTML = str;
}
setInterval(showDate, 1000);

function getCustomerName() {
    var customerName = document.getElementById('name-field').value;
    document.getElementById('customerName').innerHTML = customerName;
}

function getCustomerNumber() {
    var customerNumber = document.getElementById('number-field').value;
    document.getElementById('customerNumber').innerHTML = customerNumber;
}
function getCustomerDate() {
    var customerDate = document.getElementById('OrderDateAndTime').value;
    document.getElementById('customerDate').innerHTML = customerDate;
}

function getBill() {
    
    var qtyPizza1 = document.getElementById('MargheritaQty').value;
    var namePizza1 = "Marguerita";
    var pricePizza1 = document.getElementById('Margherita').value;
    var totalPizza1 = qtyPizza1 * pricePizza1;

    var qtyPizza2 = document.getElementById('QuattroQty').value;
    var namePizza2 = " Quattro Formaggi";
    var pricePizza2 = document.getElementById('Quattro').value;
    var totalPizza2 = qtyPizza2 * pricePizza2;

    var qtyPizza3 = document.getElementById('CapricciossaQty').value;
    var namePizza3 = "Capricciossa;"
    var pricePizza3 = document.getElementById('Capricciossa').value;
    var totalPizza3 = qtyPizza3 * pricePizza3;
    


    var fragmentHTMLOrders = ""; 
    var fragmentHTMLOrderItemLine = ""; 
    if (qtyPizza1 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalPizza"> Pizza: ${namePizza1} <br>
             Qty: ${qtyPizza1} <br>
             Total: $${totalPizza1} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    if (qtyPizza2 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalPizza"> Pizza: ${namePizza2} <br>
             Qty: ${qtyPizza2} <br>
             Total: $${totalPizza2} <br>  </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    
    if (qtyPizza3 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalPizza"> Pizza: ${namePizza3} <br>
             Qty: ${qtyPizza3} <br>
             Total: $${totalPizza3 } <br>  </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }


    fragmentHtml = `
    ${fragmentHTMLOrders}
    
    
    `;
    

    var element = document.getElementById('pizza');
    if (element && element.innerHTML != undefined){
        element.innerHTML = fragmentHtml;
    }

    var qtySandwich1 = document.getElementById('SchnitzelQty').value;
    var nameSandwich1 = "Schnitzel";
    var priceSandwich1 = document.getElementById('Schnitzel').value;
    var totalSandwich1 = qtySandwich1 * priceSandwich1;

    var qtySandwich2 = document.getElementById('MixedGrillQty').value;
    var nameSandwich2 = "Mixed Grill";
    var priceSandwich2 = document.getElementById('MixedGrill').value;
    var totalSandwich2 = qtySandwich2 * priceSandwich2;

    var qtySandwich3 = document.getElementById('BeefBunQty').value;
    var nameSandwich3 = "Beef on a Bun";
    var priceSandwich3 = document.getElementById('BeefBun').value;
    var totalSandwich3 = qtySandwich3 * priceSandwich3;


    var fragmentHTMLOrders = ""; 
    var fragmentHTMLOrderItemLine = ""; 
    if (qtySandwich1 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalSandwich"> Sandwich: ${nameSandwich1} <br>
             Qty: ${qtySandwich1} <br>
             Total: $${totalSandwich1} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    if (qtySandwich2 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalSandwich"> Sandwich: ${nameSandwich2} <br>
             Qty: ${qtySandwich2} <br>
             Total: $${totalSandwich2} <br>  </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    
    if (qtySandwich3 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalSandwich"> Sandwich: ${nameSandwich3} <br>
             Qty: ${qtySandwich3} <br>
             Total: $${totalSandwich3} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }


    fragmentHtml = `
    ${fragmentHTMLOrders}
    
    
    `;
    

    var element = document.getElementById('sandwich');
    if (element && element.innerHTML != undefined){
        element.innerHTML = fragmentHtml;
    }


    var qtyDrink1 = document.getElementById('CoffeeQty').value;
    var nameDrink1 = "Coffee";
    var priceDrink1 = document.getElementById('Coffee').value;
    var totalDrink1 = qtyDrink1 * priceDrink1;

    var qtyDrink2= document.getElementById('LatteQty').value;
    var nameDrink2 = "Latte"
    var priceDrink2 = document.getElementById('Latte').value;
    var totalDrink2 = qtyDrink2 * priceDrink2;

    var qtyDrink3 = document.getElementById('SoftDrinkQty').value;
    var nameDrink3 = "Soft Drink";
    var priceDrink3 = document.getElementById('SoftDrink').value;
    var totalDrink3 = qtyDrink3 * priceDrink3;


    var fragmentHTMLOrders = ""; 
    var fragmentHTMLOrderItemLine = ""; 
    if (qtyDrink1 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalDrinks"> Bevarage: ${nameDrink1} <br>
             Qty: ${qtyDrink1} <br>
             Total: $${totalDrink1} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    if (qtyDrink2 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalDrinks"> Bevarage: ${nameDrink2} <br>
             Qty: ${qtyDrink2} <br>
             Total: $${totalDrink2} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }
    
    if (qtyDrink3 > 0) {
        
        fragmentHTMLOrderItemLine = `    
        <div id="totalDrinks"> Bevarage: ${nameDrink3} <br>
             Qty: ${qtyDrink3} <br>
             Total: $${totalDrink3} <br> </div>
        `
         
        fragmentHTMLOrders += fragmentHTMLOrderItemLine;
    }


    fragmentHtml = `
    ${fragmentHTMLOrders}
    
    
    `;
    

    var element = document.getElementById('drinks');
    if (element && element.innerHTML != undefined){
        element.innerHTML = fragmentHtml;
    }

    var totalPizza =  (
    totalPizza1 +
    totalPizza2 +
    totalPizza3 );
    // totalDrink1 +
    // totalDrink2 +
    // totalDrink3);
    var totalSandwich = (
        totalSandwich1 +
        totalSandwich2 +
        totalSandwich3 );

    var totalDrink = (
        totalDrink1+
        totalDrink2 +
        totalDrink3 );
    

    document.getElementById('totalBillNumber').innerHTML = "$" + (totalPizza + totalSandwich + totalDrink);

}







