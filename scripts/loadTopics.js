function loadDoc() {
  fetch('https://lampsback.onrender.com/get_level?numberId=1')
            .then(response => response.json())
            .then(data => {
                const dataList = document.getElementById('data-list');
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.figures; // предположим, что у вас есть поле 'name' в модели
                    dataList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
  }