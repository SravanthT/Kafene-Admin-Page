let userList;
let userLis;
let xttp = new XMLHttpRequest();
xttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status == 200){
        // console.log(this.response)
        userList = this.response
        return this.response;
    }
}

let zttp = new XMLHttpRequest();
zttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status == 200){
        // console.log(this.response)
        userLis = this.response
        return this.response;
    }
}
xttp.open('GET',"https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",false);
xttp.send();


userList = JSON.parse(userList)
console.log(Object.keys(userList[0]))
let count =0
usersDisplay(userList)
function usersDisplay(userList){
for(let i=0;i<userList.length;++i){
    
    insidediv(userList[i])

}
function insidediv(userData){
    
    $("tbody")[0].innerHTML += `<tr class="userList-Row">
    <td class="userSecondaryText">${userData.id}</td>
    <td class="userPrimaryText"> <img src="${userData.profilePic}" alt="userProfilePic"/></td>
    <td class="userSecondaryText"> ${userData.fullName}</td>
    <td class="userPrimaryText">${userData.dob}</td>
    <td class="userSecondaryText">${userData.gender}</td>
    <td class="userSecondaryText">${userData.currentCity} , ${userData.currentCountry}</td>
    </tr>`

}}
function Logout(){
    localStorage.removeItem('LoggedIn')
    alert ("Logged Out Successfully")
    window.open("index.html","_self")
}
const noResult = () => {
    let noResultText = `<p class="noResult text-danger fw-bold">No Result Found</p>`;
    $("tbody").html(noResultText);
  };

  $("#userlistReset_button").click(function (e) {
    e.preventDefault();
    $("#userSearch").val("");
    $("tbody")[0].innerHTML =''
    usersDisplay(userList);
  });

$("#userSearch").on("input",function(e){
    e.preventDefault()
    let searchText = $(this).val().toLowerCase()
    if(searchText.length<2){ alert ("Please Enter atleast 2 characters")
    }if (searchText.length >= 2){
    searchCall(searchText)
    }
});

function searchCall(searchText){
zttp.open('GET',`https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=${searchText}`,false);
zttp.send();
userLis = JSON.parse(userLis);
$("tbody")[0].innerHTML =''
usersDisplay(userLis)
console.log(userLis)
}
