import c from "clsx";
import s from "./style.module.scss";
import Label from "../../atom/Label";
import { ChangeEvent } from "react";

type Props = {
  className?: string;
  formClassName?: string;
  labelClassName?: string;
  buttonName?: string; // ボタンに表示する名前
  explain?: string;
  onChange?: (e: ChangeEvent) => void;
  label: string;
  option?: "must" | "option"; // バッジ。任意、必須、指定なし(propsなし)、のいづれか
};

const FormInputFile: React.FC<Props> = (props) => {
  const { className,
    buttonName,
    formClassName,
    labelClassName,
    explain,
    label,
    onChange,
    option } =
    props;

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
      <Label
        text={label}
        badge={badge}
        badgeStyle={badgeStyle}
        className={labelClassName}
      />
      <div className={formClassName}>
        <label className="btn btn-outline-secondary" htmlFor="formFile">
          {buttonName}
        </label>
        <input type="file" accept="image/*" id="formFile" multiple={true} className="visually-hidden" onChange={onChange}/>
        {
          /*入力内容の補足説明*/
          explain && <div className="form-text">{explain}</div>
        }
      </div>
    </div>
  );
};

export default FormInputFile;
