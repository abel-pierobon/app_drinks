import * as ExpoSQLite from "expo-sqlite";

const db = ExpoSQLite.openDatabase("sessionUser.db")

export const initSQLiteDB = () => {
    console.log("Will create table")
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, idToken TEXT NOT NULL, email TEXT NOT NULL);",
                [], 
                (_, result) => resolve(result), 
                (_, error) => reject(error) 
            )
        }) 
    })
    return promise
}


export const insertSessions = ({
    localId,
    idToken,
    email,
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO sessionUser (localId,idtoken, email) VALUES (?,?,?);',
                [localId,idToken, email], 
                (_, result) => {
                    console.log("Insert result:", result);
                    resolve(result); 
                },
                (_, error) => {
                    reject(error); 
                }
            );
        });
    });

    return promise;
}

export const sessionesIniciadas = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * from sessionUser',
                [], 
                (_, result) => resolve(result), 
                (_, error) => reject(error)
            )
        })
    })
    return promise
}
export const dropSessionsTable = () => {
    console.log("Will drop table")
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "DROP TABLE IF EXISTS sessionUser",
                (_, result) => resolve(result), //Resolve trasaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    console.log("will return promise")
    return promise
}

export const truncateSessionsTable = () => {
    console.log("Will truncate table")
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            //Define SQL statement. BEWARE of PARENTHESIS
            tx.executeSql(
                "DELETE FROM sessionUser",
                [], //Parameters
                (_, result) => resolve(result), //Resolve trasaction
                (_, error) => reject(error) //Transaction error
            )
        })
    })
    console.log("will return promise")
    return promise
}