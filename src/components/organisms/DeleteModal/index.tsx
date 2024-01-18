import c from "clsx"
import ButtonModal from "../../atom/ButtonModal"
import s from "./style.module.scss"
import Modal from 'react-modal'
import { useState } from "react"
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
  onSave: VoidFunction // 同意時のアクション
  id?: string // 各ポップアップ区別のため、ポップアップのidを渡すべき
  type: "primary" | "danger" | "success"
  isOpen: boolean
  isLoading?: boolean
  listSendData?: {[x: string]: any}
  listColunm?: string[]
  fileName?: string
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

const DeleteModal: React.FC<Props> = props => {
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
    listSendData,
    listColunm,
    fileName, } = props

    
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
        </div>
        <div className="px-4 py-3 sm:px-6  mt-5 justify-center ">
          
          <ButtonOutline className="ml-3 text-sm"name={lblClose}  onClick={onClose} type={"danger"}/>
          <Button 
            className="ml-3 text-sm" 
            name={lblConfirm} onClick={onSave} 
            isDisable = {isLoading}
            isLoading= {isLoading}
            type={"primary"}/>
        </div>
      </Modal>
    </div>
  )
}

export default DeleteModal
