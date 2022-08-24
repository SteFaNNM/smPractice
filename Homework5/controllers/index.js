const users = [{id: 1, name: 'Stefan', lastname: 'Mitevski', ssn:'123456789', }]

module.exports = {
    index: (req, res) => {
        res.render('index', {title: 'User List',  users: users })
    },

    // hehe: (req, res) => {
    //     res.render('hehe', {title: 'Hehe Express', subtitle: 'hehe OG'})
    // },

    viewUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);
    
        res.render('view-user', {user: user});
    },

    editUser: (req, res) => {
        const user = users.find(user => user.id == req.params.id);

        res.render('edit-user', { user: user});
    },

    create: (req, res) => {
        res.render('create');
    },

    postCreate: (req, res) => {
        const user = req.body;
        user.id = users.lenght +1;

        users.push(user);

        res.redirect('/');
    },

    putEditUser: (req, res) => {
        userIndex = users.findIndex((user => user.id == req.params.id));
        users[userIndex] = req.body;

        res.send({
            success: true
        });
    },

    deleteUser: (req, res) => { 
        userID = users.findIndex((user => user.id == req.params.id));

        users.splice(userID,1);
        
        res.send({
            success: true
        });


    }

}