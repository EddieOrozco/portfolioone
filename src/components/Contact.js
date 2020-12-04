import React, { useState } from 'react';
import { db } from '../firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const [loader, setLoader] = useState(false);

  // const messageSent = () => {
  //   <div className='mb-3'>
  //                 <div className='loading'>Loading</div>
  //                 <div className='error-message'></div>
  //                 <div className='sent-message'>
  //                   Your message has been sent. Thank you!
  //                 </div>
  //               </div>
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('contacts')
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        // messageSent()
        alert('Your message has been sent. Thank you!');
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setEmail('');
    setMessage('');
    setSubject('');
  };

  return (
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='section-title' data-aos='fade-up'>
          <h2>Contact</h2>
          <p>Let's get in touch and build the web together.</p>
        </div>

        <div className='row mt-5 justify-content-center' data-aos='fade-up'>
          <div className='col-lg-10'>
            <form
              action='forms/contact.php'
              method='post'
              role='form'
              className='php-email-form'
              onSubmit={handleSubmit}
            >
              <div className='form-row'>
                <div className='col-md-6 form-group'>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control'
                    id='name'
                    placeholder='Your Name'
                    // data-rule='minlen:4'
                    // data-msg='Please enter at least 4 chars'
                  />
                  {/* <div className='validate'></div> */}
                </div>
                <div className='col-md-6 form-group'>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    placeholder='Your Email'
                    data-rule='email'
                    // data-msg='Please enter a valid email'
                  />
                  {/* <div className='validate'></div> */}
                </div>
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  name='subject'
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  id='subject'
                  placeholder='Subject'
                  data-rule='minlen:4'
                  // data-msg='Please enter at least 8 chars of subject'
                />
                {/* <div className='validate'></div> */}
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows='5'
                  data-rule='required'
                  // data-msg='Please send me a message'
                  placeholder='Message'
                ></textarea>
                {/* <div className='validate'></div> */}
              </div>
              <div className='mb-3'>
                <div className='loading'>Loading</div>
                <div className='error-message'></div>
                <div className='sent-message'>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className='text-center'>
                <button
                  type='submit'
                  style={{ background: loader ? '#ccc' : '#1bac91' }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
