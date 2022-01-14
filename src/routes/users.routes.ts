
import { Router } from "express";
import "reflect-metadata";
import { CreateUSerController } from "../modules/Users/controllers/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUSerController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    })
} )


export { usersRoutes };