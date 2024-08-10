let newsList = [];

function submitNews() {
    const title = document.getElementById('news-title').value;
    const details = document.getElementById('news-details').value;
    const imageInput = document.getElementById('news-image');
    const feedback = document.getElementById('feedback');

    if (title && details && imageInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newsItem = {
                title: title,
                details: details,
                image: e.target.result
            };
            newsList.push(newsItem);
            displayNews();
            feedback.textContent = 'تم إرسال الخبر بنجاح!';
            feedback.className = 'feedback';
            feedback.style.display = 'block';
            clearForm();
        };
        reader.readAsDataURL(imageInput.files[0]);
    } else {
        feedback.textContent = 'يرجى ملء جميع الحقول.';
        feedback.className = 'feedback error';
        feedback.style.display = 'block';
    }
}

function displayNews() {
    const newsListDiv = document.getElementById('news-list');
    newsListDiv.innerHTML = '';

    newsList.forEach((news, index) => {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-item';
        newsDiv.innerHTML = `
            <h3>${news.title}</h3>
            <p>${news.details}</p>
            <img src="${news.image}" alt="News Image"><br><br>
            <button onclick="selectNews(${index})">اختر هذا الخبر</button>
        `;
        newsListDiv.appendChild(newsDiv);
    });
}

function selectNews(index) {
    alert(`لقد اخترت الخبر بعنوان: ${newsList[index].title}`);
}

function clearForm() {
    document.getElementById('news-title').value = '';
    document.getElementById('news-details').value = '';
    document.getElementById('news-image').value = '';
}