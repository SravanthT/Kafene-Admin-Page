

let loadDirect = localStorage.getItem('LoggedIn')
console.log(loadDirect)

function validateCredentials(){
    const name = $('#username').val()
    const pwd = $("#passWord").val()

    if(name == pwd && name !== ""){
        localStorage.setItem("LoggedIn", 'true')
        alert ('Logged in Succesfully')
        window.open("orders.html","_self")
    }else {
        alert ("Please enter valid credentials")
    }
    console.log('button clicked')
}