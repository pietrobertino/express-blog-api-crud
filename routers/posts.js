const express = require("express");
const router = express.Router();
const port = 3020;



let posts = [
    { id: 1, title: "Primo post", body: "Questo è il contenuto del primo post", img: `http://localhost:${port}/imgs/city.jpg`, tags: ["tech", "programming"] },
    { id: 2, title: "Secondo post", body: "Questo è il contenuto del secondo post", img: `http://localhost:${port}/imgs/grass.jpg`, tags: ["lifestyle", "travel"] },
    { id: 3, title: "Terzo post", body: "Questo è il contenuto del terzo post", img: `http://localhost:${port}/imgs/man.jpg`, tags: ["food", "cooking"] },
    { id: 4, title: "Quarto post", body: "Questo è il contenuto del quarto post", img: `http://localhost:${port}/imgs/sea.jpg`, tags: ["fitness", "health"] },
    { id: 5, title: "Quinto post", body: "Questo è il contenuto del quinto post", img: `http://localhost:${port}/imgs/street.jpg`, tags: ["fashion", "style"] }
];


//Index
router.get('/', (req, res) => {
    res.json(posts);
})

//Show
router.get('/:id', (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        res.json(post)
    } else { res.send("Non esiste nessun post con id = " + req.params.id) }
})

//Store 
router.post('/', (req, res) => {
    res.send('Aggiungi un post');
})

//Update
router.put('/:id', (req, res) => {
    res.send('Aggiorna interamente il post con id = ' + req.params.id);
})

//Modify
router.patch('/:id', (req, res) => {
    res.send('Aggiorna parzialmente il post con id = ' + req.params.id);
})

//Destroy
router.delete('/:id', (req, res) => {
    //dobbiamo rimuovere un post, come fare?
    const newPosts = posts.filter(post => post.id != req.params.id);
    posts = newPosts;
    res.json(posts);

})

module.exports = router;