import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";


interface IUserRequest {
    name: string;
    username: string;
    birthdate: string;
    address: string;
    addresNumber: string;
    primaryPhone: string;
    description: string;
}

class CreateUserService {


async execute({ 
    name, 
    username, 
    birthdate, 
    address, 
    addresNumber, 
    primaryPhone, 
    description }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    const user = userRepository.create({ 
        name, 
        username, 
        birthdate, 
        address, 
        addresNumber, 
        primaryPhone, 
        description
    })

    await userRepository.save(user)

    return user
    }
}

export { CreateUserService };