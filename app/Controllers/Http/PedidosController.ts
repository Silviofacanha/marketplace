// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Pedido from 'App/Models/Pedido'

export default class PedidosController {public async criarPedido({request}) {
    try {
        const { numeroPedido, data, cliente, vendedor} = request.all()
        const novaPedido = new Pedido()
        novaPedido.numeroPedido = numeroPedido,
        novaPedido.data = data,
        novaPedido.cliente_id = cliente,
        novaPedido.vendedor_id = vendedor,
        novaPedido.save()
      } catch (error) {
            console.log(error);
            return error
        }
    }

    public async listarPessoas (){
        try {
        const pedidos = await Pedido.all()
        return pedidos
      } catch (error){
        console.log(error);
    }
}}

