// import * as ExpoSQLite from "expo-sqlite"

// const db = ExpoSQLite.openDatabase("sessions.db")

// export const initSQLiteDB = () => {
//     console.log("Will create table")
//     const promise = new Promise((resolve, reject) => {
//         db.transaction((tx) => {
//             //Define SQL statement. BEWARE of PARENTHESIS
//             tx.executeSql(
//                 "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL);",
//                 [], //Parameters
//                 (_, result) => resolve(result), //Resolve trasaction
//                 (_, error) => reject(error) //Transaction error
//             )
//         })
//     })
//     console.log("will return promise")
//     return promise
// }
