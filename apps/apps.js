$(function(){
$.getJSON('http://www.omdbapi.com/?s=kamen%20rider&r=json&apikey=a47450a2', function(data){
  console.log(data){
    var myData= data.Search[0].Title;
    console.log(myData);
  });
});

});
