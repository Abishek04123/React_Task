import './Contact.css'
import { useState } from 'react';


const Contact = () => {

    const [show , setshow] = useState(false)
    
    function button1 () {
    setshow(!show)
    }

    return (
        <div className="contact-main">

            <h1>Want To Contact Me?</h1>
                 <div className='know'>
            {
                show && <div className='cont-inter'>

                    <div>
                        <p><b>Contact Number</b> : +91 8072560993</p>
                        <p><b>Email</b> : redme.abi04123@gmail.com</p>
                        <p><b>LinkedIn</b> : <a href='https://www.linkedin.com/in/abishek-r-a01588226'>https://www.linkedin.com/in/abishek-r-a01588226</a></p>
                        <p><b>Github</b> : <a href='https://github.com/Abishek04123'>https://github.com/Abishek04123</a></p>
                        <p><b>Instagram</b> : <a href='https://www.instagram.com/_mr_perfect_guy_/'>https://www.instagram.com/_mr_perfect_guy_/</a></p>


                    </div>



                </div>
            }
               <button type='button' onClick={button1} className='button-cont'><b><i>Click Here</i></b></button>

        </div>
        </div>
    )
  };

  export default Contact;