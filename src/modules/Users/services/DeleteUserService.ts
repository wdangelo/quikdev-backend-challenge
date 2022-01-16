import { getCustomRepository, getRepository } from "typeorm";
import { Users } from "../entities/Users";
import { UserRepositories } from "../repositories/UserRepositories";



class DeleteUserService {
    async execute(id: string){

        const userRespositories = getCustomRepository(UserRepositories)

        if (!(await userRespositories.findOne(id))) {
            return new Error("User does not exists!")
        }

        await userRespositories.delete(id)
    }
}

export { DeleteUserService };