import React from 'react'
import MsgIcon from '../../assets/msg-icon.png'
import MailIcon from '../../assets/mail-icon.png'
import PhoneIcon from '../../assets/phone-icon.png'
import LocationIcon from '../../assets/location-icon.png'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9aa38b22-826b-45ba-b99f-77ba6b37cd1f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contactInfo">
            <h2>Send us a message <img src={MsgIcon} alt="msg-icon" /></h2>
            <p>Feel free to reach out through contact form or find our contact information below.
                 Your feedback, questions and suggestions are important to us as we strive to provide
                  exceptional service to our university community.</p>
            <h3><img src={MailIcon} alt="MailIcon" /> educity@gmail.com</h3>
            <h3><img src={PhoneIcon} alt="PhoneIcon" /> +121-1234567</h3>
            <div className='location'>
                <img src={LocationIcon} alt="LocationIcon" />
                <h3>77 Massachusetts Ave, Cambridge <br />MA 02139, United States</h3>
            </div>
        </div>
        <div className="userInfo">
            <form onSubmit={onSubmit}>
                <h3>Your Name</h3>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <h3>Your E-mail address</h3>
                <input type="tel" name='email' placeholder='Enter your e-mail address' required/>
                <h3>Write your messages here</h3>
                <textarea name="message" placeholder='Enter your message' rows={7} required></textarea>
                <button type='submit'>Submit details</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact