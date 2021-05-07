function acudit() {

  let random = Math.ceil(Math.random()*2)
  let url;
	
	if (random == 1) {
		url = "https://v2.jokeapi.dev/joke/Programming";
  } 

  fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
    
      .then(quote => quote.json())

      .then(data => {
          console.log(data);
          if (data.type == "twopart") {
            document.getElementById("text").innerHTML = data.setup + " " + data.delivery;
        
          } else {
            document.getElementById("text").innerHTML = data.joke;
          }
        }
      )
}



