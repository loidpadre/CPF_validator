import { Request, Response } from "express";
import { validateCPF } from "../services/cpfService";



export const validateFunction = (req: any, res: any)=>{
    const { cpf } = req.params;

    if(!cpf){
        return res.status(400).json({message:  "O CPF é obrigatorio!"});
    }

    const isValid = validateCPF(cpf);
    
    if(!isValid){
        return res.status(400).json({message:  "CPF inválido!"});
    } else{
        return res.status(200).json({message:  "CPF válido!"});
    }

}


