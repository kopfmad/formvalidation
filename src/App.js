import React, {useState} from "react";

function App() {

let qtyErrors = 0

// HOOKS
let [name,setName] = useState('')
let [phone,setPhone] = useState('')
let [password,setPassword] = useState('')
let [cpassword,setCpassword] = useState('')

// FUNCTIONS
// CHANGING INPUTFIELDS
function changeName(e){
setName(e.target.value)
}

function changePhone(e){
setPhone(e.target.value)
}

function changePassword(e){
setPassword(e.target.value)
}

function changeCpassword(e){
setCpassword(e.target.value)
}

// ANALYZING INPUTFIELD

function checkName (){
  if (name.trim().length <5 | name === "" | name === null){
    alert("Please insert your name")
    qtyErrors+=1

  }
}

function checkPhone (){
  if (phone.trim().length <8 | phone === "" | phone === null){
    alert("Please insert your phone number")
    qtyErrors+=1
  }
}

function checkPassword (){
  if (password.trim().length <8 | password === "" | password === null){
    alert("Password must have at least 8 characters")
    qtyErrors+=1
  }
}

function checkCpassword (){
  if (cpassword !== password | cpassword === "" | cpassword === null){
    alert("Password confirmation incorrect")
    qtyErrors+=1
  }
}

// CLIKING THE BUTTON
function clicked (e) {
  qtyErrors=0
checkName()
checkPhone()
checkPassword()
checkCpassword()

if(qtyErrors>0){e.preventDefault()}
}


// APP

  return (
    <div className="App">
      <div className="container">
        <h1>Form Validation</h1>
        <form>
          <div>
            {" "}
            <input type="text" placeholder="Name" onChange={changeName} value={name} required/>{" "}
          </div>
          <div>
            <input type="email" placeholder="E-mail" required/>
          </div>
          <div>
            <input type="number" placeholder="Phone" onChange={changePhone} value={phone} required/>
          </div>
          <div>
            <input type="password" placeholder="Password" onChange={changePassword} value={password} required/>
          </div>
          <div>
            <input type="password" placeholder="Confirm Password" onChange={changeCpassword} value={cpassword} required/>
          </div>
          <button onClick={clicked}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
