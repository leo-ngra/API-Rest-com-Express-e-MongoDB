import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
        res.status(200).json(livros)
    })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {

            if (err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`});
            } else {
                res.statuys(201).send(livro.toJSON());
            }
        })
    }

}

export default LivroController;