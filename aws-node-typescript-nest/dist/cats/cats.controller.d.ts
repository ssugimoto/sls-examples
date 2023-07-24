import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
export declare class CatsController {
    findAll(request: Request): string;
    findOne(id: string): string;
    create(request: Request, createCatDto: CreateCatDto): string;
}
