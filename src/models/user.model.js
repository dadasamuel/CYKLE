import {Entity, Schema} from "redis-om";

import client from "../db/user.db.js";

class User extends Entity{}
const userSchema = new Schema(User, {
    companyName: { type: "string" },
    personName: { type: "string" },
    companyEmail: { type: "string" },
    briefOfProject: { type: "string" },
    phoneNumber: { type: "string" },
});

export const userRepository = client.fetchRepository(userSchema);

await userRepository.createIndex();