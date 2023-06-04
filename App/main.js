const express=require('express');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
const cookieParser=require('cookie-parser');
app.use(cookieParser());  


const userRouter=require('./Routers/userRouter');
const authRouter=require('./Routers/authRouter');
const homeRouter=require('./Routers/homeRouter');

app.use('/',homeRouter)
app.use('/user',userRouter);
app.use('/auth',authRouter);




//Database helpers
const subjectRouter=require('./Database storing helpers/subjectRouter');
const PoolRouter=require('./Database storing helpers/PoolRouter');
app.use('/subject',subjectRouter)
app.use('/pool',PoolRouter)






const port = process.env.PORT || 7000;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(`http://${host}:${port}`));
