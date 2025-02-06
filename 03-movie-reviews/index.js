import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://atomicnaut:7321@cluster0.6zu8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
