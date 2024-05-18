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

getUser()