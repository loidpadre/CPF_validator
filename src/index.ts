import express from "express"
import router from "./routes/routes";

const PORT = 3000;
const app = express();
app.use(express.json());


app.use("/api", router);
app.listen(PORT, () =>{
    console.log(`Servidor rodando em http://localhost:${PORT}`)
} )