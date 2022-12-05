import { Request, Response } from 'express';
import { Category } from './../../models/Category';

export async function createCategories(req: Request, res: Response) {

    const { icon, name} = req.body;
    const category = await Category.create({ icon, name });

    res.json(category);
}
