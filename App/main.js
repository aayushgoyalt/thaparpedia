const express=require('express');
const app=express();

app.use(express.json());
const cookieParser=require('cookie-parser');
app.use(cookieParser());  


const userRouter=require('./Routers/userRouter');
const authRouter=require('./Routers/authRouter');
const homeRouter=require('./Routers/homeRouter');
const subjectRouter=require('./Routers/subjectRouter');

app.use('/',homeRouter)
app.use('/subject',subjectRouter)
app.use('/user',userRouter);
app.use('/auth',authRouter);





const port = process.env.PORT || 7000;
const host = '127.0.0.1';

app.listen(port, host, () => console.log(`http://${host}:${port}`));
