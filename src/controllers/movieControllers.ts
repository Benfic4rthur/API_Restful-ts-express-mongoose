import { Request, Response } from 'express';

//Model
import { MovieModel } from '../models/Movie';

//Logger

import Logger from '../../config/logger';
import { get } from 'config';

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = new MovieModel(data);
        return res.status(201).json(movie);
    } catch (e: any) {
        Logger.error(`Error creating movie ${e.message}`);
    }
}
//CRIAR UM MOVIEMODEL.FIND ISSO É LOUCURA MINHA E DO SANTIAGO
export async function findMovieById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        return res.status(200).json(movie);
    } catch (e: any) {
        Logger.error(`Error getting movie ${e.message}`);
    }
}
export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (e: any) {
        Logger.error(`Error getting movies ${e.message}`);
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await MovieModel.findByIdAndDelete(id);
        return res.status(200).json({ msg: 'Movie deleted' });
    } catch (e: any) {
        Logger.error(`Error deleting movie ${e.message}`);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        await MovieModel.findByIdAndUpdate(id, data);
        return res.status(200).json({ msg: 'Movie updated' });
    } catch (e: any) {
        Logger.error(`Error updating movie ${e.message}`);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}
