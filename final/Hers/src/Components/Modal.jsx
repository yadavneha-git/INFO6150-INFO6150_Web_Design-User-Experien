import { useRef } from "react";
import { useState } from 'react';
import "./Modal.css";
// import beautyData from "./beauty-data";


function Modal() {
  const subscribeRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };


  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} Thank You for Subscribe!!</h1>
      </div>
    );
  };

  const errorMessage = () => {


    return (

      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  <div className="messages">
    {errorMessage()}
    {successMessage()}
  </div>

  return (
    <div className="cardgift">

      <dialog className="subscribe-modal" ref={subscribeRef}>
        <span className='giftcard1' >Party in your inbox!</span>

        <form id="register" className="formbox" action="/Subscribe">

          <div className="information">
            <label className="name">Name</label>
            <input onChange={handleName} className="inputname"
              value={name} type="text" />


            <label className="email">Email</label>
            <input onChange={handleEmail} className="inputemail"
              value={email} type="text" />
          </div>

          <div className="subscribe__controls">
            <button onClick={() => {
              subscribeRef.current.close();
            }}
              className="subscribe__confirm"
            >
              Confirm
            </button>

            <button
              onClick={() => {
                subscribeRef.current.close();
              }}
              className="subscribe__cancel">
              Cancel
            </button>
          </div>
        </form>


      </dialog>


      <button
        className="subscribe__open"
        onClick={() => {
          subscribeRef.current.showModal();
        }}
      >
        Subscribe for Membership
      </button>


    </div>

  );


}

export default Modal;