import React from 'react'
import Head from 'next/head'
import styles from '../styles/Burn.module.css';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useAccount } from 'wagmi';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, doc, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbeEo8D_EAnkLqdhz9FVbWxCYqMzUMnNI",
  authDomain: "beries-53ae1.firebaseapp.com",
  projectId: "beries-53ae1",
  storageBucket: "beries-53ae1.appspot.com",
  messagingSenderId: "991951043377",
  appId: "1:991951043377:web:5b71cbebad323283e10e10",
  measurementId: "G-9RBVVZFRFX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Burn = () => {
  
  const { address, isConnected } = useAccount();
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {

      await setDoc(doc(db, "orders", address), {
        address: address,
        name: state.name,
        email: state.email,
        region: state.region,
        zip: state.zip,
        street: state.street,
        country: state.country,
        city: state.city,
        info: state.info,
      });
      console.log("Document written with ID: ", address);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  const initialState = {
    name: "",
    email: "",
    region: "",
    zip: "",
    street: "",
    country: "",
    city: "",
    info: "",
  }

  function reducer(state, action){
    switch (action.type) {
      case "update_input":
        return {
          ...state,
          [action.key]: action.value
        }
    }

  }
    const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
    <div className={styles.burnContainer}>
        <Head>
          <title>Burn - BeRies</title>
          <meta property="og:title" content="Burn - BeRies" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <section id="Title" className={styles.burnContainer1}>
          <h1 className={styles.burnText}>Burn for shipping</h1>
          <span className={styles.paragraph}>
            Burn your NFT to receive the BeRies pack you choose.
          </span>
        </section>

        <div className={styles.test}>
          
        </div>
        {isConnected ? (
          
            
      <form id="burn for shipping" onSubmit={handleSubmit} className={styles.burnContainer2}>
        <div className={styles.burnImageContainer}>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Email</h1>
            <input 
              placeholder='anon@beries.com' 
              className={styles.input}
              value={state.email}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "email",
                value: e.target.value
              })}>
            </input>
          </div>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>State/Prov/Region</h1>
            <input 
              placeholder='Ile-de-France'
              className={styles.input}
              value={state.region}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "region",
                value: e.target.value
              })}>
            </input>
          </div>
        </div>

          <div className={styles.row}>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Name</h1>
            <input 
              placeholder='Onze Gmi'
              className={styles.input}
              value={state.name}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "name",
                value: e.target.value
              })}></input>
          </div>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Postal/Zip</h1>
            <input 
              placeholder='75007'
              className={styles.input}
              value={state.zip}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "zip",
                value: e.target.value
              })}>
            </input>
          </div>
          </div>

          <div className={styles.row}>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Street</h1>
            <input 
              placeholder='5 av. Anatole France'
              className={styles.input}
              value={state.street}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "street",
                value: e.target.value
              })}>
            </input>
          </div>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Country</h1>
            <input 
              placeholder='France'
              className={styles.input}
              value={state.country}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "country",
                value: e.target.value
              })}></input>
          </div>
        </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>City</h1>
            <input 
              placeholder='Paris'
              className={styles.input}
              value={state.city}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "city",
                value: e.target.value
              })}></input>
          </div>
          <div className={styles.inputContainer}>
            <h1 className={styles.inputTitle}>Additional info</h1>
            <input 
              placeholder='anon@beries.com'
              className={styles.input}
              value={state.info}
              onChange={(e) => dispatch({ 
                type: "update_input",
                key: "info",
                value: e.target.value
              })}></input>
          </div>
          </div>
          <button type='submit'>Submit</button>
      </form>
        
        ) : (
          <h1 className='H1'>
            Please connect your wallet to continue.
          </h1>
                ) 
              }
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
    </>
  )
}

export default Burn
