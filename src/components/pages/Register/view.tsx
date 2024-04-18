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
    const [newUser, setNewUser] = useState(false);
    const [verificationCode, setVerificationCode] = useState("")
    const [userCognito, setUserCognito] = useState<CognitoUser>()
  
    const router = useRouter();

    const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault();
      if (wallet != "") {
        var attributeList: CognitoUserAttribute[] = [];

        var dataIsAdmin = {
          Name: 'custom:is_Admin',
          Value: '0',
        }
        var dataWallet = {
          Name: 'custom:wallet',
          Value: wallet,
        }
        var attributeIsAdmin =  new CognitoUserAttribute(dataIsAdmin);
        attributeList.push(attributeIsAdmin)
        attributeList.push(new CognitoUserAttribute(dataWallet))

        try {
          userPool.signUp(email, password, attributeList, [], async function(
            err,
            result
          ) {
            if (err) {
              alert(err.message || JSON.stringify(err));
              return;
            }
            var cognitoUser = result?.user;
            setUserCognito(cognitoUser)
            
            // await router.push('/login');
            setNewUser(true)
            console.log('user name is ' + cognitoUser?.getUsername);
            
          });
        } catch (err) {
          console.error(err);
        }
      } else{
        toast.error("Please fill the wallet!!")
      }
      
    }

    const handleConfirmSignUp = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        userCognito?.confirmRegistration(verificationCode, true, async function(err, result) {
          if (err) {
            alert(err);
            return;
          }
          console.log("result verify", result)
          toast.success('You have been registed successful.')
          await router.push('/login');
      });
        
      } catch (err) {
        console.error(err);
      }
    }

    const resendVerifyCode = () => {
      console.log("resend")
      
      if (userCognito) {
        userCognito.resendConfirmationCode((err, result) => {
          if (err) {
            console.log(err);
          }
          if (result) {
            toast.success('You have been resend verify code successful.')
          }
        });
      } else {
        console.log("nulllll")
      }
        
    }
   

    return <main className={c(styles.main, "bg-gray-200 h-screen flex items-center justify-center")}>
            <form className="max-w-lg w-full bg-gray-100 shadow-lg p-8 flex flex-col">
                {newUser ? (<><p className="text-xl mb-4 text-center">Verify your email</p>
                <label htmlFor="verificationCode">Verification code</label>
                <input
                  id="verificationCode"
                  value={verificationCode}
                  type="text"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setVerificationCode(e.target.value)}
                  />

                <ButtonOutline name={"Resend Verify Code"} onClick={resendVerifyCode} type={"primary"}/>

                <button
                  className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
                  type="submit"
                  onClick={handleConfirmSignUp}
                  >
                  Confirm
                  </button></>) : (<><p className="text-xl mb-4 text-center">Create an account</p>

                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setEmail(e.target.value)}
                  />

                <label htmlFor="password"> Password</label>
                <input
                  id="password"
                  value={password}
                  type="password"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setPassword(e.target.value)}
                  />

                <label htmlFor="wallet"> Wallet</label>
                <input
                  id="wallet"
                  value={wallet}
                  type="text"
                  className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
                  onChange={(e) => setWallet(e.target.value)}
                  />

                <button
                  className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
                  type="submit"
                  onClick={handleSignUp}
                  >
                  Register
                  </button></>)}
            </form>
        </main>
  }
  return Register
}