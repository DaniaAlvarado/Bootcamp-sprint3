let favorites = JSON.parse(localStorage.getItem("favoritospage")) || [];

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
    if (favorites !== []) {
        printCards(favorites, main);
    }

    if (favorites === []) {
        const h5 = document.createElement('h5');
        h5.innerText = 'Usted no tiene favoritos guardados'
        main.appendChild(h5);
    }

})