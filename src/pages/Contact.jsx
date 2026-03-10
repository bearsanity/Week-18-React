import { useState } from 'react';

// standard regex email validation
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
};

// need a seperate hook for each one so they don't override each other
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessageMessage, setErrorMessageMessage] = useState('');

// errors for when user clicks out of input box with invalid entry  
    function handleBlur(e) {
        if (e.target.name === 'nameInput') {
            if (e.target.value.trim().length === 0) {
                setErrorMessageName("This field can't be empty.");
            } else {
                setErrorMessageName('');
            }
        }
        if (e.target.name === 'messageInput') {
            if (e.target.value.trim().length === 0) {
                setErrorMessageMessage("This field can't be empty.");
            } else {
                setErrorMessageMessage('');
            }
        }
        if (e.target.name === 'emailInput') {
            if (e.target.value.trim().length === 0) {
                setErrorMessageEmail("This field can't be empty.");
            } else if (!validateEmail(e.target.value)){
                setErrorMessageEmail('Not a valid email.');
            } else {
                setErrorMessageEmail('');
            }
        }
    }

    return (
        <div className="contact-container">
           <form onSubmit={(e) => e.preventDefault()}>
           <label>
                Name: <input name="nameInput" value={name} onChange={(e) => setName(e.target.value)} onBlur={handleBlur} />
                {errorMessageName && <p className="error-message">{errorMessageName}</p>}
            </label>
            <label>
                Email: <input name="emailInput" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleBlur}/>
                {errorMessageEmail && <p className="error-message">{errorMessageEmail}</p>}
            </label>
            <label>
                Message: <textarea name="messageInput" value={message} onChange={(e) => setMessage(e.target.value)} onBlur={handleBlur}/>
                {errorMessageMessage && <p className="error-message">{errorMessageMessage}</p>}
            </label>
            </form>
        </div>
    )
}

export default Contact;