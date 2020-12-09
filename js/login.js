function login(data) {

    var url = 'http://localhost:3000/login';

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
        if(data.message==="Login Successful")
        {
            
            window.location.assign("index.html");
            console.log(data);
            localStorage.setItem('user_email', data.user_email);
        }
    };

    fetch(url, config).then(takeResponse).then(finalResponse);


}



function onLoginButtonClick(event) {

    event.preventDefault();

    var form = document.getElementById("form");
    var data = new FormData(form);

    var email = data.get('email');
    var pass = data.get('password');

    var params = {
        Email: email,
        Password: pass
    };

    console.log(params);


    if(email && pass) {
        login(params);
    }else{
        alert('Form is not filled up with all the information');
    }

}