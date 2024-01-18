import c from "clsx";
import s from "./style.module.scss";
import InformBoardLabel from "../../atom/InformBoardLabel";

type Props = {
  className?: string;
};

const InformBoard: React.FC<Props> = (props) => {
  const { className } = props;

  type InfoListType = {
    id: number;
    date: string;
    type: "info" | "warn";
    message: string;
  };
  const infoList: Array<InfoListType> = [
    {
      id: 1,
      date: "2021年04月04日",
      type: "info",
      message: "ここにお知らせの本文が入ります",
    },
    {
      id: 2,
      date: "2019年09月10日",
      type: "warn",
      message:
        "〇〇〇に新しいオプション機能が追加しました。今なら3ヵ月無料でご利用頂けます。",
    },
  ];

  return (
    <div>
      <div className={c(className)}>
        <div className="col-sm-12">
          <h3>
            <i className="bi bi-info-circle"></i> お知らせ・キャンペーン
          </h3>
        </div>
      </div>

      <div className="topics">
        {infoList.map((item) => {
          return (
            <ul className="topicslist" key={item.id}>
              <li>{item.date}</li>
              <li>
                <InformBoardLabel type={item.type} />
              </li>
              <li>
                <a href="#">{item.message}</a>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default InformBoard;
