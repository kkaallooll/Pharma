var row = document.getElementById('medicine-list');
function checklogin(event)
{
    event.preventDefault();
    var logo = document.getElementById('logo');
    if(localStorage['user_email']!=null)
    {
        logo.href='index.html';


        if(localStorage['user_email']==='admin@gmail.com')
        {
            addOptions();
        }

    }
    else{
        logo.href='main.html';
        var str = window.location.href;

        if(str.includes('main.html')===false)
        {
            window.location.assign('main.html');
        }

    }
}
function getMedicineInfo()
{
    checklogin(event);
    var url = 'http://localhost:3000/get-all-medicine';
    
   


    var takeResponse = function (response) {
        
        return response.json();
    };

    var finalResponse = function (data) {
    	
        data.forEach((d)=>{
            setvalues(d);
            
        })

       
       
    };

    fetch(url).then(takeResponse).then(finalResponse);


}
function setvalues(medicine)
{
    var div = document.createElement('div');
    div.classList.add('col-sm-6'); 
    div.classList.add('col-lg-4');
    div.classList.add('text-center');
    div.classList.add('item');
    div.classList.add('mb-4');
    

    var span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = 'Sale';
    
    var img = document.createElement('img');
    img.src="images/"+medicine.img;
    
    var a = document.createElement('a');
    a.href = 'shop-single.html';
    a.onclick = function() {onClickMedicine(medicine.code)};
    a.appendChild(img);


    var h3 = document.createElement('h3');
    h3.classList.add('text-dark');


    var a2 = document.createElement('a');
    a2.href = 'shop-single.html';
    a2.onclick = function() {onClickMedicine(medicine.code)};
    a2.innerText = medicine.name;


    h3.appendChild(a2);

    var p = document.createElement('p');
    p.classList.add('price');
    p.innerText= medicine.price;

    var btn = document.createElement('button');
    btn.classList.add('btn', 'btn-primary', 'btn-lg', 'btn-block');
    btn.innerText = 'Delete';
    btn.onclick = function(){onDeleteMedicineClick(medicine.code)};
  //  console.log(btn);


    div.appendChild(span);
    div.appendChild(a);
    div.appendChild(h3);
    div.appendChild(p);
    if(localStorage['user_email']==='admin@gmail.com')
    {
        div.appendChild(btn);
    }


    row.appendChild(div);


}

function onDeleteMedicineClick(code)
{
    var url = 'http://localhost:3000/delete-a-medicine';
    var data = {
        code: code
    }
    var config = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    var takeResponse = function(response)
    {
        return response.json();
    }
    var finalResponse = function(data)
    {
        if(data.message==='Successful')
        {
            alert('1 medicine deleted');
            window.location.reload();
        }
        else alert(data.message);
    }
    fetch(url, config).then(takeResponse).then(finalResponse);

}

function onClickMedicine(code)
{
    localStorage.setItem('code', code);
}
function logout (event)
{
    event.preventDefault();
    localStorage.removeItem('user_email');
    window.location.assign('main.html');

}
function addOptions()
{
    var ul = document.getElementById('myul');

    var a = document.getElementById('mya');

    a.innerText= 'See Order';
    a.href='orders.html';

    var lia= document.getElementById('profile');
    lia.href='add-medicine.html';
    lia.innerText='Add Medicine';
    

}