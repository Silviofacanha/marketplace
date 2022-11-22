// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ItemPedido from 'App/Models/ItemPedido'

export default class ItemPedidosController  {
    public async criarItemPedido({request}) {
    try {
    const { pedido, produto} = request.all()
    const novaItemPedido = new ItemPedido()
    novaItemPedido.pedido_id = pedido,
    novaItemPedido.produto_id = produto,
    
    novaItemPedido.save()
  } catch (error) {
        console.log(error);
        return error
    }
}

public async listarItemPedido(){
    try {
    const itemPedido = await ItemPedido.all()
    return itemPedido
  } catch (error){
    console.log(error);
}
}}



