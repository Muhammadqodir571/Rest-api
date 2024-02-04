const sqlite = require('sqlite3').verbose()
const db  = new sqlite.Database('./posts.db',err=>{
    if (err) throw err
})

const createPost = `
CREATE TABLE post_ru(
    id INTEGER PRIMARY KEY,
    title VARCHAR(69),
    post VARCHAR(345)
)
`


db.run( createPost)