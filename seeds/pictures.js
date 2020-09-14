const fs = require("fs");
const db = require("../server/knex");

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    try {
        const pictures = JSON.parse(fs.readFileSync("data/pictures.json"));
        for (let picture of pictures) {
            let name = picture.name;
            let id = picture.id;
            let numbers = JSON.stringify(picture.numbers);
            let picArray = JSON.stringify(picture.picArray);

            console.log(name);

            const result = await db('pictures')
                .del()
                .then(function() {
                    // Inserts seed entries
                    return db('pictures').insert([{
                        id: id,
                        name: name,
                        numbers: numbers,
                        picArray: picArray,
                    }, ])
                })
            console.log(result);
        }
    } catch (err) {
        console.error("Error inserting records", err);
    }
}