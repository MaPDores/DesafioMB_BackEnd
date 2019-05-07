import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from './routes';
require('dotenv-extended').load();
require('./database/mongodb/database');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

app.use((err, req, res)=>{
    if(err.name === 'UnauthorizedError'){
        res.status(401).json({ error: 'UnauthorizedError' });
    }
});

app.listen(PORT);