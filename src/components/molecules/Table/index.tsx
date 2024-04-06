import c from "clsx";
import Button from "../../atom/Button";
import ButtonOutline from "../../atom/ButtonOutline";
import s from "./style.module.scss";
// import ButtonHelp from "../../atom/ButtonHelp";

type Props = {
  className?: string;
  formClassName?: string; // フォームに割り当てるスタイルクラス
  explain?: string;
  help?: string;
  listColunm?: string[]; // テーブルのヘッダ一覧
  listData?: object[]; // テーブルのデータ一覧
  isDeleteButton?: boolean
  isDetailButton?: boolean
  isDetailInvoiceButton?: boolean
  onClickEdit?: (idx:number) => void
  onClickDelete?: (idx:number) => void
  onClickDetail?: (idx: number) => void
  onClickDetailInvoice?: (idx:number) => void
};

const Table: React.FC<Props> = (props) => {
  const { className,
    formClassName,
    explain,
    help,
    listColunm,
    listData,
    isDeleteButton,
    isDetailButton,
    isDetailInvoiceButton,
    onClickDelete,
    onClickDetail,
    onClickEdit,
    onClickDetailInvoice
  } = props;
  const row = (title: string, data: string, idx: number) => {
    if (title === "actions") {
      return <div className="flex row">
      <Button name={"Sửa"}  onClick={()=> onClickEdit?.(idx)} type={"primary"}></Button>
      {isDeleteButton && <Button className="mx-2" name={"Xóa"}  onClick={()=> onClickDelete?.(idx)} type={"danger"}></Button>}
      {isDetailButton && <ButtonOutline className="mx-2" name={"Chi Tiết"}  onClick={()=> onClickDetail?.(idx)} type={"primary"}></ButtonOutline>}
      {isDetailInvoiceButton && <ButtonOutline className="mx-2" name={"Chi Tiết Hóa Đơn"}  onClick={()=> onClickDetailInvoice?.(idx)} type={"primary"}></ButtonOutline>}
    </div>
    } else if (title == "status") {
      switch (data) {
        case 'Chưa Thánh Toán':
        case 'Đã Trả Phòng':
        case 'Hủy đặt cọc':
          return <span className={c("text-truncate font-bold flex items-center text-red-500", s.textTruncate)}>{data} </span>
        case 'Đã Thanh Toán':
        case 'Đã chuyển đến':
          return <span className={c("text-truncate font-bold flex items-center text-blue-500", s.textTruncate)}>{data} </span>
        default:
          return <span className={c("text-truncate font-bold flex items-center text-green-500", s.textTruncate)}>{data} </span>
      }
      return 
    } else {
      return <span className={c("text-truncate flex items-center ", s.textTruncate)}>{data} </span>
    }
    
  }
  // TODO いきなり汎用化は難しいので、直書きです。構造をどうするかは考える。
  return (
    <div className={c(s.root, className)}>
      <div className={c("py-2 inline-block min-w-full sm:px-6 lg:px-8", formClassName)}>
        <table className={c("min-w-full ", s.table)}>
          <thead>
            <tr>
              {listColunm?.map((colName) => (
                <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left" key={colName.toString()} scope="col">
                  {colName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listData?.map((item, idx) => (
              <tr key={idx} className = {c("border-b", idx %2 == 0 ? "bg-white":"bg-gray-100 ")}>
                {
                  Object.entries(item).map((e, i) => {
                    return <td key={i} className={c("text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap")} >
                      {
                        row(e[0], e[1], idx)
                        // e[0] == "actions" ? 
                        //   <div className="flex row">
                        //     <Button name={"Sửa"}  onClick={()=> onClickEdit?.(idx)} type={"primary"}></Button>
                        //     {isDeleteButton && <Button className="mx-2" name={"Xóa"}  onClick={()=> onClickDelete?.(idx)} type={"danger"}></Button>}
                        //     {isDetailButton && <ButtonOutline className="mx-2" name={"Chi Tiết"}  onClick={()=> onClickDetail?.(idx)} type={"primary"}></ButtonOutline>}
                        //     {isDetailInvoiceButton && <ButtonOutline className="mx-2" name={"Chi Tiết Hóa Đơn"}  onClick={()=> onClickDetailInvoice?.(idx)} type={"primary"}></ButtonOutline>}
                        //   </div>
                        // :
                        //   <span className={c("text-truncate flex items-center", s.textTruncate)}>{e[1]} </span>
                      }
                      
                    </td>

                  })
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        /*入力内容の補足説明*/
        explain && <div className="form-text">{explain}</div>
      }
    </div>
  );
};

export default Table;
