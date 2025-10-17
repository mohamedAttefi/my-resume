
    function fetchPlayer() {
      const playerName = document.getElementById("name").value.toLowerCase();
        const image =document.getElementById("image")

      fetch(`https://pokeapi.co/api/v2/pokemon/${playerName}`)
        .then(response => {
          return response.json();
        })
        .then(data => {console.log(data);
            image.src = data.sprites.front_default
        })
        

        
    }