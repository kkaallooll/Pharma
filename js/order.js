function getMedicineName(event)
{
    var email = document.getElementById('c_email_address');
    email.value = localStorage['user_email'];
    
    event.preventDefault();
    var url = "http://localhost:3000/get-medicine-name";
    var takeResponse = function(response){
        return response.json();
    }
    var span = document.getElementById('medicine');
    var finalResponse = function(data){
        //console.log(data);
        var select = document.createElement('select');
        var i=0;
        select.name='product';
        data.forEach((medicine)=>{

            var option = document.createElement('option');
            option.value = medicine.name;
            option.innerText = medicine.name;
            select.add(option,i);
            i++;
            //console.log(option);
        })
        span.appendChild(select);
        console.log(select);
    }

    fetch(url).then(takeResponse).then(finalResponse);
}
function  makeOrder(event) {
    event.preventDefault();
    var form1 = document.getElementById('form1');
    var form2 = document.getElementById('form2');
    var data1 = new FormData(form1);
    var data2 = new FormData(form2);
    var fn = data1.get('fn');
    var ln = data1.get('ln');
    var add = data1.get('address');
    var email = data1.get('email');
    var phn = data1.get('phone');
    var product = data2.get('product');
    var total = data2.get('total');

    var data = {
        FirstName: fn,
        LastName: ln,
        Address: add,
        Email: email,
        Phone: phn,
        Product: product,
        Total: total

    }
    console.log(data);

   var url = 'http://localhost:3000/make-order';

    var config = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };


    var takeResponse = function (response) {

        return response.json();
    };

    var finalResponse = function (data) {
       alert(data.message);
       if(data.message === 'Order Placed'){
           window.location.assign('index.html');
       }
    };

    fetch(url, config).then(takeResponse).then(finalResponse);

}

