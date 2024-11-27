const express=require('express');
const fs = require('fs');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
const cookieParser=require('cookie-parser');
app.use(cookieParser());  


const userRouter=require('./Routers/userRouter');
const authRouter=require('./Routers/authRouter');
const homeRouter=require('./Routers/homeRouter');
const protectRouter=require('./Routers/protectRouter');

app.use('/',homeRouter)
app.use('/user',userRouter);
app.use('/auth',authRouter);
app.use('/protect',protectRouter);




//Database helpers
const subjectRouter=require('./Database storing helpers/subjectRouter');
const PoolRouter=require('./Database storing helpers/PoolRouter');
app.use('/subject',subjectRouter)
app.use('/pool',PoolRouter)











app.get('/acad/pdf', (req, res) => {
    var path=req.query
    var data =fs.readFileSync(path.link,{root:__dirname});
    res.contentType("application/pdf");
    res.send(data);
  });









const port = process.env.PORT || 7000;

app.listen(port, host, () => console.log(`http://localhost:${port}`));
  