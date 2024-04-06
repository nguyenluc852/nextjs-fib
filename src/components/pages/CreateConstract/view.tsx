import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import FormBlock from "../../molecules/FormBlock";
import DateTime from "../../molecules/DateTime";
import RadioButtons from "../../molecules/RadioButtons";
import PullDown from "../../molecules/PullDown";
import FormInputFile from "../../molecules/FormInputFile";
import ButtonOutline from "../../atom/ButtonOutline";
import Button from "../../atom/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import DateUtils from "../../../utils/date";
import { toast } from 'react-toastify';
import { List } from "reselect/es/types";
import Image from "../../atom/Image";

type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const ListPreOrder: NextPage = () => {
    const [gender, setGender] = useState(0)
    const router = useRouter()
    const listRoomStore = useSelector((state: RootState) => state.room.listRoom)
    const [customerName, setCustomerName] = useState(""); 
    const [createDate, setCreateDate] = useState(new Date());
    const [birthday, setBirthday] = useState(new Date());
    const [block, setBlock] = useState("A")
    const [room, setRoom] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [totalPerson, setTotalPerson] = useState("");
    const [rentalPrice, setRentalPrice] = useState("");
    const [electricPrice, setElectricPrice] = useState("");
    const [waterPrice, setWaterPrice] = useState("");
    const [internetPrice, setInternetPrice] = useState("0");
    const [otherPrice, setOtherPrice] = useState("");
    const [cccdImage, setCccdImage] = useState<Array<File>>();
    const [listRoom, setListRoom] = useState<Array<string>>([])
    const { createConstract, getListRoom } = useService();
    const [isLoading, setIsLoading] = useState(false)
    let idx = 0 
    useEffect (() => {
      getListRoom({block:"A", status: "Chưa Thuê"})
    }, [])
    useEffect (() => {
      const list: Array<string> = []
      listRoomStore.map(item => {
        list.push(item.name)
      })
      setListRoom(list)
      console.log("list",listRoom)
      // getRoomInfo({block: block, name: list[0]})
    }, [listRoomStore])

    const onChangeBlock = (value: string) => {
      setBlock(value)
    }

    const onChangeRoom = (value: string) => {
      console.log(value)
      idx = listRoom.indexOf(value)
      setRoom(value)
      setRentalPrice(listRoomStore[idx].rentalPrice)
    }
    const onChangePhoneNumber = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setPhoneNumber(target.value)
    }
    const onChangeEmail = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setEmail(target.value)
    }

    const onChangeAddress = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setAddress(target.value)
    }

    const onChangeTotal = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setTotalPerson(target.value)
    }

    const onChangeOtherPrice = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setOtherPrice(target.value)
    }

    const onChangeNameCustomer = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      setCustomerName(target.value)
    }

    const onChangeImageCCCD = (e: ChangeEvent) => {
      const target = e.target as HTMLInputElement
      if (target.files && target.files.length > 0)
        setCccdImage(Array.prototype.slice.call(target.files))
    }

    const onSubmit = async () => {
      setIsLoading(true)
      if (cccdImage != undefined) {
        const res = await createConstract({
          fullName: customerName,
          birthday: DateUtils.formatDateString(birthday.toString()),
          phoneNumber: phoneNumber,
          email: email,
          address: address,
          totalPerson: Number.parseInt(totalPerson),
          roomId: listRoomStore[idx].id.toString(),
          cccd: cccdImage,
          otherPrice: otherPrice,
          gender: gender,
          deposit: "",
          internetPrice: internetPrice
        })
      }
      setIsLoading(false) 
      router.back()
      toast.success('Bạn Đã Thêm Hợp Đồng Thành Công.')
    }

    return <main className="main">
      <div className="responsive">
        <div className="container">
          
          <div className="mb-3 mt-8 flex justify-center text-2xl">
            <div className="col-sm-12">
              <h3 className="d-flex flex-row sm:flex-col center"><i className="bi bi-filetype-csv me-1"></i>
                Thông tin hợp đồng</h3>
            </div>
          </div>

          <div className="mb-3 sm:ml-20 mt-10 ">
            <div className="flex flex-row min-w-full grid lg:grid-cols-12">
              <FormBlock 
                className="flex flex-row ms:flex-col min-w-full grid grid-cols-12 col-span-4 " 
                labelClassName=" ml-2 col-span-4 sm:col-span-4 mt-3" 
                formClassName="ml-2 col-span-4 sm:col-span-4" 
                label={"Mã Hợp Đồng : "}
                isDisable = {true}
                placeholder={"MH00001"} explain={""} />

              <DateTime 
                className="flex flex-row sm:flex-col min-w-full grid grid-cols-12 col-span-4 mt-3"
                formLabelClassName=" ml-2 col-span-4 sm:col-span-4"
                formDateClassName="col-span-4 ml-2 sm:col-span-4 "
                label="Ngày tạo : "
                title="Chọn ngày tạo hợp đồng" 
                onDateChange={function (date: Date): void {
                  setCreateDate(date)
                } }              
                />
            </div>

            <FormBlock 
                className="flex flex-row ms:flex-col min-w-full mt-5 grid grid-cols-10 sm:grid-cols-9" 
                labelClassName=" ml-2 col-span-3 sm:col-span-1 mt-3" 
                formClassName="ml-4 sm:ml-2 col-span-6 sm:col-span-2" 
                label={"Họ Và Tên : "}
                value={customerName}
                onChange={onChangeNameCustomer}
                placeholder={"Nhập họ và tên"} explain={""} />

            <div className="flex flex-row ms:flex-col min-w-full grid grid-cols-12 mt-5">
              <DateTime 
                className="flex flex-row ms:flex-col min-w-full 
                  grid grid-cols-12 col-span-11  sm:col-span-4" 
                formLabelClassName="ml-2 col-span-4 sm:col-span-4 " 
                formDateClassName="col-span-4 ml-4 sm:ml-2" 
                label="Ngày sinh : "
                title="Chọn ngày sinh"
                dateFormat="dd-MM-yyyy"
                dateValue={birthday}
                onDateChange={function (date: Date): void {
                  setBirthday(date)
                } } />

                <RadioButtons 
                  className="ml-2 mt-2 sm:mt-0 flex flex-row  min-w-full 
                  grid grid-cols-12 col-span-11 sm:col-span-5"
                  formLabelClassName="col-span-4 sm:col-span-3"
                  formClassName="ml-2 sm:ml-0 col-span-6  sm:grid-cols-8 flex flex-row"
                  label={"Giới tính :"} list={["Nam", "Nữ"]} 
                  selectedItem={gender} 
                  onRadioSelectedItem={function (idx: number): void {
                  setGender(idx)
                } } />
            </div>
            
            <div className="flex flex-col sm:flex-row min-w-full grid grid-cols-12 mt-2">
              <FormBlock 
                className="flex flex-row ms:flex-col min-w-full grid grid-cols-12 
                sm:grid-cols-12 col-span-12 sm:col-span-4" 
                labelClassName=" ml-2 col-span-4 sm:col-span-4 mt-1" 
                formClassName="ml-0 sm:ml-2 col-span-7 sm:col-span-7" 
                label={"Số điện thoai : "}
                value={phoneNumber}
                onChange={onChangePhoneNumber}
                placeholder={"0972123456"} explain={""} />

              <FormBlock 
                className="flex flex-row ms:flex-col min-w-full grid grid-cols-12 
                sm:grid-cols-12 col-span-12 sm:col-span-4 mt-1 sm:mt-0" 
                labelClassName=" ml-2 col-span-4 sm:col-span-3 mt-1" 
                formClassName="col-span-7 sm:col-span-7"  
                label={"Email : "}
                value={email}
                onChange={onChangeEmail}
                placeholder={"Nhập email"} explain={""} />
            </div>

            <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-10 sm:grid-cols-9 mt-5" 
                labelClassName=" ml-2 col-span-3 sm:col-span-1 mt-3" 
                formClassName="ml-3 sm:ml-0 col-span-6 sm:col-span-5" 
                label={"Địa chỉ : "}
                value= {address}
                onChange= {onChangeAddress}
                placeholder={"Nhập địa chỉ"} explain={""} />

            <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-10 mt-5" 
                labelClassName=" ml-2 col-span-4 sm:col-span-1 mt-3" 
                formClassName="col-span-5 sm:col-span-2 ml-0 sm:ml-3" 
                label={"Tổng số người :"}
                value={totalPerson}
                onChange= {onChangeTotal}
                placeholder={"Nhập số người ở"} explain={""} />
            
            <div className="flex flex-row mt-3 grid grid-cols-12 ">
              <PullDown 
                className="flex flex-row col-span-5 sm:col-span-2" 
                label={"Tên tòa: "} list={["A"]} />
              <PullDown 
                className="flex flex-row col-span-5 sm:col-span-2" 
                label={"Số phòng: "} 
                // value={room}
                list={listRoom} 
                onChange= {onChangeRoom}/>
            </div>
            <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-10 mt-3" 
                labelClassName=" ml-2 col-span-3 sm:col-span-1 mt-3" 
                formClassName="col-span-3 sm:col-span-2 ml-3" 
                label={"Giá Phòng :"}
                value={rentalPrice}
                isDisable = {true}
                placeholder={"2500000"} explain={""} />

            <div className="flex flex-row  grid grid-cols-12 mt-3">
              <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-6 sm:col-span-4" 
                labelClassName=" ml-2 col-span-8 sm:col-span-4 mt-2" 
                formClassName="col-span-4 sm:col-span-7" 
                value={electricPrice}
                label={"Giá điện(kw/h):"}
                isDisable = {true}
                placeholder={"4000"} explain={""} />

              <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-6 sm:col-span-4" 
                labelClassName=" ml-2 col-span-8 sm:col-span-4 mt-2" 
                formClassName="col-span-4 sm:col-span-7" 
                label={"Giá nước (m3): "}
                value={waterPrice}
                isDisable = {true}
                placeholder={"30000"} explain={""} />
            </div>

            <div className="flex flex-row  grid grid-cols-12 mt-3">
              {/* <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-6 sm:col-span-4" 
                labelClassName=" ml-2 col-span-8 sm:col-span-4 mt-2" 
                formClassName="col-span-4 sm:col-span-7" 
                label={"Giá internet :"}
                value={internetPrice}
                onChange= {onChangeInternet}
                placeholder={"0"} explain={""} /> */}
              
              <RadioButtons 
                  className="flex flex-row min-w-full grid grid-cols-12 col-span-6 sm:col-span-4"
                  formLabelClassName="ml-2 col-span-8 sm:col-span-4 mt-2"
                  formClassName="mt-3 ml-2 sm:ml-0 col-span-6  sm:grid-cols-8 flex flex-row"
                  label={"Sử dụng internet :"} list={["Có", "Không"]} 
                  selectedItem={Number.parseInt(internetPrice)} 
                  onRadioSelectedItem={function (idx: number): void {
                    setInternetPrice(idx.toString())
                } } />

              <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-6 sm:col-span-4" 
                labelClassName=" ml-2 col-span-8 sm:col-span-4 mt-2" 
                formClassName="col-span-4 sm:col-span-7" 
                label={"Giá dv khác : "}
                value={otherPrice}
                onChange={onChangeOtherPrice}
                placeholder={"30000"} explain={""} />
            </div>

            <div className="flex flex-col sm:flex-row   grid grid-cols-12 mt-3">
              <FormInputFile 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-12 
                  sm:col-span-4" 
                labelClassName="ml-2 col-span-4 sm:col-span-3"
                formClassName="col-span-6"
                label={"Ảnh phòng :"} />
              <FormInputFile 
                className="flex flex-row min-w-full grid grid-cols-12 col-span-12 
                sm:col-span-4 sm:mt-0 mt-2" 
                labelClassName="ml-2 col-span-4 sm:col-span-3"
                formClassName="col-span-6 "
                onChange={onChangeImageCCCD}
                label={"Ảnh CCCD :"} />
            </div>

          <div className="grid grid-cols-12 mt-10 min-w-full mb-20">
            <Button className=" ml-2 col-span-5 sm:col-span-2" name={"Hủy"} onClick={() => router.back()} type={"danger"} />
            <Button className="col-end-12 sm:col-end-7 col-span-5 sm:col-span-2" 
              name={"Tạo mới"} onClick={onSubmit} type={"primary"}
              isDisable={isLoading}
              isLoading= {isLoading}/>
          </div>
          </div>
        </div>
      </div>
    </main>
  }
  return ListPreOrder
}
