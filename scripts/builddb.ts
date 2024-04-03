import { config } from "dotenv";
import { Collection, Db, MongoClient } from "mongodb";

async function builddb(): Promise<void> {
    // Config .env
    config();

    // Get DB URL
    const dbUrl: string = process.env.DB_URL as string;
    const dbName: string = process.env.DB_NAME as string;

    // Connect to DB
    const connection: MongoClient = await MongoClient.connect(dbUrl);

    // Access to db
    const db: Db = connection.db(dbName);

    // User collection initialization
    const userCollection: Collection = await db.createCollection("User");
    await userCollection.createIndexes(
        [
            {
                name: "pk_User_username",
                key: {
                    username: 1
                }
            }
        ]
    );

    // Disconnect from db
    await connection.close();
}

builddb()
.then(
    function () {
        console.log("DB Built Successfully!");
    }
)
.catch(
    function (error: any) {
        console.error(error);
    }
)