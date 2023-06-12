import './App.css';
import Header from './components/Header';
import InputField from './components/InputField';
import React, {useState} from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true)
    console.log("Registration complete!")
    console.log(submitted);
  };

  const inputFields = [
    {className: 'firstName', type: 'text', label: 'First Name:'},
    {className: 'lastName', type: 'text', label: 'Last Name:'},
    {className: 'password', type: 'password', label: 'Password:'},
  ];

  return (
    <div className="App">
      <Header name="Jane Doe"/>
      {submitted ? (
        <h2>Thank you for registering on our page!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          {inputFields.map((inputObj, index) => (
            <InputField 
              key={index}
              className={inputObj.className}
              type={inputObj.type}
              label={inputObj.label}
            />
          ))}
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default App;
