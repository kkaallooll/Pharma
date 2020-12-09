
var medicine = {
    name: '',
    code: '',
    detail: '',
    price: '',
    img: ''
  };
function getMedicineInfoSingle()
{
    console.log(localStorage['code']);
    var url = 'http://localhost:3000/get-medicine';
    var data = {
        code: localStorage['code']
    };
    console.log(data);
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
        medicine['code']=data[0].code;
        medicine['detail']=data[0].detail;
        medicine['name']=data[0].name;
        medicine['price']=data[0].price;
        medicine['img']=data[0].img;
        console.log(medicine);
        setvaluessingle();
    };

    fetch(url, config).then(takeResponse).then(finalResponse);


}
function setvaluessingle()
{
    var name = document.getElementById('name');
    var detail = document.getElementById('detail');
    var price = document.getElementById('price');
    
    var h2= document.createElement('h2');
    name.innerText = medicine.name;
    detail.innerText = medicine.detail;
    price.innerText = medicine.price;
    var img = document.getElementById('img');
    img.src="images/"+medicine.img;
}
function setMedicineName(event)
{
    event.preventDefault();
    sessionStorage.setItem('medicine-name',medicine['name']);
    console.log(sessionStorage['medicine-name']);
    window.location.assign('order-single.html');
}