var pr_box = document.getElementById('pr_box');
function  getmyprofile(event)
{
    if(localStorage['user_email']==null)
    {
        window.location.assign('main.html');
    }
	event.preventDefault();
	var url = "http://localhost:3000/get-profile";
	var data = {
		email: localStorage['user_email']
	}
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
    	console.log(data);
    	var name= document.getElementById('name');
    	name.innerText = 'Name: '+ data[0].Name;
    	var email = document.getElementById('email');
    	email.innerText= 'Email: '+data[0].Email;
    	var add = document.getElementById('address');
    	add.innerText= 'Address: '+data[0].Address;
    	var phn = document.getElementById('phone');
    	phn.innerText= 'Phone: '+data[0].Phone;

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
    getmyorder();

}
function getmyorder()
{
	
	var url = "http://localhost:3000/get-my-order";
	var data = {
		email: localStorage['user_email']
	}
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
    	var i=1;
    	
        data.forEach((d)=>{
            setvalues(d,i);
            i=i+1;
            
        })

    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}
function setvalues(d, i)
{
	//console.log(d);
	var div = document.createElement('div');
	div.classList.add('shadow-lg');
	div.classList.add('p-3');
	div.classList.add('mb-5');
	div.classList.add('bg-white');
	div.classList.add('rounded');

	var pr_no = document.createElement('h4');
	pr_no.innerText = 'Order '+ i;
	var br = document.createElement('br');
	var pr_name = document.createElement('h5');
	pr_name.innerText= 'Product Name: '+d.Product;

	var pr_amount= document.createElement('h5');
	pr_amount.innerText = 'Total Product: '+ d.Total;

	var pr_address = document.createElement('h5');
	pr_address.innerText = 'Address: '+d.Address;

	div.appendChild(pr_no);
	div.appendChild(br);
	div.appendChild(pr_name);
	div.appendChild(pr_amount);
	div.appendChild(pr_address);

	pr_box.appendChild(div);


}