import c from "clsx";
import s from "./style.module.scss";

// import ButtonHelp from "../../atom/ButtonHelp";

type Props = {
  className?: string;
  formClassName?: string;
  label: string;
  text: string;
  explain?: string;
  help?: string;
};

const Switch: React.FC<Props> = (props) => {
  const { className,
    formClassName,
    label,
    text,
    explain,
    help } = props;

  return (
    <div className={c(className)}>
      <label className="col-sm-2 col-form-label">{label}</label>
      <div className={formClassName}>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
            {text}
          </label>
        </div>
        {
          /*入力内容の補足説明*/
          explain && <div className="form-text">{explain}</div>
        }
        {
          /*ヘルプ*/
          // help && <ButtonHelp text={help} />
        }
      </div>
    </div>
  );
};

export default Switch;
