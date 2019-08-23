const form = document.getElementById('form')
const address = document.querySelector('[name="endereco-cep"]')

form.addEventListener('submit', function (event) {
    event.preventDefault()
})

address.addEventListener('input', function () {
    if (this.value.length != 8)
        return

    fetch(`https://viacep.com.br/ws/${this.value}/json/unicode/`)
        .then(function (response) {
            response.text().then(function (result) {
                const data = JSON.parse(result)
                console.log(data)
            })
        })
        .catch(function (err) { console.error(err) })
})

