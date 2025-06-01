fetch('data/weapons.json')
  .then(response => response.json())
  .then(weapons => {
    const tbody = document.getElementById('weapons-table-body');
    weapons.forEach((weapon, index) => {
      const tr = document.createElement('tr');

      const nameTd = document.createElement('td');
      nameTd.textContent = weapon.name || '';
      tr.appendChild(nameTd);

      const descTd = document.createElement('td');
      descTd.textContent = weapon.description || '';
      tr.appendChild(descTd);

      const imgTd = document.createElement('td');
      if (weapon.image) {
        const img = document.createElement('img');
        img.src = weapon.image;
        img.alt = weapon.name || '';
        img.style.maxWidth = '100px';
        imgTd.appendChild(img);
      }
      tr.appendChild(imgTd);

      const locTd = document.createElement('td');
      locTd.textContent = `weapons[${index}]`;
      tr.appendChild(locTd);

      tbody.appendChild(tr);
    });
  })
  .catch(error => {
    console.error('Error fetching weapons:', error);
  });