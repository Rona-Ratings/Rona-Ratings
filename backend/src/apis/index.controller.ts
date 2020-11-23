import {Request, Response} from "express";

export function indexController(request: Request, response: Response): Response {
    console.log("hello world!")
    return response.json('🤯 😬 😱')
}