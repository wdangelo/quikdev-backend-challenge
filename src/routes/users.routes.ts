
import { Router } from "express";
import "reflect-metadata";
import { CreateUSerController } from "../modules/Users/controllers/CreateUserController";
import { DeleteUserController } from "../modules/Users/controllers/DeleteUserController";
import { ListUsersController } from "../modules/Users/controllers/ListUsersController";
import { UpdateUserController } from "../modules/Users/controllers/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUSerController();

const listUsersController = new ListUsersController();

const updateUserController = new UpdateUserController()

const deleteUserController = new DeleteUserController();

usersRoutes.get("/", listUsersController.handle)

usersRoutes.post("/", createUserController.handle);

usersRoutes.put("/:id", updateUserController.handle)

usersRoutes.delete("/:id", deleteUserController.handle)


export { usersRoutes };