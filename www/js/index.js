document.getElementById('showPost').addEventListener('click', function() {
    var postNumber = document.getElementById('postNumber').value;
    fetch('https://jsonplaceholder.typicode.com/posts/' + postNumber)
        .then(response => response.json())
        .then(data => {
            document.getElementById('postTitle').textContent = data.title;
            document.getElementById('postBody').textContent = data.body;
        })
        .catch(error => console.error('Erro:', error));
});

window.addEventListener('scroll', function() {
    let body = document.body;
    let html = document.documentElement;
    let scrollTop = body.scrollTop || html.scrollTop;
    let scrollHeight = body.scrollHeight || html.scrollHeight;
    let clientHeight = body.clientHeight || html.clientHeight;

    // Limpa ao chegar ao fim da página
    if (scrollTop + clientHeight >= scrollHeight) {
        document.getElementById('postNumber').value = '';
        document.getElementById('postTitle').textContent = '';
        document.getElementById('postBody').textContent = '';
    }

    // Limpa ao voltar para o início da página
    if (scrollTop === 0) {
        document.getElementById('postNumber').value = '';
        document.getElementById('postTitle').textContent = '';
        document.getElementById('postBody').textContent = '';
    }
});
