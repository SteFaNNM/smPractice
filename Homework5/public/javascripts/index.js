//onst { json } = require("express");

function updateUser(userId) {
    const form = document.getElementById('form');
    const user = {
        id: userId,
        name: form.name.value,
        lastname: form.lastname.value,
        ssn: form.ssn.value,
        email: form.email.value
    }

    fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        if (data.success) {
            window.location.replace("http://localhost:3000/");
        }
    }).catch(function (err) {
        console.warn("Something went wrong", err)
    });

};

function deleteUser(userId) {
    const form = document.getElementById('form');
    

    fetch(`http://localhost:3000/user/${userId}`, {
        method: 'DELETE',
        body: null,
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        
        if (data.success) {
            window.location.replace("http://localhost:3000/");
        }
    }).catch(function (err) {
        
        console.warn('Something went wrong.', err);
    });
};