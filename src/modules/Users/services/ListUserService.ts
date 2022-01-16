import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

class ListUserService {
    async execute() {
        const userRespositories = getCustomRepository(UserRepositories)

        const users = await userRespositories.find();

        return users;
    }
}

export { ListUserService };