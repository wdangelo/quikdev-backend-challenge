import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";
import { isPhone, formatToPhone } from "brazilian-values";


class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const { 
            name,
            username,
            birthdate,
            address,
            addresNumber,
            primaryPhone,
            description
                 } = request.body

        const updateUserService = new UpdateUserService()

        if(!isPhone(primaryPhone)) {
            throw new Error('incorrect phone format!')
        }

        const user = updateUserService.execute({
            id,
            name,
            username,
            birthdate,
            address,
            addresNumber,
            primaryPhone: formatToPhone(primaryPhone),
            description
        })

        if ( user instanceof Error) {
            return response.status(400).json(user.message)
        }

        return response.json(user)
    }
}

export { UpdateUserController }