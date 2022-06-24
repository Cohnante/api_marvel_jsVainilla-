function consulta() {
  var search = document.getElementById("marvel").value;
  var number = parseInt( document.getElementById("number").value);

  const options = {
    method: "GET"
  };
  
  // Petición HTTP
  fetch(`https://gateway.marvel.com/v1/public/characters?name=${search}&ts=1000&apikey=f7d4e26f2e50d554607d2d3d8191b5dd&hash=bdcca07ccf37830c0f779e684d2d73bd`, options)
    .then(response => {return response.text()})
    .then(data => {
      //convertimos formato json cadena en objeto de javascript
      var Info = JSON.parse(data);
      document.getElementById("comics").innerHTML=Info.data.results[0].comics.available;
      document.getElementById("name_comics").innerHTML=Info.data.results[0].comics.items[number].name;
    }).catch((err) => {console.log("Info error: ", err);})
}