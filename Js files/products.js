let data;
let xttp = new XMLHttpRequest();
xttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status == 200){
        data = this.response
        return this.response;
    }
}

xttp.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",false);
xttp.send();

data = JSON.parse(data)
checkValidation()
let Productcount = 0;
$(".orderFilterCheckbox").click(function () {
    checkValidation()
});

function checkValidation(){

let Parray =[]
    $("input[type='checkbox']:checked").each(function(){
        Parray.push($(this).val());
        });
    console.log(Parray)
    $("tbody")[1].innerHTML = ''
    runloop(Parray)
    
}

function runloop(Parry){
    console.log(Parry)
    let date =0;
    let Productcount = 0;
for(let i=0;i<data.length;++i){
    if(Parry.includes('Expired')){
        if( new Date(data[i].expiryDate) < new Date()){
        insidediv(data[i])
        Productcount += 1
        continue;
    } } 
    if(Parry.includes('Low Stock')){
        if(data[i].stock<100){
            insidediv(data[i])
            Productcount++;
            continue;
        }
        
    }
    if(Parry[0]== undefined){
    insidediv(data[i])
    Productcount++
    }  
}
$("#productFilterCount").html(Productcount)  
}

function insidediv(userData,Productcount){

    $("tbody")[1].innerHTML += `<tr class="OrderList-Row">
    <td class="orderSecondaryText">${userData.id}</td>
    <td class="orderPrimaryText"> ${userData.medicineName}</td>
    <td class="orderSecondaryText">${userData.medicineBrand},</td>
    <td class="orderPrimaryText">${userData.expiryDate}</td>
    <td class="orderSecondaryText">${userData.unitPrice} </td>
    <td class="orderSecondaryText">${userData.stock} </td>
    </tr>`
    
}

function Logout(){
    localStorage.removeItem('LoggedIn')
    alert ("Logged Out Successfully")
    window.open("index.html","_self")
}
