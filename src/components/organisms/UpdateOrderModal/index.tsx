import c from "clsx"
import ButtonModal from "../../atom/ButtonModal"
import s from "./style.module.scss"
import Modal from 'react-modal'
import FormBlock from "../../molecules/FormBlock"
import { ChangeEvent, useState } from "react"
import Button from "../../atom/Button"
import ButtonOutline from "../../atom/ButtonOutline"
import PullDown from "../../molecules/PullDown"
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

const UpdateStatusModal: React.FC<Props> = props => {
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
    
  const [status, setStatus] = useState ("0")
  const listStatus = ["Order Success", "Sent"]

  const onChangeStatus = (value: string) => {
    setStatus(value)
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
            <div className="flex flex-row mt-3 grid grid-cols-12 mt-10">
              <PullDown className="flex flex-row col-span-12 sm:col-span-5"  
                label={"Status: "} 
                value= {status}
                onChange={onChangeStatus}
                list={listStatus} />
            </div>
            
          </div>
        </div>
        <div className="px-4 py-3 sm:px-6 flex flex-row-reverse mt-3">
          <Button 
          className="ml-3 text-sm " name={"Cập Nhập"} 
          isDisable={isLoading}
          isLoading={isLoading}
          onClick={()=>onSave(status)} type={"primary"}/>
          <ButtonOutline className="ml-3 text-sm "name={"Hủy"}  onClick={onClose} type={"danger"}/>
        </div>
      </Modal>
    </div>
  )
}

export default UpdateStatusModal
