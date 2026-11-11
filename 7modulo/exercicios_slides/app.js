import express from 'express';
import contatos from './contatos.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/contatos', (req, res) =>  {

    res.status(200).json(contatos);
});

app.get('/contatos/:id', (req, res) => {
    
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send('id tem que ser número!');
    }

    const contato = contatos.find(contato => contato.id === id);
    if (!contato) {
        return res.status(404).send("Contato não encontrado")
    }
    res.json(contato);

    res.send('ok');
})


app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`);
});