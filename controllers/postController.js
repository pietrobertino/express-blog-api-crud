const posts = require('../data/posts')


const index = (req, res) => {
    let filteredPosts = posts;
    if (req.query.tag) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag));
    }
    res.json(filteredPosts);
}

const show = (req, res) => {
    const id = Number(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post not found"
        })
    }

    res.json(post);
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
    const id = Number(req.params.id);
    const post = posts.find(post => post.id === id);
    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
    res.sendStatus(204);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}