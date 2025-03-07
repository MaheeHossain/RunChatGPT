import express from "express";

/* Require the controllers */
import demoController from "../controllers/demoController";

/* Define the router */
const demoRouter = express.Router();

// get all demo
demoRouter.get("/", demoController.getAllDemo);