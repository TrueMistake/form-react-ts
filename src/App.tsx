import React, {FC, useState} from 'react';
import Input from "./components/Input";
import {FormInput} from "./types/Types";
import ErrorText from "./components/ErrorText";

const App:FC = () => {
  const [form, setForm] = useState<FormInput>({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [success, setSuccess] = useState(false);
  const [valid, setValid] = useState(false);

  const firstName = (val:string) => {
    setForm({...form, firstName: val})
  }
  const lastName = (val:string) => {
    setForm({...form, lastName: val})
  }
  const email = (val:string) => {
    setForm({...form, email: val})
  }

  const submitForm = (event:any) => {
    event.preventDefault();
    if (form.firstName && form.lastName && form.email) {
      setValid(true);
      setForm({
        firstName: '',
        lastName: '',
        email: ''
      })
    }
    setSuccess(true);
  }

  return (
    <div className="App">
      <form className="form" onSubmit={submitForm}>
        {success && valid? <div className="success">Success! Thank you for register!</div> : null}

        <Input
          type="text"
          value={form.firstName}
          placeholder="First Name"
          name="firstName"
          handlerChange={firstName}
          />

        {success && !valid && !form.firstName ? <ErrorText error="Please enter a first name"/> : null}
        <Input
          type="text"
          value={form.lastName}
          placeholder="Last Name"
          name="lastName"
          handlerChange={lastName}
        />
        {success && !valid && !form.lastName ? <ErrorText error="Please enter a last name"/> : null}
        <Input
          type="text"
          value={form.email}
          placeholder="Email"
          name="email"
          handlerChange={email}
        />
        {success && !valid && !form.email ? <ErrorText error="Please enter a email address"/> : null}
        <button type="submit" className="btn">Register</button>
      </form>
    </div>
  );
}

export default App;
