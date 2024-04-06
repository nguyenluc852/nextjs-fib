import axios from "axios"
import { RequestConstract, RequestCreateConstract, RequestEditConstract } from "../stores/constract/model"
import api from "../utils/api"

export const getListConstract = async (param: RequestConstract) => {
    let paramUrl = new URLSearchParams()
    if (param) {
        if(param.block) {
            paramUrl.append("block", param.block)
        }
        if(param.room) {
            paramUrl.append("room", param.room)
        }
        if(param.fullName) {
            paramUrl.append("fullName",param.fullName)
        }
        if(param.signDateStart) {
            paramUrl.append("startDate",param.signDateStart)
        }
        if(param.signDateEnd) {
            paramUrl.append("endDate", param.signDateEnd)
        }
        if(param.status) {
            paramUrl.append("status", param.status)
        }
    }

    console.log(paramUrl)
    const response = await api.get({url: 'constract/list?' + paramUrl})
    console.log(response.data.results)
    return response.data.results
}

export const updateConstract = async (param: RequestEditConstract) => {
    console.log("params", param)
    const formData = new FormData();
    formData.append("constractId", param.id)
    formData.append("roomId", param.roomId)
    formData.append("userId", param.customerId)
    if (param) {

        if (param.status)
            formData.append("status", param.status)
        if(param.cccd)
            formData.append("cccd", param.cccd);
        if(param.fullName)
            formData.append("fullName", param.fullName);
        if(param.birthday)
            formData.append("birthday", param.birthday);
        if(param.phoneNumber)
            formData.append("phoneNumber", param.phoneNumber);
        if(param.email)
            formData.append("email", param.email);
        if(param.address)
            formData.append("address", param.address);
        if(param.totalPerson)
            formData.append("totalPerson", param.totalPerson);
        if(param.roomId)
            formData.append("roomId", param.roomId);
        if(param.otherPrice)
            formData.append("otherPrice", param.otherPrice);
        if(param.gender)
            formData.append("gender", param.gender.toString());
        if(param.deposit)
            formData.append("deposit", param.deposit);
    }
    
    const response = await api.put({url:'constract/edit', data: formData, config: {headers: {
        'Content-Type': 'multipart/form-data'
      }}})
    console.log("edit res:",response)
    return response.data
}

export const createConstract = async (param: RequestCreateConstract) => {
    console.log("params", param)
    const formData = new FormData();
    param.cccd.map(image => {
        formData.append("cccd", image);
    })
    formData.append("fullName", param.fullName);
    formData.append("birthday", param.birthday);
    formData.append("phoneNumber", param.phoneNumber);
    formData.append("email", param.email);
    formData.append("address", param.address);
    formData.append("totalPerson", param.totalPerson.toString());
    formData.append("roomId", param.roomId);
    formData.append("otherPrice", param.otherPrice);
    formData.append("internetPrice", param.internetPrice);
    formData.append("gender", param.gender.toString());
    formData.append("deposit", param.deposit);
    const response = await api.post({url:'constract/create', data: formData, config: {headers: {
        'Content-Type': 'multipart/form-data'
      }}})
    console.log("create res:",response)
    return response.data
}