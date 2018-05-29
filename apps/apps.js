$(document).ready(function(){
$.getJSON('https://www.omdbapi.com/?s=kamen%20rider&r=json&apikey=a47450a2',
 function(data){
  console.log(data);
   var myData= data.Search;
  console.log(myData);
  });
});
