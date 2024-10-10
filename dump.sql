CREATE TABLE ACCOUNTS(
        ID INTEGER NOT NULL PRIMARY ,
        COMPLETE_NAME VARCHAR2(500) NOT NULL UNIQUE 
        EMAIL VARCHAR2(500) NOT NULL UNIQUE,
        PASSWORD VARCHAR2(36) NOT NULL  
        )

        CREATE SEQUENCE SEQ_ACCOUNTS START WITH 1 INCREMENT BY 1

        INSERT INTO ACCOUNTS(
            ID,
            COMPLETE_NAME,
            EMAIL,
            PASSWORD,
            CREATED_AT DATE DEFAULT SYSDATE
        ) VALUES(
                SEQ_ACCOUNTS.NEXTVAL,
                'MARCELO OLVIEIRA',
                'MARCELO.fmo@puccampinas.edu.br',
                '123qwe'
        )


            INSERT INTO ACCOUNTS(
            ID,
            COMPLETE_NAME,
            EMAIL,
            PASSWORD
        ) VALUES(
                SEQ_ACCOUNTS.NEXTVAL,
                'JOAO MARCOS',
                'JOAO.qcd@puccampinas.edu.br',
                '98765'
        )

        COMMIT;