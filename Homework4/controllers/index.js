const users = [];

module.exports = {
    index: (req, res) => {
        res.render('index', {title: 'Balkan Express', subtitle: 'Hehehe', users: users });
    },
    hehe: (req, res) => {
        res.render('hehe', {title: 'hehe Express', subitlte: 'Hehe OG'})
    },
    viewUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('view-user', { user: user});
    },
    create: (req, res) => {
        res.render('create');
    },
    postCreate: (req, res) => {
        const user = req.body;
        user.id = users.lenght +1;
        users.push(user);
        res.redirect('/');
    }
}