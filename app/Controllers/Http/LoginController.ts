// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {

public async adicionarLogin({ auth, request, response}) {
    const email = request.input('email')
    const password = request.input('senha')
    try {
        const token = await auth.use('api').attempt(email,password)
        return token
    }   catch (error) {
        console.log(error);

        return response.badRequest('Crendenciais invalidas')
    }
}
}