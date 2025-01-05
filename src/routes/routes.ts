import  express  from "express";
import { validateFunction } from "../controllers/cpfController";


const router = express.Router();

// Define uma simples routa
router.get("/validate/:cpf", validateFunction);



export default router;