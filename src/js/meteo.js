window.onload = function() {
    weather();
};

function weather() {

    fetch(url = 'https://www.el-tiempo.net/api/json/v2/provincias/08', {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
      
        .then(quote => quote.json())
  
        .then(data => {
            console.log(data);
            document.getElementById("weather").innerHTML = `El temps d'avuí: ${data.ciudades[6].stateSky.description}`;
        }
        )
  }