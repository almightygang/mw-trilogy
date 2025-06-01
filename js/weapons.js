fetch('data/weapons.json')
  .then(response => response.json())
  .then(data => {
    const weaponsList = document.getElementById('weapons-list');
    data.weapons.forEach(weapon => {
      const weaponItem = document.createElement('div');
      weaponItem.classList.add('weapon-item');
      weaponItem.innerHTML = `
        <h3>${weapon.name}</h3>
        <p>Type: ${weapon.type}</p>
        <p>Damage: ${weapon.damage}</p>
        <p>Range: ${weapon.range}</p>
      `;
      weaponsList.appendChild(weaponItem);
    });
  })
  .catch(error => {
    console.error('Error fetching weapons data:', error);
  });