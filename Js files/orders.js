$('#table').append("<div id='filtering-div'><h2>Filter</h2><div id='filtered-results'></div>")

let data;
let xttp = new XMLHttpRequest();
xttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status == 200){
        // console.log(this.response)
        data = this.response
        return this.response;
    }
}

xttp.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",false);
xttp.send();

data = JSON.parse(data)

checkEnquiry()

$(".orderFilterCheckbox").click(function () {
    checkEnquiry()
  });
function checkEnquiry(){
    let array = []
    $("input[type='checkbox']:checked").each(function(){
    array.push($(this).val());
    });
    $("tbody")[1].innerHTML=''

    filter(array)
}
function filter(status){
    let count = 0;
let array= status
for(let i=0;i<data.length;++i){
    if (array.includes(data[i].orderStatus)){
    insidediv(data[i])
    count += 1
    }
}

$("#ordersFilterCount").html(count)
}
function insidediv(userData){
    
    $("tbody")[1].innerHTML += `<tr class="OrderList-Row">
    <td class="orderSecondaryText">${userData.id}</td>
    <td class="orderPrimaryText"> ${userData.customerName}</td>
    <td class="orderPrimaryText">${userData.orderDate},, ${userData.orderTime}</td>
    <td class="orderSecondaryText">${userData.amount}</td>
    <td class="orderPrimaryText">${userData.orderStatus} </td>
    </tr>`
}

function Logout(){
    localStorage.removeItem('LoggedIn')
    alert ("Logged Out Successfully")
    window.open("index.html","_self")
}

