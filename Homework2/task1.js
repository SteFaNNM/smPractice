const moduleFaker = require('@faker-js/faker');

let arrayData = [];

for(i=0, i<=10, i++){
    let first_Name = moduleFaker.faker.name.firstName();
    let last_name = moduleFaker.faker.name.lastName();
    let address = moduleFaker.faker.address.city();
    let gender = moduleFaker.faker.gender();
    let company_name = moduleFaker.faker.company.companyName();


    arrayData.push({
        first_Name:first_Name,
        last_name: last_name,
        address:address,
        gender:gender,
        company_name:company_name
    })

    console.log(arrayData);