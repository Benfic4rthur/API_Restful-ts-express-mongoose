import { body } from "express-validator";
export const movieCreateValidation = () => {
    return [
        body("title").isString().withMessage("Title is required").isLength({min: 2}).withMessage("Title must be at least 2 characters long"),
        body("rating").isNumeric().withMessage("Rating is required").isLength({min: 1}).withMessage("Rating must be at least 1 character long").custom((value) => {
            if (value < 0 || value > 10) {
                throw new Error("Rating must be between 0 and 10");
                }  // end if
                return true;
            }), // end custom
        body("description").isString().withMessage("Description is required").isLength({min: 2}).withMessage("Description must be at least 2 characters long"),
        body("director").isString().withMessage("Director is required").isLength({min: 2}).withMessage("Director must be at least 2 characters long"),
        body("genre").isString().withMessage("Genre is required").isLength({min: 2}).withMessage("Genre must be at least 2 characters long"),
        body("year").isNumeric().withMessage("Year is required").isLength({min: 4}).withMessage("Year must be at least 4 characters long").custom((value) => {
            if (value < 1888 || value > 2021) {
                throw new Error("Year must be between 1888 and 2021");
                }  // end if
                return true;
            }), // end custom
        body("stars").isArray().withMessage("Stars is required").isLength({min: 1}).withMessage("Stars must be at least 1 character long"),
        body("poster").isString().withMessage("Poster is required").isLength({min: 2}).withMessage("Poster must be at least 2 characters long"),
    ];
};