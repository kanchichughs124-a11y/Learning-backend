const {body,ValidationResult}= require("express-validator");


async function validateResult(req,res,next){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }
    next();
}




const registerUserValidationRules = [
    body("username")
        .isString()
        .withMessage("username should be a string")
        .isLength({min:3})
        .withMessage("username should be at least 3 characters long"),
    
    body("password")
        .isString()
        .withMessage("password should be a string")
        .isLength({min:6})
        .withMessage("password should be at least 6 characters long"),

    validateResult

]

