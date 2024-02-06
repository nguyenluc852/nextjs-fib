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

const userPool = new CognitoUserPool({
  UserPoolId: awsConfiguration.UserPoolId,
  ClientId: awsConfiguration.ClientId,

})
type Props = {
  className?: string
}
export const view = (useService: UseService) => {
  const Login: NextPage = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
    if (cognitoUser1) {
      router.push({
        pathname: "/admin"
      })
    } else {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          console.log('result: ' + result)
          const accessToken = result.getAccessToken().getJwtToken()
          console.log('AccessToken: ' + accessToken)
          setEmail('')
          setPassword('')
          router.push({
            pathname: "/admin"
          })
        },
        onFailure: (err) => {
          console.log(err)
          console.log("NG, signIn:onFailure");
          console.error(err)
          
          alert('NG, Login please check email, password');
        }
      })
    }
    
  }
   

    return <main className={c(styles.main, "bg-gray-200 h-screen flex items-center justify-center")}>
      <div className="max-w-lg w-full bg-gray-100 shadow-lg p-8 flex flex-col">
        <p className="text-xl mb-4 text-center">Login in to your account</p>

        <hr className="bg-gray-600 border-0 h-px my-8" />

        <form className="flex flex-col">
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
        </form>
      </div>
    </main>
  }
  return Login
}