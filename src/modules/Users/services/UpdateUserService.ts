import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
    id: string;
    name: string;
    username: string;
    birthdate: string;
    address: string;
    addresNumber: string;
    primaryPhone: string;
    description: string;
}


class UpdateUserService {
    async execute({ 
        id,   
        name, 
        username, 
        birthdate, 
        address, 
        addresNumber, 
        primaryPhone, 
        description}: IUserRequest) {

        const userRespositories = getCustomRepository(UserRepositories)

        const user = await userRespositories.findOne(id)

        if (!user) {
            return Error("Category does not exists!")
        }

        user.name = name ? name : user.name
        user.username = username ? username : user.username
        user.birthdate = birthdate ? birthdate : user.birthdate
        user.address = address ? address : user.address
        user.addresNumber = addresNumber ? addresNumber : user.addresNumber
        user.primaryPhone = primaryPhone ? primaryPhone : user.primaryPhone
        user.description = description ? description : user.description

        await userRespositories.save(user)

        return user

    }
}

export { UpdateUserService };