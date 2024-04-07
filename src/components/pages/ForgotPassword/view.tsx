import type { UseService } from "./service"
import type {NextPage} from "../../../types/nextjs";

import { useRouter } from "next/router"
import {ChangeEvent, useEffect, useState} from "react";
import styles from '../../../../styles/Home.module.css'
import c from "clsx";
import s from "./style.module.scss";

import {
  CognitoUserPool,
  CognitoUser,
  CognitoUserAttribute} from "amazon-cognito-identity-js"

import {awsConfiguration} from '../../../../awsConfigution'
import Button from "../../atom/Button";
import { toast } from "react-toastify";
import ButtonOutline from "../../atom/ButtonOutline";
import LogUtil from "../../../utils/LogUtil";

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId+"",
  ClientId: awsConfiguration.ClientId+"",
})
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Register: NextPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [wallet, setWallet] = useState("");
    const [sendEmail, setSendEmail] = useState(false);
    const [verificationCode, setVerificationCode] = useState("")
    const [userCognito, setUserCognito] = useState<CognitoUser>()
  
    const router = useRouter();

    const handleSendEmail = async (e: React.FormEvent) => {
      e.preventDefault();

      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool
      })

      try {
        cognitoUser.forgotPassword({
          onSuccess: function (data) {
            // successfully initiated reset password request
            LogUtil.info('CodeDeliveryData from forgotPassword: ' + data, "");
            setSendEmail(true)
          },
          onFailure: function (err) {
            alert(err.message || JSON.stringify(err));
          }
          }
        )

      } catch (err) {
        console.error(err);
      }
    }

    const handleConfirmPassword = async (e: React.FormEvent) => {
      e.preventDefault();

      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool
      })

      try {
        cognitoUser.confirmPassword(verificationCode, password, {
          async onSuccess() {
            toast.success('Password confirmed!')
            await router.push('/login');
          },
          onFailure(err) {
            console.log('Password not confirmed!');
          },
        });
        
      } catch (err) {
        console.error(err);
      }
    }
   

    return <main className={c(styles.main, "bg-gray-200 h-screen flex items-center justify-center")}>
            <form className="max-w-lg w-full bg-gray-100 shadow-lg p-8 flex flex-col">
                {sendEmail ? (<><p className="text-xl mb-4 text-center">Verify code from your email</p>
                <label htmlFor="verificationCode">Verification code</label>
                <input
                  id="verificationCode"
                  value={verificationCode}
                  type="text"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setVerificationCode(e.target.value)}
                  />
                <label htmlFor="password">New Password</label>
                <input
                  id="password"
                  value={password}
                  type="password"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setPassword(e.target.value)}
                  />

                {/* <ButtonOutline name={"Resend Verify Code"} onClick={resendVerifyCode} type={"success"}/> */}

                <button
                  className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
                  type="submit"
                  onClick={handleConfirmPassword}
                  >
                  Confirm
                  </button></>) : (<><p className="text-xl mb-4 text-center">Recover Password</p>

                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setEmail(e.target.value)}
                  />

                <button
                  className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
                  type="submit"
                  onClick={handleSendEmail}
                  >
                  Continue
                  </button>
                  <a href="/login" className={c(s.underline)}>Return to login</a>
                  </>)}
            </form>
        </main>
  }
  return Register
}