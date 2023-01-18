import { useState } from 'react';
import "./Cart.css"


function Cart(){
    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  const [quantity, setquantity] = useState("");
  const [dropdown, setdropdown] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleaddress = (e) => {
    setaddress(e.target.value);
    setSubmitted(false);
  };

  const handlequantity = (e) => {
    setquantity(e.target.value);
    setSubmitted(false);
  };

  const handledropdown = (e) => {
    setdropdown(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const numberRegex = /^\d+$/;
    e.preventDefault();
    if (name.trim() === '') {
      setError(true);
      setMessage("Name is required");
    } else if (email.trim() === '') {
      setError(true);
      setMessage("Email is required");
    }else if(password.trim() === '') {
      setError(true);
      setMessage("Pssword is required");
    }else if(quantity.trim() === ''){
      setError(true);
      setMessage("Quantity is required");
    }
    else if(dropdown === ''){
      setError(true);
      setMessage("Pickup/dilvery is required");
    }
    else if(address.trim() === ''){
      setError(true);
      setMessage("Address is required");
    } else if (!regex.test(email.trim())) {
      setMessage("Invalid email. Please enter a correct email.");
    } else if(!numberRegex.test(quantity.trim())) {
      setMessage("Invalid quantity. Please enter a valid quantity.");
    }
    else {
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
        <h1>{name} Thank You for purchase!!</h1>
        <p>We will dilver your product on {address} as soon as possible </p>
      </div>
    );
  };

  const errorMessage = () => {
    return (
        <div
        className="shoppingCartErrorMessage"
        style={{
          display: error ? '' : 'none',
        }}>
        <p className = "shoppingCartErrorMessage">{message}</p>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>Shopping details</h1>
      </div>
 
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form className="formbox-address" id="formbox-address" action="/register" method="post" >
   
        <label className="label">Name *</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
 
        <label className="label">Email *</label>
        <input onChange={handleEmail} className="input"
          value={email} type="text" />
 
        <label className="label">Password *</label>
        <input onChange={handlePassword} className="input"
          value={password} type="text" />

        

        <label className="label">Quantity *</label>
        <input onChange={handlequantity} className="input"
          value={quantity} type="text" />

          <label className='dropdown'> Pickup/dilvery *</label>
          <select onChange={handledropdown} name="tier" id="tier"  className="input">
                <option >Please select</option>
                <option >Pick up</option>
                <option >Dilvery</option>
          
            </select>

            <label className="label">Address *</label>
        <textarea onChange={handleaddress} className="input"
          value={address} type="text" />
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
        

      </form>
    </div>
  );

}
export default Cart;