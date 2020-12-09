function sign(event) {
    event.preventDefault();
    var form1 = document.getElementById('form');
    var data1 = new FormData(form1);
    var name = data1.get('name');
    var email = data1.get('email');
    var add = data1.get('address');
    var phn = data1.get('phone');
    var pass = data1.get('password');

    var data = {
        Name: name,
        Address: add,
        Email: email,
        Phone: phn,
        Password: pass

    }
    console.log(data);

    var url = 'http://localhost:3000/sign-up';

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
        if(data.message === "Registration Successful"){
            window.location.assign("login.html");
        }
    };

    fetch(url, config).then(takeResponse).then(finalResponse);

}

