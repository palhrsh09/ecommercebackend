import { NextFunction, Request, Response } from "express";

export interface NewUserRequestBody {
    name: String;
    email: String;
    photo: String;
    gender: String;
    role: String;
    _id: String;
    dob: Date;
}

export type ControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | Response<any, Record<string, any>>>;