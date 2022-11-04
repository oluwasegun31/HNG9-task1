import { useState } from 'react'
import './form.css'
function Form(){
    const name = 'Oluwasegun'
    const [message, setMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const[error, setError] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(message.length === 0){
            setError(true)
        }
        if(message){
            console.log(`First Name: ${firstName}  Last Name: ${lastName}  Email: ${email}  Message: ${message}`)
            
        }
    }
    
    return(
        <section className="form">
            <div className='heading'>
                <h1 className="contact-header">Contact Me</h1>
                <p className="contact-desc">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='name-field'>
                    <div>
                        <label>First name</label>
                        <input type='text' placeholder="Enter Your First Name" id='first_name' onChange={e=> setFirstName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type='text' placeholder="Enter Your First Name" id='last_name' onChange={e=> setLastName(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder="yourname@email.com" id='email' onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message' 
                    onChange={e=> setMessage(e.target.value)}
                    className = {error && message.length <= 0 ? `error-b` : ''}
                    />
                    {error && message.length <=0 ? <p className='error-m'>Please enter a message</p> : ''}
                    
                </div>
                <div className='checkbox'>
                    <input type='checkbox'/>
                    <span>You agree to providing your data to {name} who may contact you.</span>
                </div>
                <div>
                    <input type='submit' className='btn-contact' id='btn__submit' value='Send message'/>
                </div>
            </form>
        </section>
    )
}

export default Form