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
import NaviTab from "../../atom/NaviTab";
import AlertMessage from "../../molecules/AlertMessage";
import ModalMessage from "../../organisms/Modal";
import Checkbox from "../../molecules/Checkbox";
import RadioButtons from "../../molecules/RadioButtons";
import { RequestStake } from "../../../stores/stake/model";
import { log } from "console";
import LogUtil from "../../../utils/LogUtil";
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Home: NextPage = () => {
    const [gender, setGender] = useState(0)
    const [amount, setAmount] = useState("0")
    const [amountAvailable, setAmountAvailable] = useState("0")
    const [wallet, setWallet] = useState("")
    const [price, setPrice] = useState(0.025)
    const [seletected, setSelected] = useState(0)
    const [seletectedRd, setSelectedRd] = useState(0)
    const [estimatedQuantity, setEstimatedQuantity] = useState("0")
    const router = useRouter()
    const [listData, setListData] = useState<Array<Object>>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [stake, setStake] = useState("0")
    const [stakeRequest, setStakeRequest] = useState("")
    const [reward, setReward] = useState("0")
    const [total, setTotal] = useState("0")
    const [user, setUser] = useState({})
    const listColunm = ["Date", "Status", "Wallet", "Amount", "FIB" ]
    const listOrderStore = useSelector((state: RootState) => state.order.listOrder)
    const stakeStore = useSelector((state: RootState) => state.stake.stake)
    const { createOrder, getListOrder, createStake, getStake } = useService();
    const userStore = useSelector((state: RootState) => state.user)
    const localstorageGetInformation=localStorage.getItem('isLoggedIn')
    const localstorageGetLastLogin=localStorage.getItem('lastLogin')?.toString()
    useEffect (() => {
      if (localstorageGetInformation && localstorageGetLastLogin) {
        const user = JSON.parse(localstorageGetInformation)
        setUser(user)
        getStake('token' in user ? user.token+"": "", 'wallet' in user ? user.wallet+"": "" )
        Object.keys(user).length != 0 ? getListOrder(user.token) : 
          router.push({
            pathname: "/"
          })
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

    useEffect( () => {
      if (stakeStore && Number(stakeStore?.amount) > 0) {
        setStake(stakeStore?.amount)
        setReward(stakeStore.reward)
        setTotal(stakeStore.total)
        
        setAmountAvailable(stakeStore.amountStakeAvailble != undefined? stakeStore.amountStakeAvailble : "0")
        LogUtil.info("stake", stakeStore.amountStakeAvailble != undefined? stakeStore.amountStakeAvailble : "0")
      }
    },[stakeStore])

    const onChangeAmount = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setAmount(target.value)
    }

    const onChangeStakeRequest = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setStakeRequest(target.value)
    }

    const onClickOrder = async () => {
      if (Object.keys(user).length > 0 ) {
        if ('wallet' in user  && user.wallet != "") {
          setIsLoading(true)      
          const order: RequestOrder = {
            price: price+"",
            wallet: user.wallet +"",
            amount: amount,
            quantity: estimatedQuantity
          }
          console.log(order)
          
          await createOrder(order, 'token' in user ? user.token+"": "")
          setIsLoading(false)
          setIsShow(true)
          await getListOrder('token' in user ? user.token+"": "")
        } else {
          toast.error("Wallet is null.")
        }
        
      }
      
    }

    const onWidthRaw = async () => {

    }
    const onClickRequestStake = async () => {
      if (Object.keys(user).length > 0 && Number(amountAvailable) > 0) {
        setIsLoading(true)
        const stake: RequestStake = {
          wallet: 'wallet' in user ? user.wallet+"": "" ,
          amount: amountAvailable,
          time_expire : "365"
        }
        switch (seletectedRd) {
          case 0 : stake.time_expire = "365"
          case 1 : stake.time_expire = "548"
          case 2 : stake.time_expire = "730"
        }
        
        await createStake(stake, 'token' in user ? user.token+"": "")
        setIsLoading(false)
        toast.success('You have been successfully staked !!!')

        await getStake('token' in user ? user.token+"": "", 'wallet' in user ? user.wallet+"": "" )

      } else {
        toast.error('Please input amount or have error!!!')
      }
    }
   

    return <main className={c(styles.main)}>
      <div className="responsive">
        <div className="container">
          <ModalMessage 
            title={"Notification"} 
            lblClose={"Close"} 
            lblConfirm={"Close"} onClose={()=> setIsShow(false)} 
            message={`You has been order successfull! \n  
            To complete the order, please send USDT to our wallet. 
            Wallet: 0x21f40635ec9a81015257e7530053268494f58d2b
          `}
          onSave={()=> setIsShow(false)} type={"success"} isOpen={isShow}/>  
          
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
                ~ 0.025USDT</h3>
            </div>
          </div>

          <NaviTab className="mb-3 sm:ml-24 mt-10 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" listItem={["Order", "Stake"]} selectedItem={seletected} onSelectedItem={function (idx: number): void {
            setSelected(idx)
          } }/>

          {
            seletected == 0 ? <div>
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
              </div>
              <div className="flex flex-row mt-2">
                
              </div>
              <Label className="ml-2 mt-2" text={"FIB estimate:   " + estimatedQuantity + "  FIB"}/>
              <Button className="ml-2 mt-2 w-40" type="success" name="Order" 
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
          : 
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-3 sm:ml-24 mt-10 ">
            <div className="flex flex-col">
              <Label className="ml-2 mt-2" text={"Amount Stake Availble :   " + amountAvailable + "  FIB"}/>
              { Number(amountAvailable) > 0 &&
                <div className="flex flex-col ">
                  <RadioButtons className="flex flex-row ml-2 mt-2" formClassName="flex flex-row ms-2 "
                    label={"Time: "} list={["12 month", "18 month", "24 month"]} 
                    selectedItem={seletectedRd} onRadioSelectedItem={function (idx: number): void {
                      setSelectedRd(idx)
                    } }/>
                  {/* <div className="flex flex-row ">  
                    <FormBlock 
                      label={"Stake: "} 
                      className="flex flex-row mt-2" 
                      formClassName="flex-6" 
                      value={stakeRequest}
                      onChange={onChangeStakeRequest}
                      placeholder={"Input amount stake"} explain={""} 
                    />
                    <Label className="ms-2 mt-4" text={"FIB"}/>
                  </div> */}
                  <Button className="w-40 mt-5" name={"Request Stake"} onClick={onClickRequestStake} type={"success"} ></Button>
                </div>
              }
              {Number(stake) > 0 && <div className="flex flex-col ">
                <Label className="ml-2 mt-10" text={"Stake (PLN 0.4%/day)"}/>
                <Label className="ml-2 mt-2" text={"Stake :   " + stake + "  FIB"}/>
                <div className="flex flex-row">
                  <Label className="ml-2 mt-2" text={"Reward :   " + reward + "  FIB"}/>
                  <Button className="w-40 ms-10" name={"Withdraw"} onClick={onWidthRaw} type={"success"} ></Button>
                </div>
                
                <Label className="ml-2 mt-2" text={"Total :   " + total + "  FIB"}/>
                </div>}
              
            </div>
            <div className="flex flex-col">
              <Label className="ml-2 mt-2" text={"Tổng Số tiền huy động : 490.000$"}/>
              <Label className="ml-2 mt-2" text={"Số tài khoản đã đăng ký : 215"}/>
            </div>
          </div>
          }
        </div>
      </div>
    </main>
  }
  return Home
}
