// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'

export default class CategoriasController {public async criarCategoria({request}) {
    try {
    const { nome} = request.all()
    const novaCategoria = new Categoria()
    novaCategoria.nome = nome,
    
    
    novaCategoria.save()
  } catch (error) {
        console.log(error);
        return error
    }
}

public async listarCategoria(){
    try {
    const categoria = await Categoria.all()
    return categoria
  } catch (error){
    console.log(error);
}
}}
