import {Client} from "redis-om";

const url = process.env.REDIS_URL;

const client = await new Client().open(url);

console.log("connected to database")

export default client;