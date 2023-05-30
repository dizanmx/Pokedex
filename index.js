/* function buscapkmn ()

{

    var busqueda = document.getElementById("Buscador").value;
    var resultadobusqueda = busqueda;
    console.log("Búsqueda de Pokemon: " + busqueda);
    alert("Búsqueda de Pokemon: " + resultadobusqueda);
    

} */

/* function buscapkmn() {
    var nombrePokemon = document.getElementById("Buscador").value;
    var url = "https://pokeapi.co/api/v2/pokemon/" + nombrePokemon.toLowerCase();
  
    fetch(url)
      .then(function(response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Respuesta de red no válida");
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.log("Hubo un problema con la petición Fetch: " + error.message);
      });
  } */

/*   function buscapkmn() {
    const pokemon = document.getElementById("Buscador").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    axios.get(url)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }   */

  function buscapkmn() {
    const pokemon = document.getElementById("Buscador").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  
    axios.get(url)
      .then(response => {
        const pokemonData = response.data;
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `
          <p>Nombre: ${pokemonData.name}</p>
          <p>ID: ${pokemonData.id}</p>
          <p>Altura: ${pokemonData.height} dm</p>
        `;
        const spriteUrl = pokemonData.sprites.back_default;
        const imagenPokemon = document.getElementById("imagenPokemon");
        imagenPokemon.src = spriteUrl;
      })
      .catch(error => {
        alert("La busqueda no coincide con un pokemon conocido    "+error);
      });
  }