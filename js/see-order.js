var tbody = document.getElementById('tbody');
function getOrder(event)
{
	event.preventDefault();
	var url = "http://localhost:3000/get-order";
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

    fetch(url).then(takeResponse).then(finalResponse);
}
function setvalues(d,i)
{
	var tr = document.createElement('tr');
	var th = document.createElement('th');
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	var td3 = document.createElement('td');
	var td4 = document.createElement('td');
	var td5 = document.createElement('td');

	th.scope='row';
	th.innerText = i;
	td1.innerText = d.Product;
	td2.innerText = d.Total;
	td3.innerText = d.FirstName+' '+d.LastName+'\n'+d.Email+'\n'+d.Phone;
	td4.innerText = d.Address;

	var btn = document.createElement('button');
	btn.classList.add('btn');
	btn.classList.add('btn-primary');
	btn.innerText = 'Delete';
	btn.onclick = function(){delete_order(d.Order);}
	
	td5.appendChild(btn);
	
	tr.appendChild(th);
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tbody.appendChild(tr);

}
function delete_order(Order)
{
	var url = 'http://localhost:3000/delete-order';

	var data = {
		order: Order
	}

	var config = {
		method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
	}
	var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
       // 
        if(data.message==="Successful")
        {
            alert('Order Deleted');
            window.location.assign("orders.html");
        }
    };

    fetch(url, config).then(takeResponse).then(finalResponse);

}
