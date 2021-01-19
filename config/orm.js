const connection = require ('./connection')

//selectAll()
//insertOne()
//updateOne()

const orm = {
    selectAll: function () {
        connection.query ('SELECT * FROM burger_db', function (error, response){
            if (error) throw error;
            console.log (response)
        })

    },
    insertOne: function (name, devoured) {
        connection.query (`INSERT INTO burgers (burger_name,devoured) VALUES ('${name}','${devoured}')`, function (error, response){
            if (error) throw error;
            console.log (response)
        })

    },
}