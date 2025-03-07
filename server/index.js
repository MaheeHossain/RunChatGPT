import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

/* Import routers here */
import demoRouter from './routes/demoRouter';

/* Import express and choose port number */
const app = express();
const port = process.env.PORT || 5000;  

/* Set up body parser */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* Database */ // env file doesn't work?
// const MONGO_URL = process.env.REACT_APP_CONNECTION_URL
//     //.replace("<username>", process.env.REACT_APP_MONGO_USERNAME)
//     .replace("<password>", process.env.REACT_APP_MONGO_PASSWORD);
const MONGO_URL = "mongodb+srv://resumeAdmin:INL(IINWY)@runchatgpt.6xetl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server started on port ${port}`)))
    .catch((error) => console.log(error.message));

/* Route initialisations */
app.use("/demo", demoRouter);

/* Send remaining requests to React app */
app.get("/*", () => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

/* Server initialisation */
// app.listen(port, console.log(`Server started on port ${port}`));