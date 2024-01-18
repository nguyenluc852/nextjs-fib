import c from "clsx"
import ButtonModal from "../../atom/ButtonModal"
import s from "./style.module.scss"
import Modal from 'react-modal'
import DateTime from "../../molecules/DateTime"
import FormBlock from "../../molecules/FormBlock"
import { ChangeEvent, useState } from "react"
import Button from "../../atom/Button"
import ButtonOutline from "../../atom/ButtonOutline"
// 確認ポップアップ

type Props = {
  className?: string
  formClassName?: string // フォームに割り当てるスタイルクラス
  title: string // タイトル
  message?: string // ポップアップの内容
  lblClose: string // Closeボータンの名前
  lblConfirm: string // 同意ボータンの名前
  onClose: VoidFunction // クローズ時のアクション
  onSave: (data: string) => void // 同意時のアクション
  id?: string // 各ポップアップ区別のため、ポップアップのidを渡すべき
  type: "primary" | "danger" | "success"
  isOpen: boolean
  oldPrice: string
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

const UpdatePriceModal: React.FC<Props> = props => {
  const {className,
    id,
    title,
    message,
    type,
    isOpen,
    lblClose,
    lblConfirm,
    isLoading,
    oldPrice,
    onClose,
    onSave,
   } = props
    
  const [newPrice, setNewPrice] = useState ("0")

  const onChangeNewPrice = (e:ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setNewPrice(target.value)
  }
  return (
    <div className={c(className)} >
      <Modal
        style={customStyles}
        isOpen = {isOpen}
        ariaHideApp={false}
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
            <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 mt-10" 
                labelClassName=" ml-2 col-span-5 sm:col-span-2 mt-2" 
                formClassName="col-span-6 sm:col-span-3"
                label={"Giá Cũ : "}
                isDisable={true}
                value={oldPrice}
                placeholder={"3000000(vnd)"} explain={""} />
              <FormBlock 
                className="flex flex-row min-w-full grid grid-cols-12 mt-5" 
                labelClassName=" ml-2 col-span-5 sm:col-span-2 mt-2" 
                formClassName="col-span-6 sm:col-span-3" 
                label={"Giá Mới : "}
                value={newPrice}
                onChange={onChangeNewPrice}
                placeholder={"Nhập Giá Mới"} explain={""} />
            
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 flex flex-row-reverse mt-3">
          <Button 
          className="ml-3 text-sm " name={"Cập Nhập"} 
          isDisable={isLoading}
          isLoading={isLoading}
          onClick={()=>onSave(newPrice)} type={"primary"}/>
          <ButtonOutline className="ml-3 text-sm "name={"Hủy"}  onClick={onClose} type={"danger"}/>
        </div>
      </Modal>
    </div>
  )
}

export default UpdatePriceModal
