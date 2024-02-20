document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');

    bookForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;

        addBookToList(title, author, genre);
        bookForm.reset();
    });

    function addBookToList(title, author, genre) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Title:</strong> ${title} | <strong>Author:</strong> ${author} | <strong>Genre:</strong> ${genre}`;
        bookList.appendChild(li);
    }
});