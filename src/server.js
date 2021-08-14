import express from "express";

const PORT = 4000;

const PORT = express();

const homehandleHome = () => console.log("Somebody is trying to go home.");
app.get("/", homehandleHome);

const handleListening = () => 
    console.log('Server listening on port http://localhost:${PORT}');

app.listen(PORT, handleListening);
