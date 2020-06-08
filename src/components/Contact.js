import React, { Component } from 'react';

class Contact extends Component {
  render() {
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
              >
                <div className='form-row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Your Name'
                      data-rule='minlen:4'
                      data-msg='Please enter at least 4 chars'
                    />
                    <div className='validate'></div>
                  </div>
                  <div className='col-md-6 form-group'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      data-rule='email'
                      data-msg='Please enter a valid email'
                    />
                    <div className='validate'></div>
                  </div>
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    name='subject'
                    id='subject'
                    placeholder='Subject'
                    data-rule='minlen:4'
                    data-msg='Please enter at least 8 chars of subject'
                  />
                  <div className='validate'></div>
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control'
                    name='message'
                    rows='5'
                    data-rule='required'
                    data-msg='Please write something for us'
                    placeholder='Message'
                  ></textarea>
                  <div className='validate'></div>
                </div>
                <div className='mb-3'>
                  <div className='loading'>Loading</div>
                  <div className='error-message'></div>
                  <div className='sent-message'>
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className='text-center'>
                  <button type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
