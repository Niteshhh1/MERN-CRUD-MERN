const express = require('express');
const cors = require('cors')
const dbconnect = require('./db/dbconnect')
const userRouter = require('./routes/userRoute')

const app = express();

app.use(cors())
app.use(express.json());
dbconnect();

app.get('/',(req,res)=>{
    res.send("chal gya bc");
})

app.use('/api',userRouter);

app.listen(5000)
