const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
//CROSE => BU SERWERLAR BOSHQA BASHQA BOLGANDA ISHLAYN KEYTADIGAN XATOLICK

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*')
//     res.setHeader('Access-Control-Allow-Method','GET,POST,PUT,PUTCH,DELETE')
//     res.setHeader('Access-Control-Allow-Headers','Content-Type','Authorization')
//     next()
// })
app.use(cors())
app.use('/posts',require('./routes/post.route'))

const PORT = process.env.PORT || 3000



app.listen(PORT,() =>{
    console.log(`server running on the  port:${PORT}`);
})