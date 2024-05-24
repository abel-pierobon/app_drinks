import * as ExpoSQLite from "expo-sqlite";
import { Platform } from "react-native";
let db = null;
if (Platform.OS !== "web") db = ExpoSQLite.openDatabase("sessionUser.db");

export const initSQLiteDB = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT PRIMARY KEY NOT NULL, idToken TEXT NOT NULL, email TEXT NOT NULL);",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise;
};

export const insertSessions = ({ localId, idToken, email }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO sessionUser (localId,idtoken, email) VALUES (?,?,?);",
                [localId, idToken, email],
                (_, result) => {
                    resolve(result);
                },
                (_, error) => {
                    reject(error);
                }
            );
        });
    });

    return promise;
};

export const sessionesIniciadas = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * from sessionUser",
                [],
                (_, result) => resolve(result),
                (_, error) => reject(error)
            );
        });
    });
    return promise;
};
export const dropSessionsTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DROP TABLE IF EXISTS sessionUser",
                (_, result) => resolve(result), 
                (_, error) => reject(error) 
            );
        });
    });
    return promise;
};

export const truncateSessionsTable = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM sessionUser",
                [], 
                (_, result) => resolve(result), 
                (_, error) => reject(error) 
            );
        });
    });
    return promise;
};
