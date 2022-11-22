// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutosController { public async criarProduto({request}) {
    try {
        const { nome, foto, preco, categoria, user} = request.all()
        const novaProduto = new Produto()
        novaProduto.nome = nome,
        novaProduto.foto = foto,
        novaProduto.preco = preco,
        novaProduto.categoria_id =categoria,
        novaProduto.user_id =user,
        novaProduto.save()
        
      } catch (error) {
            console.log(error);
            return error
        }
    }

    public async listarProduto (){
        try {
        const produtos = await Produto.all()
        return produtos
      } catch (error){
        console.log(error);
    }
}
}
