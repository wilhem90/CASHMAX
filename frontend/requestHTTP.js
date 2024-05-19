alert(51+5)

const users = document.querySelector('.users')
async function getUser() {
    const http = await fetch('http://localhost:3333/users')
    const httpTxt = await http.json()
    if (httpTxt.length > 0) {
        users.innerHTML = ''
        httpTxt.forEach(element => {
            const label = document.createElement('label')
            console.log(element);
            label.innerHTML = `<p>ID: ${element.id}</p>`
            users.appendChild(label)
        });
    }
}


const accessToken = 'seu_access_token_aqui';

fetch('http://localhost:3333/users/EXdUvowZrZHKDDtElSv8', {
    method: 'DELETE',
    headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Meu Novo Post',
        content: 'Conteúdo do post'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erro:', error));

getUser()