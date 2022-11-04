import './form.css'
function Form(){
    const name = 'Oluwasegun'
    return(
        <section className="form">
            <div className='heading'>
                <h1 className="contact-header">Contact Me</h1>
                <p className="contact-desc">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form>
                <div className='name-field'>
                    <div>
                        <label>First name</label>
                        <input type='text' placeholder="Enter Your First Name" id='first_name'/>
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type='text' placeholder="Enter Your First Name" id='last_name'/>
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' placeholder="yourname@email.com" id='email'/>
                </div>
                <div>
                    <label>Message</label>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id='message'/>
                </div>
                <div className='checkbox'>
                    <input type='checkbox'/>
                    <span>You agree to providing your data to {name} who may contact you.</span>
                </div>
                <div>
                    <input type='submit' className='btn-contact' id='btn__submit'/>
                </div>
            </form>
        </section>
    )
}

export default Form