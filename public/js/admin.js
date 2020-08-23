var month = "";
var checked = 0; // checks whether any month selectors checked or not
var months=[];

var gameCheckUrl='http://localhost:5000/gameData/gameStats';

$(document).ready(function () {
  $(":checkbox").click(function (e) {
    if (e.target.checked == true) {
      //to verify how many months checked
     checked+=1;
     document.getElementById('activateMonthBtn').disabled=false;
    }
    else
    {
      checked-=1;
      if(checked==0)
      {
        document.getElementById('activateMonthBtn').disabled=true;
      }
    }
    
  });
  $(".dropdown-item").click(function (e) {
    month = e.target.text;
    console.log(month);
    $("#month").text(month);
  });
});
function gameCheck()
{
  //to check for active games and load it to the page (on page load)
  var xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                      var res=JSON.parse(this.responseText);
                                      
                                      if(res['message']!="none")
                                      {
                                        let i=0;
                                        while(i<res['games'].length)
                                        {
                                          switch(res['games'][i].month)
                                          {
                                            case "JAN": 
                                                        if(res['games'][i].teamName == "NORTH")
                                                        {
                                                          document.getElementById('nJan').innerText=res['games'][i].vote;
                                                        }
                                                        else if(res['games'][i].teamName == "SOUTH")
                                                        {
                                                          document.getElementById('sJan').innerText=res['games'][i].vote;
                                                        }
                                                        else if(res['games'][i].teamName == "EAST")
                                                        {
                                                          document.getElementById('eJan').innerText=res['games'][i].vote;
                                                        }
                                                        else
                                                        {
                                                          document.getElementById('wJan').innerText=res['games'][i].vote;
                                                        }
                                                        break;
                                            case "FEB":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nFeb').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sFeb').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eFeb').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wFeb').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "MAR":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nMar').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sMar').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eMar').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wMar').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "APR":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nApr').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sApr').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eApr').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wApr').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "MAY":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nMay').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sMay').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eMay').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wMay').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "JUN":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nJun').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sJun').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eJun').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wJun').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "JUL":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nJul').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sJul').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eJul').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wJul').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "AUG":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nAug').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sAug').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eAug').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wAug').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "SEP":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nSep').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sSep').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eSep').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wSep').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "OCT":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nOct').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sOct').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eOct').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wOct').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            case "NOV":
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nNov').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sNov').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eNov').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wNov').innerText=res['games'][i].vote;
                                              }
                                              break;
                                            default:
                                              if(res['games'][i].teamName == "NORTH")
                                              {
                                                document.getElementById('nDec').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "SOUTH")
                                              {
                                                document.getElementById('sDec').innerText=res['games'][i].vote;
                                              }
                                              else if(res['games'][i].teamName == "EAST")
                                              {
                                                document.getElementById('eDec').innerText=res['games'][i].vote;
                                              }
                                              else
                                              {
                                                document.getElementById('wDec').innerText=res['games'][i].vote;
                                              }
                                          }
                                          if(res['games'][i].amount)
                                            {
                                              switch(res['games'][i].month)
                                              {
                                                case "JAN":
                                                  document.getElementById('actJan').disabled=true;
                                                  break;
                                                case "FEB":
                                                  document.getElementById('actFeb').disabled=true;
                                                  break;
                                                case "MAR":
                                                  document.getElementById('actMar').disabled=true;
                                                  break;
                                                case "APR":
                                                  document.getElementById('actApr').disabled=true;
                                                  break;
                                                case "MAY":
                                                  document.getElementById('actMay').disabled=true;
                                                  break;
                                                case "JUN":
                                                  document.getElementById('actJun').disabled=true;
                                                  break;
                                                case "JUL":
                                                  document.getElementById('actJul').disabled=true;
                                                  break;
                                                case "AUG":
                                                  document.getElementById('actAug').disabled=true;
                                                  break;
                                                case "SEP":
                                                  document.getElementById('actSep').disabled=true;
                                                  break;
                                                case "OCT":
                                                  document.getElementById('actOct').disabled=true;
                                                  break;
                                                case "NOV":
                                                  document.getElementById('actNov').disabled=true;
                                                  break;
                                                default:
                                                  document.getElementById('actDec').disabled=true;
                                              }
                                            }
                                          i++;
                                        }
                                      }
                                      
                                    }
                                }
    xhttp.open("GET",gameCheckUrl,true);
    xhttp.send();
}

function activateMonths()
{
  let boxes=$(":checkbox");   //get all checkoxes
  months=[];  //list of all months checked
  let i=0;
  while(i<12)
  {
    if(boxes[i].checked)
    {
      switch(i)
      {
        case 0:months.push("JAN");break;
        case 1:months.push("FEB");break;
        case 2:months.push("MAR");break;
        case 3:months.push("APR");break;
        case 4:months.push("MAY");break;
        case 5:months.push("JUN");break;
        case 6:months.push("JUL");break;
        case 7:months.push("AUG");break;
        case 8:months.push("SEP");break;
        case 9:months.push("OCT");break;
        case 10:months.push("NOV");break;
        default:months.push("DEC");
      }
    }
    boxes[i].disabled=true;
    boxes[i].checked=false;
    i++;
  }

  if(months.length>0)
  {
    $.post('http://localhost:5000/game/activate' , {activateMonths:months } )
.done(function( data )
    {
    console.log( "Data Loaded: " + data.message);
    })
    document.getElementById('activateMonthBtn').disabled=true;
  }
  else
  {
    console.log("selects months!");
  }
}