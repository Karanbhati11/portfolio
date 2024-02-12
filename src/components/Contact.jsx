import React, { useState } from 'react';

export default function Contact() {
     const [ formData, setFormData ] = useState({
          name: '',
          email: '',
          message: ''
     });


     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [ name ]: value });
     };

     const formKey = "mvoeagzy"
     const handleSubmit = async (e) => {
          e.preventDefault();
          try {
               await fetch(`https://formspree.io/f/${formKey}`, {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                         'Content-Type': 'application/json'
                    }
               });
               setFormData({ name: '', email: '', message: '' }); // Reset form data
               alert('Your message has been sent successfully!');
          } catch (error) {
               console.error('Error submitting form:', error);
          }
     };

     return (
          <div className="col-xxl-8 col-xl-9">
               <div className="bostami-page-content-wrap">
                    {/* Your other JSX */}
                    <div className="section-wrapper pr-60 pl-60 mb-60">
                         <div className="contact-area bg-light-white-2">
                              <h5 className="contact-title">I'm always open to discussing produuct</h5>
                              <h5 className="contact-title-b">design work or partnerships.</h5>
                              <form className="contact-form" onSubmit={handleSubmit}>
                                   <div class="form-input-item mb-60">
                                        <label class="input-lebel name">name *</label>
                                        <input name="name" class="input-box name" type="text" required value={formData.name} onChange={handleChange} />
                                   </div>
                                   <div class="form-input-item mb-60">
                                        <label class="input-lebel gmail">Email *</label>
                                        <input name="email" class="input-box gmail" type="email" required value={formData.email} onChange={handleChange} />
                                   </div>
                                   <div class="form-input-item mb-40">
                                        <label class="input-lebel message">Message *</label>
                                        <textarea name="message" class="input-box message" cols="30" rows="10" value={formData.message} onChange={handleChange}></textarea>
                                   </div>
                                   <button type="submit" value="Send" className="form-btn">submit</button>
                              </form>
                         </div>
                    </div>

                    <Copyright />
               </div>
          </div>
     );
}
