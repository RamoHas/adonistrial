import { loginUserValidator, registerUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'



export default class UsersController {
  public async register({ request, response }: HttpContext) {
    const payload = await request.validateUsing(registerUserValidator)
    const user = await User.create(payload)

    return response.created({
      message: 'User registered successfully',
      user,
    })
  }
 
 
  public  async login({ request,response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginUserValidator)

    const user = await User.verifyCredentials(email, password)
    // If email and password are valid, generate an access token
    const token = await User.accessTokens.create(user)
    console.log('Generated Access Token:', token)

    return response.created ({
      message: 'Login successful',
      data: {
        value: token.value!.release(),
        type: 'Bearer',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        },
      },})
    }


    public async updateUser({auth,request, response}:HttpContext){
        const user =  auth.getUserOrFail();
        const payload = await request.validateUsing(updateUserValidator)

        user?.merge(payload),
        await user?.save()

        return response.ok({
            message: 'User updated successfully',
            user: {
              id: user.id,
              email: user.email,
              fullName: user.fullName,
            },
        })

    }

  }

