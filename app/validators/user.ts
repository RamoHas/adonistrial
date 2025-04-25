import vine from "@vinejs/vine"


export const registerUserValidator = vine.compile(
    vine.object({
        fullName: vine.string(),
        email: vine.string(),
        password: vine.string().confirmed(),    
    })

)

export const loginUserValidator = vine.compile(
    vine.object({
        email: vine.string(),
        password: vine.string(),
    })
)

export const updateUserValidator = vine.compile(
    vine.object({
        email: vine.string().optional(),
        fullname: vine.string().optional(),
    })
)

