const path= require('path')
const sqlite = require('sqlite3').verbose()
const db  = new sqlite.Database(path.resolve(__dirname,'..','database','posts.db'),err=>{
    if (err) throw err
})

const  getAllPost = (req,res)=>{
    const posts = db.all('SELECT * FROM post_ru',[],(err, rows)=>{
        if(err) throw err
        res.status(200).send(rows)
    })
    console.log(posts);
}

const addNewPost = (req,res) =>{
  const post=  db.run(`INSERT INTO post_ru(title,post ) VALUES( ?,?) RETURNING *`,
    [req.body.title,req.body.post])
   
    res.status(201).send('Data seccessfuly add')
}
const getByIdPost = (req,res)=>{
  db.all(`SELECT * FROM post_ru WHERE id = ${req.params.id}`,[],(err,rows)=>{
        if(err) throw err
        if(!rows[0]){
            return res.status(400).send('Record not found')
        }
        return res.status(200).json(rows[0])
    })
}
const updatePost = (req,res) =>{
   db.run(`UPDATE post_ru SET title =?, post = ?  WHERE id = ?`,[req.body.title,req.body.post,req.params.id],(err,row)=>{
        if (err) throw err
        
        res.status(200).send('data seccessfuly update')
    })
}
const deletePost = (req, res)  =>{
    db.run(`DELETE FROM post_ru WHERE id = ${req.params.id}`,[],err=>{
        if(err) throw err
        res.status(200).send(' Data successfuly  Delete')
    })
}

module.exports = {
    getAllPost,
    addNewPost,
    getByIdPost,
    updatePost,
    deletePost
}