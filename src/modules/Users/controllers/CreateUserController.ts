import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUSerController {
    async handle(request: Request, response:Response) {
        const {
            name, 
            username, 
            birthdate, 
            address, 
            addresNumber, 
            primaryPhone, 
            description
        } = request.body
        console.log(name, 
            username, 
            birthdate, 
            address, 
            addresNumber, 
            primaryPhone, 
            description)
        const createUserService = new CreateUserService()

        const user = createUserService.execute({
            name, 
            username, 
            birthdate, 
            address, 
            addresNumber, 
            primaryPhone, 
            description
        })

        return response.json(user)
    }
}

export { CreateUSerController }