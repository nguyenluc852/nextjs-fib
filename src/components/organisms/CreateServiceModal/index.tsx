import c from "clsx"
import ButtonModal from "../../atom/ButtonModal"
import s from "./style.module.scss"
import Modal from 'react-modal'
import DateTime from "../../molecules/DateTime"
import FormBlock from "../../molecules/FormBlock"
import { ChangeEvent, useState } from "react"
import Button from "../../atom/Button"
import ButtonOutline from "../../atom/ButtonOutline"
import DateUtils from "../../../utils/date"
// 確認ポップアップ

type Props = {
  className?: string
  formClassName?: string // フォームに割り当てるスタイルクラス
  title: string // タイトル
  message?: string // ポップアップの内容
  lblClose: string // Closeボータンの名前
  lblConfirm: string // 同意ボータンの名前
  onClose: VoidFunction // クローズ時のアクション
  onSave: (data: Object) => void  // 同意時のアクション
  id?: string // 各ポップアップ区別のため、ポップアップのidを渡すべき
  type: "primary" | "danger" | "success"
  isOpen: boolean
  isLoading?: boolean
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CreateServiceModal: React.FC<Props> = props => {
  const {className,
    id,
    title,
    message,
    type,
    isOpen,
    lblClose,
    lblConfirm,
    isLoading,
    onClose,
    onSave,
    } = props
    
  const [selectedMonthYear, setSelectedMonthYear] = useState(new Date()) 
  const [newWater, setNewWater] = useState("") 
  const [newElectric, setNewElectric] = useState("") 

  const onChangeNewWater = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setNewWater(target.value)
  }
  const onChangeNewElectric = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setNewElectric(target.value)
  }
  return (
    <div className={c(className)} >
      <Modal
        style={customStyles}
        isOpen = {isOpen}
        ariaHideApp= {false}
        >
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3
            className="text-lg text-center leading-6 font-medium text-gray-900 text-2xl"
            id="modal-title">
            {title}
          </h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              {message}
            </p>
            <DateTime 
              className="flex flex-row min-w-full grid grid-cols-12 mt-10" 
              formLabelClassName=" ml-2 col-span-5 sm:col-span-2 mt-2" 
              formDateClassName="col-span-6 sm:col-span-3" 
              label="Chọn tháng :" 
              dateFormat="MM/yyyy"
              dateValue={selectedMonthYear}
              showMonthYearPicker = {true}
              focusMonth = {true}
              onDateChange={function (date: Date): void {
                setSelectedMonthYear(date)
              } }
              
              />
            <FormBlock 
              className="flex flex-row min-w-full grid grid-cols-12 mt-5" 
              labelClassName=" ml-2 col-span-5 sm:col-span-2 mt-2" 
              formClassName="col-span-6 sm:col-span-3" 
              label={"Số điện : "}
              value ={newElectric}
              onChange= {onChangeNewElectric}
              placeholder={"kw/h"} explain={""} />

            <FormBlock 
              className="flex flex-row min-w-full grid grid-cols-12 mt-5" 
              labelClassName=" ml-2 col-span-5 sm:col-span-2 mt-2" 
              formClassName="col-span-6 sm:col-span-3" 
              label={"Số nước : "}
              value={newWater}
              onChange={onChangeNewWater}
              placeholder={"m3"} explain={""} />
            
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 flex flex-row-reverse mt-3">
          <Button className="ml-3 text-sm" 
            name={lblConfirm}  
            onClick={() => onSave({
              month_year: DateUtils.format(selectedMonthYear.toString(),"MM-yyyy"), 
              new_water_quantity: newWater, 
              new_electric_quantity: newElectric})} 
            type={"success"}/>
          <ButtonOutline className="ml-3 text-sm"name={lblClose}  onClick={onClose} type={"danger"}/>
        </div>
      </Modal>
    </div>
  )
}

export default CreateServiceModal
