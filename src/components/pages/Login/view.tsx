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
  AuthenticationDetails
} from "amazon-cognito-identity-js"
import {awsConfiguration} from '../../../../awsConfigution'
import Button from "../../atom/Button";
import { RootState } from "../../../stores";
import { useSelector } from "react-redux";
import { UserInfo } from "../../../stores/user/model";
import ButtonOutline from "../../atom/ButtonOutline";
import { toast } from "react-toastify";

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId+"",
  ClientId: awsConfiguration.ClientId+"",

})
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Login: NextPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState(false);
    const [verificationCode, setVerificationCode] = useState("")
    const userStore = useSelector((state: RootState) => state.user)
    const { setUser } = useService();
    const [userCognito, setUserCognito] = useState<CognitoUser>()
  
    

    const signIn = () => {
      const authenticationDetails = new AuthenticationDetails({
        Username : email,
        Password : password
      })

      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: userPool
      })
      
      const cognitoUser1 = userPool.getCurrentUser()
      var user: UserInfo = {
        email: "",
        isAdmin: "",
        token: ""
      }
      if (cognitoUser1) {
        
        cognitoUser1.getSession(function (err: any, session: any){
          var token = session.getIdToken().getJwtToken()
          console.log("login token", token)
          cognitoUser1.getUserAttributes(function(err, result) {
            if (err) {
              console.log(err);
              return;
            }
            
            result?.forEach(attribute=> {
              if (attribute.getName() === "custom:is_Admin") {
                user = {
                  email: email,
                  isAdmin: attribute.Value,
                  token: token
                }
                setUser(user)
              }
            })
          })
        });
        user.isAdmin === "1" ? router.push({
          pathname: "/admin"
        }) : router.push({
          pathname: "/order"
        })
        
      } else {
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: (result) => {
            
            const accessToken = result.getAccessToken().getJwtToken()
            console.log("login access token", accessToken)
            cognitoUser.getSession(function (err: any, session: any){
              cognitoUser.getUserAttributes(function(err, result) {
                if (err) {
                  console.log(err);
                  return;
                }
                
                result?.forEach(attribute=> {
                  if (attribute.getName() === "custom:is_Admin") {
                    user = {
                      email: email,
                      isAdmin: attribute.Value,
                      token: accessToken
                    }
                    setUser(user)
                  }
                })
              })
            });
            user.isAdmin === "1" ? router.push({
              pathname: "/admin"
            }) : router.push({
              pathname: "/order"
            })
            
          },
          onFailure: (err) => {
            if (err.name === 'UserNotConfirmedException') {
              setUserCognito(cognitoUser)
              setNewUser(true)
              cognitoUser.resendConfirmationCode((err, result) => {
                if (err) {
                  console.log(err);
                }
              });
              return
            }
            console.log(err)
            console.log("NG, signIn:onFailure");
            console.error(err)
            
            alert('NG, Login please check email, password');
          }
        })
      }
      
    }

    const handleConfirmSignUp = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("dsdsa")
      try {
        
        userCognito?.confirmRegistration(verificationCode, true, async function(err, result) {
          if (err) {
            alert(err);
            return;
          }
          console.log("result verify", result)
          toast.success('You have been registed successful.')
          userCognito.signOut()
          setNewUser(false)
          await router.push('/login');
      });
        
      } catch (err) {
        console.error(err);
      }
    }

    const resendVerifyCode = () => {
      console.log("resend")
      
      if (userCognito) {
        console.log("user", userCognito)
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
      <div className="max-w-lg w-full bg-gray-100 shadow-lg p-8 flex flex-col">
        <p className="text-xl mb-4 text-center">Login in to your account</p>

        <hr className="bg-gray-600 border-0 h-px my-8" />

        <form className="flex flex-col">

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
              </button></>) : ( <>


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

          {/* <button
            className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
            type="submit"
          >
            Login
          </button> */}
          <Button 
            name="Login"
            type="primary" onClick={signIn} 
            className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"/>
              </>)}
        </form>
      </div>
    </main>
  }
  return Login
}