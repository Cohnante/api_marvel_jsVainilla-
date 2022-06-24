function consulta() {
    var search = document.getElementById("marvel").value;
  
    const options = {
      method: "GET"
    };
    
    // Petición HTTP
    fetch(`https://gateway.marvel.com/v1/public/characters?name=${search}&ts=1000&apikey=f7d4e26f2e50d554607d2d3d8191b5dd&hash=bdcca07ccf37830c0f779e684d2d73bd`, options)
      .then(response => {return response.text()})
      .then(data => {
        //convertimos formato json cadena en objeto de javascript
        var Info = JSON.parse(data);
        document.getElementById("Name").innerHTML=Info.data.results[0].name;
        document.getElementById("imagen").innerHTML= `<img src="${Info.data.results[0].thumbnail.path+"/portrait_incredible.jpg"}" alt="...">`;
        document.getElementById("descripcion").innerHTML=Info.data.results[0].description;
        document.getElementById("Mod").innerHTML=Info.data.results[0].modified;
      }).catch((err) => {console.log("Info error: ", err);})
  }