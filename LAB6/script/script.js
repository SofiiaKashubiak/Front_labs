let currentPage = 1;
const usersPerPage = 8;

async function fetchUserData(page = 1) {
    const url = `https://randomuser.me/api/?page=${page}&results=${usersPerPage}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Помилка при отриманні даних');
        }

        const data = await response.json();

        const userInfoContainer = document.getElementById('user-info');
        userInfoContainer.innerHTML = '';

        data.results.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user-card');

            userDiv.innerHTML = `
                <img src="${user.picture.large}" alt="User Picture" class="user-image" />
                <p><strong>City:</strong> ${user.location.city}</p>
                <p><strong>Country:</strong> ${user.location.country}</p>
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Postcode:</strong> ${user.location.postcode}</p>
            `;

            userInfoContainer.appendChild(userDiv);
        });

        currentPage = page;

        document.querySelector('.pagination').style.display = 'flex';

    } catch (error) {
        console.error('Помилка:', error);
        document.getElementById('user-info').innerHTML = `<p>Не вдалося отримати дані. Спробуйте ще раз.</p>`;
    }
}

document.getElementById('load-users-btn').addEventListener('click', () => {
    fetchUserData(currentPage);
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        fetchUserData(currentPage - 1);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    fetchUserData(currentPage + 1);
});