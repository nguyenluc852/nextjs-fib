import axios from "axios"
import { RequestOrder, RequestEditOrder } from "../stores/order/model"
import api from "../utils/api"
import { RequestStake } from "../stores/stake/model"

export const getStake = async (token: String, wallet: string) => {
    let paramUrl = new URLSearchParams()
   
    paramUrl.append("wallet", wallet)

    const response = await api.get({url: 'stake/get?' + paramUrl, config: {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }}})
    console.log(response.data.stakeReturn)
    return response.data.stakeReturn
}

export const updateOrder = async (param: RequestEditOrder, token: String) => {
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

export const createStake = async (param: RequestStake, token: String) => {
    const formData = new FormData();
    formData.append("time_exprire", param.time_expire);
    formData.append("amount", param.amount);
    formData.append("wallet", param.wallet);
    const response = await api.post({url:'stake/create', data: formData, config: {headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ token
      }}})
    return response.data
}