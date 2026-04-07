const posts = require('../data/posts')


const index = (req, res) => {
    res.json(posts);
}

const show = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        res.json(post)
    } else { res.send("Non esiste nessun post con id = " + req.params.id) }
}

const store = (req, res) => {
    res.send('Aggiungi un post');
}


const update = (req, res) => {
    res.send('Aggiorna interamente il post con id = ' + req.params.id);
}


const modify = (req, res) => {
    res.send('Aggiorna parzialmente il post con id = ' + req.params.id);
}


const destroy = (req, res) => {
    const post = posts.find(post => post.id == req.params.id)
    if (post) {
        const index = posts.indexOf(post);
        posts.splice(index, 1);
        res.json(posts);
    } else {
        res.send("Non esiste nessun post con id = " + req.params.id)
    }

}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}