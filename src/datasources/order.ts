import axios from "axios"
import { RequestOrder, RequestEditOrder } from "../stores/order/model"
import api from "../utils/api"

export const getListOrder = async (token: String) => {
    console.log( "fdsfsd token",token)
    const response = await api.get({url: 'order/list?', config: {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }}})
    console.log(response.data.results)
    return response.data.results
}

export const updateOrder = async (param: RequestEditOrder, token: String) => {
    console.log("params", param)
    console.log("token", token)
    const formData = new FormData();
    formData.append("id", param.id)
    if (param) {
        if (param.status)
            formData.append("status", param.status)
        if(param.wallet)
            formData.append("wallet", param.wallet);
        if(param.price)
            formData.append("price", param.price);
        if(param.quantity)
            formData.append("quantity", param.quantity);
    }
    
    const response = await api.put({url:'order/edit', data: formData, config: {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }}})
    console.log("edit res:",response)
    return response.data
}

export const createOrder = async (param: RequestOrder, token: String) => {
    console.log("params", param)
    console.log("token", token)
    const formData = new FormData();
    formData.append("price", param.price);
    formData.append("amount", param.amount);
    formData.append("wallet", param.wallet);
    formData.append("quantity", param.quantity);
    const response = await api.post({url:'order/create', data: formData, config: {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }}})
    console.log("create res:",response)
    return response.data
}