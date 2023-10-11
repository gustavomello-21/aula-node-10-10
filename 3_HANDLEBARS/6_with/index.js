const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender node.js",
        comments: 4
    }

    res.render('post', { post })
})

app.get('/dashboard', (req, res) => {
    const items = ['item a', 'item b', 'item c']

    res.render('dashboard', { items })
})

app.get('/', (req, res) => {
    const user = {
        nome: "joão",
        profissao: "Desenvolvedor",
        idade: 24
    }

    const auth = true

    res.render('home', { user, auth } )
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})
