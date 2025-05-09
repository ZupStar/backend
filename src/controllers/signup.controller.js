import { HttpStatusCode } from 'axios'
import { signup } from '../dtos/signup.dto.js'
import { sucResponse, errResponse } from '../config/baseResponse.js'
import * as response from '../config/response.js'
import signup_service from '../services/signup.service.js'

export default class signup_controller {
    static async signup(req, res) {    
        const user_id = req.body.id
        const user_password = req.body.password
        const user_name = req.body.name
        
        const data = new signup({user_id,user_password,user_name})
        try{
            const signupResponse = await signup_service.singup(data)
            console.log(signupResponse)
            res.status(HttpStatusCode.Ok).json(sucResponse(response.USER_SIGNUP_SUCCESS,signupResponse.user_index)) 
        }
        catch(err){
            console.log(err)
            res.status(HttpStatusCode.InternalServerError).json(errResponse(response.USER_SIGNUP_FAIL,err))
        }
    }
}
