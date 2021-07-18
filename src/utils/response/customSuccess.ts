import { Response } from "express-serve-static-core";
import { response } from "express";

//https://joeflateau.net/posts/extending-express-request-response-objects-in-typescript
// augment the `express-serve-static-core` module
// declare module "express-serve-static-core" {
//     // first, declare that we are adding a method to `Response` (the interface)
//     export interface Response {
//         customSuccess(httpStatusCode: number, message: string, data: any = null): this;
//     }
// }

// now actually add it to `response` (the prototype)
response.customSuccess = function (httpStatusCode: number, message: string, data: any = null): Response {
    return this.status(httpStatusCode).json({ success: true, message, data });
};