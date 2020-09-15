const fs = require("fs");
const db = require("../server/knex");

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    try {
        await db('pictures')
            .del()
        const pictures = JSON.parse(fs.readFileSync("data/pictures.json"));
        for (let picture of pictures) {
            let name = picture.name;
            let id = picture.id;
            let introduction = JSON.stringify(picture.introduction);
            let author = picture.author;
            let numbers = JSON.stringify(picture.numbers);
            let picArray = JSON.stringify(picture.picArray);

            console.log(name);

            const result = await db('pictures').insert([{
                id,
                name,
                author,
                numbers,
                picArray,
                introduction
            }])
            console.log(result);
        }
    } catch (err) {
        console.error("Error inserting records", err);
    }
}