import c from "clsx";
import s from "./style.module.scss";

import Label from "../../atom/Label";
// import ButtonHelp from "../../atom/ButtonHelp";
import MessageInvalid from "../../atom/MessageInvalid";
import MessageValid from "../../atom/MessageValid";
import { ChangeEvent, FocusEvent } from "react";
// import InfoTooltip from "../../atom/InfoTooltip";

type Props = {
  label: string;
  value: string;
  className?: string;
  name?: string;
  formClassName?: string; // フォームに割り当てるスタイルクラス
  explain?: string;
  option?: "must" | "option"; // バッジ。任意、必須、指定なし(propsなし)、のいづれか
  help?: string;
  valid?: boolean;
  validMessage?: string;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  tooltipTitle?: string;
};

const TextArea: React.FC<Props> = (props) => {
  const {
    className,
    formClassName,
    name,
    label,
    option,
    explain,
    help,
    valid,
    validMessage,
    value,
    onChange,
    onBlur,
    tooltipTitle,
  } = props;

  // バッジのテキストとスタイル
  let [badge, badgeStyle] = ["", ""];

  switch (option) {
    case "must": {
      badge = "必須";
      badgeStyle = "bg-danger";
      break;
    }
    case "option": {
      badge = "任意";
      badgeStyle = "bg-success";
      break;
    }
    default: {
      badge = "";
      badgeStyle = "";
      break;
    }
  }

  return (
    <div className={c(s.root, className)}>
      <div className="col-sm-2">
        <Label
          className={"col-form-label"}
          text={label}
          badge={badge}
          badgeStyle={badgeStyle}
        />
        {/* {tooltipTitle && (
          <InfoTooltip title={tooltipTitle} position="top" className="ms-1" />
        )} */}
      </div>
      <div className={c(formClassName)}>
        <textarea
          className="form-control"
          name={name}
          rows={3}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></textarea>
        {
          /*入力内容の補足説明*/
          explain && <div className="form-text">{explain}</div>
        }
        {
          /*ヘルプ*/
          // help && <ButtonHelp text={help} />
        }
        {
          /* 入力チェックでOKの時のメッセージ */
          valid !== undefined && valid && validMessage && (
            <MessageValid message={validMessage} />
          )
        }
        {
          /* 入力チェックでNGの時のメッセージ */
          valid !== undefined && !valid && validMessage && (
            <MessageInvalid message={validMessage} />
          )
        }
      </div>
    </div>
  );
};

export default TextArea;
