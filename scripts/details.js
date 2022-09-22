

const getData = (url) => {
    const data = fetch(url) //Devuelve una promesa. Resultado de esta promesa es otra promesa 
        .then(resp => {
            const response = resp.json() // Esta es la otra promesa que resulta de resolver la promesa del fetch.
                .then(resp => {
                    return resp.results
                })
                .catch(error => {
                    console.log('problemas en la promesa resp.json()', error);
                    return []
                })
            return response
        })
        .catch(error => {
            console.log('problemas en la promesa fetch(url)', error);
            return null
        })
    return data
}

const URL="http://localhost:3000/living";

let idVer = JSON.parse(localStorage.getItem("verDetails")) || [];

  const printCards = (data, container) => {
    container.innerHTML = '';

    data.forEach(element => {
        const { id, type, price, image_main, place, area, bedrooms, bathrooms, status, parking, owner } = element;

        const article = document.createElement('article');

        article.classList.add('containerCards');

        article.innerHTML += `
        <section>
            <figure>
              <img src="${element.image_main}" alt="${element.type}">
            </figure>
            <p>Precio: ${element.price}</p>
            <p>Tipo: ${element.type}</p>
            <p>Lugar: ${element.place}</p>
            <p>Area: ${element.area}</p>
            <p>Habitaciones: ${element.bedrooms}</p>
            <p>Baños: ${element.bathrooms}</p>
            <p>Estado: ${element.status}</p>
            <p>Parqueadero: ${element.parking}</p>
            <p>Propietario: ${element.owner}</p>
          </section>
        `
        container.appendChild(article);
    });
}

const main = document.getElementById('main');

document.addEventListener('DOMContentLoaded', () => {
    getData(URL)
        .then(resp => {
            const character = resp.filter(item => item.id === parseInt(idVer));
            printCards(character, main)
        })
        .catch(error => console.log(error))
});