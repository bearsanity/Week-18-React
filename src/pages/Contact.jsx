 function Contact() {
    return (
        <div>
            <label>
                Name: <input name="nameInput" />
            </label>
            <label>
                Email: <input name="emailInput" />
            </label>
            <label>
                Message: <textarea name="messageInput" />
            </label>
        </div>
    )
 }

export default Contact;