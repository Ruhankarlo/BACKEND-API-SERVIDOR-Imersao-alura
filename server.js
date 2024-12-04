import express from "express";

const app = express();

const post = [
    {
        descricao: "Descrição da imagem"
        imagem: "https://placecats.com/millie/500/350"
    }
];

app.use(express.json);

app.listen(3000, () => {
    console.log("Servidor escutando...");
}); 

app.get("/posts", (req, res) => {
    res.status(200).send("Rota numero 1")
} ); 