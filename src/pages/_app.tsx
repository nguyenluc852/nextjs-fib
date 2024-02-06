import '../../styles/globals.scss'
import { Provider } from "react-redux";
import type { AppProps } from 'next/app'
import { useService } from "../_app_service";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import c from "clsx";
import s from "./_app.module.scss";
import Header from '../components/templates/Header';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import Footer from '../components/templates/Footer';
// Amplify.configure(awsExports);

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


function App({ Component,
  pageProps }: AppProps) {
  const { store } = useService();
  
  
  const persistor = persistStore(store)
  return (
    <div className={s.App}>
      <div className={c(s.App_Main, "layout flex flex-col h-full max-h-screen")}>
        <MetaMaskUIProvider sdkOptions={{
          dappMetadata: {
            name: "Demo UI React App",
          }
        }}>
          <Provider store={store}>
            
            
              <PersistGate loading={null} persistor={persistor}>
              
                <Header  />

                <div className={c(s.App_Container, "relative h-full max-h-screen overflow-hidden bg-gray-100 dark:bg-gray-800") }>
                <ToastContainer
                  position={toast.POSITION.TOP_RIGHT}
                  autoClose={5000}
                />
                  <Component className={s.Container} {...pageProps} />
                  {/* <Component style={s.Container} {...pageProps} /> */}
                </div>
                <Footer /> 
              </PersistGate>

          </Provider>
        </MetaMaskUIProvider>
      </div>
    </div>
  );
}
export default App