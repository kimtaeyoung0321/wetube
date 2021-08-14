import express from "express";

const PORT = express();

const handleListening = () => console.log('Server listening on port http://localhost:${PORT}');

app.listen(PORT, handleListening);
