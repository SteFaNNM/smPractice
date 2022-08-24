function updateInfo(carId) {
    const form = document.getElementById('form');
    const car = {
        id: carId,
        car_name: form.car_name.value,
        car_type: form.car_type.value,
        year: form.year.value,
        color: form.color.value,
        in_stock: form.in_stock.value

    }

    fetch(`http://localhost:3005/car/${carId}`, {

        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(function (response) {
        if (response.ok) {
            return response.json();

        }else {
            return Promise.reject(response);
        }
    }).then(function (data) {
        if (data.success) {
            window.location.replace("http://localhost:3005/");
        }
    }).catch(function (err) {
        console.warn("Error !!!",  err);
    });



};


function deleteCar(carId) {
    
    fetch(`http://localhost:3005/car/${carId}`, {
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
            window.location.replace("http://localhost:3005/");
        }
    }).catch(function (err) {
        
        console.warn('Error !!!', err);
    });

   
};