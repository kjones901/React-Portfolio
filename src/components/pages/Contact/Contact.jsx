import React, {useState} from 'react';
import { validateEmail } from '../../../utils/helpers';
import { ContactContainer, ContactMeTitle, MessageInput, MessageInputContainer, NameEmailInput, NameEmailInputContainer, SideImage, SubmitButton, UpperBox } from './ContactStyle';
import BoxImage from "../../../assets/templateComicImage.jpeg"

export default function Contact() {

  // const [formData, setFormData] = useState({});
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    // setFormData({...formData, [inputType] : inputValue})
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }

  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email is invalid');
      return;
    }
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <ContactContainer>
      <UpperBox>
        <NameEmailInputContainer>
        <ContactMeTitle>Contact Me</ContactMeTitle>
        <NameEmailInput
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <NameEmailInput
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        </NameEmailInputContainer>
        <SideImage src={BoxImage}></SideImage>
        </UpperBox>  
        <MessageInputContainer>
          <MessageInput
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Send a message"
          />
          </MessageInputContainer>
        <SubmitButton onClick={handleFormSubmit}>Submit</SubmitButton>
      {errorMessage && (
        <div>
          <p classname="error-text">{errorMessage}</p>
        </div>
      )}
    </ContactContainer>
  );
}
