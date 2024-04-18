import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import router, { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
import s from "./style.module.scss";
import logo from "../../../../public/favicon.ico"
import FormBlock from "../../molecules/FormBlock";
import Button from "../../atom/Button";
import ButtonOutline from "../../atom/ButtonOutline";
import Label from "../../atom/Label";
import Table from "../../molecules/Table";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import { RequestOrder } from "../../../stores/order/model";
import { toast } from "react-toastify";
import DateUtils from "../../../utils/date";
import Checkbox from "../../molecules/Checkbox";
import LogUtil from "../../../utils/LogUtil";
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const WhiteBook: NextPage = () => {
  
    const [isCheck, setIsCheck] = useState(false)
    const {query: { register },} = router

    const onClickContinue= () => {
      if (isCheck) {

        router.push({pathname: "/register"})
      }
        
    }

    return <main className={c(styles.main)}>
        <div className="responsive">
          <div className="container">
          <div className="mt-5">
{/*	Policy */}        
              <div className="mt-1">                
                <div className="mt-5 ml-[30px]">
                  {/* Our terms and services: */}
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  Our terms and services:
                  </span>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  1. Account and access: The Terms may stipulate your rights and responsibilities when 
                  creating an account and accessing our services. This may include protecting personal 
                  information, ensuring confidentiality, and not allowing unauthorized access to accounts.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  2. Information and advice: We can provide information and advice about our products 
                  or investment projects. However, the clause may disclaim responsibility for the accuracy 
                  and completeness of this information. Customers need to be responsible for checking and 
                  researching information before making investment decisions.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  3. Investment risks: Terms may contain conditions related to investment risks. We may exclude 
                  liability for loss, damage or risks arising from investment in our products or projects. 
                  This may apply in the event of market instability, price changes, or other factors beyond our control.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  4. Waiver of liability: The Terms may contain conditions regarding the waiver of liability. 
                  This may include disclaimers for losses, damages or claims arising from the use of our products 
                  or services. However, this disclaimer may be limited or not applicable in case of violation of 
                  applicable legal regulations.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  5. Payment and reimbursement: The Terms may stipulate conditions relating to payment and 
                  reimbursement. This may include transaction fee policies, refund restrictions or other special 
                  conditions regarding withdrawals or asset conversions.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  To better understand our terms and services, I recommend that you consult us directly or read 
                  the relevant documents carefully. If you have any questions, please contact us directly for answers
                  </p>
                </div>

                {/* Risk warning: */}
                <div className="mt-5 ml-[30px]">
                  <span className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
                  Risk warning:
                  </span>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  1. Market risk: Investment always has market risk. Asset values and profits may fluctuate based 
                  on financial and economic market fluctuations. The market can be affected by many different factors
                  such as politics, global economy, price fluctuations and unforeseen factors.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  2. Legal risks: Investment may be affected by legal factors such as regulations, ownership rights, 
                  tax policies and other regulations. Changes in legal regulations may affect the performance and 
                  value of investment assets.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  3. Business risks: Investing in a project, company or organization can be profitable but can also 
                  be subject to business risks. Factors such as competition, market changes, product or service risks, 
                  management and financial issues can affect business performance and profitability.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  4. Financial risk: Investment can bring profits but can also cause loss of invested capital. 
                  Asset performance and returns are not guaranteed and may vary based on many factors such as 
                  risk management, market volatility, and ability to execute investment strategies.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  5. Liquidity risk: Participating in investment may cause difficulty in converting assets into cash. 
                  Some assets may have limited liquidity, meaning they cannot be easily sold or converted into cash at 
                  short notice.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  6. Information risk: Information provided by the project, company or organization may be inaccurate 
                  or incomplete. This may affect your investment decisions and may cause loss of assets.
                  </p>
                  <p className="ml-[40px] font-normal text-gray-500 text-sm md:text-lg mt-5">
                  It is important to understand the risks involved in investing with us and conduct thorough research 
                  before making an investment decision. I recommend that you thoroughly research the project, company 
                  or organization, consult with financial experts or lawyers and ensure you understand the risks and 
                  limitations involved.
                  </p>
                   
                </div>
                {register != undefined && <div className="mt-5 ml-[30px]">
                  <div className="flex items-center flex-row">
                    <input id="link-checkbox" type="checkbox" 
                      checked = {isCheck}
                      onClick={() => setIsCheck(!isCheck)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                    <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the terms and conditions.</label>
                  </div>
                  <Button className="mt-2 flex items-center" isDisable= {!isCheck} name={"Continue"} onClick={onClickContinue} type={"success"}/>
                </div>
                }
              </div>


            </div>
          </div>
        </div>         
    </main>
  }
  return WhiteBook
}
