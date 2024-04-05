import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
import s from "./style.module.scss";
import logo from "../../../../public/favicon.ico"
import FormBlock from "../../molecules/FormBlock";
import Button from "../../atom/Button";
import ButtonOutline from "../../atom/ButtonOutline";
import Label from "../../atom/Label";
import Table from "../../molecules/Table";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { RequestOrder } from "../../../stores/order/model";
import { toast } from "react-toastify";
import DateUtils from "../../../utils/date";
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Home: NextPage = () => {
    const [gender, setGender] = useState(0)
    const [amount, setAmount] = useState("0")
    const [wallet, setWallet] = useState("")
    const [price, setPrice] = useState(0.015)
    const [estimatedQuantity, setEstimatedQuantity] = useState("0")
    const router = useRouter()
    const [listData, setListData] = useState<Array<Object>>([])
    const [isLoading, setIsLoading] = useState(false)
    const listColunm = ["Date", "Status", "Wallet", "Amount", "FIB" ]
    const listOrderStore = useSelector((state: RootState) => state.order.listOrder)
    const { createOrder, getListOrder } = useService();
    const userStore = useSelector((state: RootState) => state.user)
    useEffect (() => {
      if (userStore.userInfo?.token) {
        // console.log("tokennn dasdas", userStore.userInfo?.token)
        
        getListOrder(userStore.userInfo.token)
      } else {
        router.push({
          pathname: "/"
        })
      }
        
    }, [])

    useEffect (() => {
      const list: Array<Object> = []
      listOrderStore.map(item => {
        list.push({
          createAt: DateUtils.formatDateString(item.createAt),
          status : item.status,
          wallet: item.wallet,
          amount: item.amount,
          quantity: Number(item.quantity).toFixed(2)
        })
      })
      setListData(list)
      console.log("list",list)
    }, [listOrderStore])

    useEffect (() => {
      let cal = (Number(amount) / price ).toFixed(2)
      return setEstimatedQuantity(cal+ "");
    }, [amount])

    const onChangeAmount = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setAmount(target.value)
    }

    const onChangeWallet = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setWallet(target.value)
    }

    const onClickOrder = async () => {
      if (userStore.userInfo?.token) {
        setIsLoading(true)
        const order: RequestOrder = {
          price: price+"",
          wallet: wallet,
          amount: amount,
          quantity: estimatedQuantity
        }
        console.log(order)
        
        await createOrder(order, userStore.userInfo.token)
        setIsLoading(false)
        toast.success('You have been ordered successful.')
        
        await getListOrder(userStore.userInfo.token)
      }
      
    }
   

    return <main className={c(styles.main)}>
      <div className="responsive">
        <div className="container">
          
          <div className="mb-3 mt-8 flex text-2xl">
            <div className="row inline flex">
              {/* <Image className="mb-3 flex-1 ms-24" path="../../../../public/favicon.ico" height={40} width={40}/> */}
              <Image
                src="/logo.png"
                alt="Vercel Logo"
                className={c(styles.vercelLogo,"mb-3 flex-1 ms-24")}
                width={48}
                height={24}
                priority
              />
              <h3 className="d-flex flex-row sm:flex-col left ml-2"><i className="bi bi-filetype-csv me-1"></i>
                ~ 0.015USDT</h3>
            </div>
          </div>

          <div className="flex flex-col mb-3 sm:ml-24 mt-10 ">
            <div className="flex flex-row">
              <FormBlock 
                className="flex flex-row" 
                formClassName="flex-1" 
                label={"Amount: "} 
                value={amount}
                onChange={onChangeAmount}
                placeholder={"Input amount"} explain={""} ></FormBlock>
              <Label text="USDT" className="justify-center mt-1"></Label>
              <ButtonOutline className="ml-2" name="100$" onClick={()=> setAmount("100")} type="primary"></ButtonOutline>
              <ButtonOutline className="ml-2" name="250$" onClick={()=> setAmount("250")} type="primary"></ButtonOutline>
              <ButtonOutline className="ml-2" name="500$" onClick={()=> setAmount("500")} type="primary"></ButtonOutline>
            </div>
            <div className="flex flex-row mt-2">
              
            </div>
            <Label className="ml-2 mt-2" text={"FIB estimate:   " + estimatedQuantity + "  FIB"}/>
            <Button className="ml-2 mt-2 w-40" type="primary" name="Order" 
              onClick={onClickOrder}
              isDisable={isLoading}
              isLoading= {isLoading} />
          </div>

          <div className="flex flex-col mb-3 sm:ml-24 mt-10 ">

          <Label className="ml-2 mt-2" text={"Latest Transactions"}/>
          <Table 
            className="mt-10 overflow-x-auto sm:-mx-6 lg:-mx-8" 
            listColunm={listColunm} 
            listData= {listData}
            isDetailButton = {false}
            ></Table>

          </div>
        </div>
      </div>
    </main>
  }
  return Home
}
