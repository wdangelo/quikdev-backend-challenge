import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { isPhone, formatToPhone } from "brazilian-values";

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

        const createUserService = new CreateUserService()

        if(!isPhone(primaryPhone)) {
            throw new Error('incorrect phone format!')
        }
        const user = createUserService.execute({
            name, 
            username, 
            birthdate, 
            address, 
            addresNumber, 
            primaryPhone: formatToPhone(primaryPhone), 
            description
        })

        return response.json(user)
    }
}

export { CreateUSerController }