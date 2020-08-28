var team;
var password;
var url='http://localhost:5000/userLogin/'
$(document).ready(function()
{
   document.getElementById('selectedTeam').addEventListener('change', event => {
       var e = document.getElementById("selectedTeam");
       team = e.options[e.selectedIndex].value;
       console.log(team);
   });
});

function checkLogIn()
{
    password=document.getElementById('password').value;
    if(!team)
    {
        alert("select Team Name!");
        return false;
    }
    if(!password){
        alert("Enter password");
        return false;
    }
    else{
        signIn();
    }
    return true;
}
//submit
document.getElementById('submit').addEventListener('click',function(e){
    e.preventDefault()
    console.log('submit');
    checkLogIn();

})
function signIn(){

    let data={ 'username':team,'password':password};
    fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body:JSON.stringify(data)
    })
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
          data=> {
              setCookie('token', data.token, 1)
              window.localStorage.setItem('teamName', data.teamName);
              if (data.teamName == "ADMIN") {
                  window.location.href = '/';
              } else {
                  window.location.href = '/gameTeam';
              }
              alert('here');
          });

}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
