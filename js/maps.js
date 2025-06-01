const mapsContainer = document.getElementById('maps-list');

fetch('data/maps.json')
    .then(response => response.json())
    .then(maps => {
        maps.forEach(map => {
            const mapElement = document.createElement('div');
            mapElement.classList.add('map');

            const mapTitle = document.createElement('h2');
            mapTitle.textContent = map.name;

            const mapDescription = document.createElement('p');
            mapDescription.textContent = map.description;

            const mapLayout = document.createElement('img');
            mapLayout.src = map.layout;
            mapLayout.alt = `${map.name} layout`;

            mapElement.appendChild(mapTitle);
            mapElement.appendChild(mapDescription);
            mapElement.appendChild(mapLayout);
            mapsContainer.appendChild(mapElement);
        });
    })
    .catch(error => {
        console.error('Error fetching maps:', error);
    });