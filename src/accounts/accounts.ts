import {Request, RequestHandler, Response} from "express";
import OracleDB from "oracledb";
/*
    Nampespace que contém tudo sobre "contas de usuários"
*/
export namespace AccountsHandler {
    
    /**
     * Tipo UserAccount
     */
    export type UserAccount = {
        id:number| undefined;
        Completename:string;
        email:string;
        password:string;
        birthdate:string;
    };

     async function login(email:string, password:string) {
        //Ajustando a saida para objetos JS.
        OracleDB.outFormat = OracleDB.OUT_FORMAT_OBJECT;

        let connection = await OracleDB.getConnection({
            user: "ADMIN",
            password:"minhasenha",
            connectionString:"minhastringdeconexao"
        })

        let accountsRows = await connection.execute(
            'SELECT * FROM ACCOUNTS WHERE EMAIL = :email AND PASSWORD = :password',
            [email,password]

        )
            //imprimindo o que veio do oracle
    console.dir(accountsRows.rows)

    }
export const loginHandler: RequestHandler = async (req:Request,res:Response)=>{
    //obtendo os parametros queestao no header da requissição (req)
    const pEmail=req.get('email');
    const pPassword = req.get('password')

    // se as constantes pEmail e pPassword estão definidas (diferentes de undefined)
    //faz o login...
    if(pEmail && pPassword){
        login(pEmail,pPassword)
        //depois vamos complementar a resposta correta...
        //resposta temporaria
        res.statusCode = 200;
        res.send('função login executada...')
    }
    else{
        res.statusCode = 400;
        res.send("Requição invalida. Parametros faltando.")
    }
}

}
