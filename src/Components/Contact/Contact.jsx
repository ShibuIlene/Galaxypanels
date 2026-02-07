import React from 'react'
import './Contact.css'
import contactImg from '../../assets/contact-img.png'
import mailImg from '../../assets/mail.png'
import phoneImg from '../../assets/phone.png'
import addressImg from '../../assets/address.png'


export const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b923b334-a5c6-4749-9a8c-3da719aa6eb1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" >
            <div className="contact-col">
                <h3>Send us a message <img src={contactImg} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur placeat cum sint fugit mollitia voluptatem minima rem pariatur voluptatibus!</p>
                <ul>
                    <li>
                        <img src={mailImg} alt="" /> galaxypanels@gmail.com
                    </li>
                    <li>
                        <img src={phoneImg} alt="" /> +1 234 567 8901
                    </li>
                    <li>
                        <img src={addressImg} alt="" /> 1234 Street Name, City, State, Country
                    </li>

                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">
                        Your Name
                    </label>
                    <input type="text" placeholder='Enter your name'  required />
                    <label htmlFor="">
                        Your Email
                    </label>
                    <input type="email" placeholder='Enter your email' required />
                    <label htmlFor="">
                        Phone Number
                    </label>
                    <input type="tel" placeholder='Enter your phone number' required />
                    <label htmlFor="">
                        Your Message
                    </label>
                    <textarea name='message'rows="5" placeholder='Enter your message' required ></textarea>
                    <button type='submit' className='btn dark-btn'>Send Message</button>
                </form>
                <span>{result}</span>
            </div>

    </div>
  )
}
