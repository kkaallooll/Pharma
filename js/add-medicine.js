

function onAddButtonClick(event) {

    event.preventDefault();
    var form = document.getElementById('form');
    var data = new FormData(form);
    var url = 'http://localhost:3000/add-medicine';
    console.log(data);

    var params = {
    	name: data.get('name'),
    	detail: data.get('detail'),
    	price: data.get('price')
    }
    console.log(params);
    var config = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    };


    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
    	console.log(data);
    	var form2 = document.getElementById('imgform');
    	var imgdata = new FormData(form2);
        if(data.message==='Successful')
        {
        	
        	uploadImage(imgdata);

        }
    };

    
    fetch(url, config).then(takeResponse).then(finalResponse);

}
function uploadImage(data)
{
	var url = 'http://localhost:3000/upload-image';

	var config = {
        method: 'post',
        body: data
    };


    var takeResponse = function (response) {

        return response.json();
    };

    var finalResponse = function (data) {
       // 
        if(data.message === "Successful"){
           alert('1 medicine added.');
           window.location.assign('shop.html');
        }else alert(data.message);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);

}