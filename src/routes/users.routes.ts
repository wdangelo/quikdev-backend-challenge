
import { Router } from "express";
import "reflect-metadata";

const usersRoutes = Router();


usersRoutes.post("/");

usersRoutes.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    })
} )


export { usersRoutes };