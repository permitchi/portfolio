import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, msg } = formData;
    
    if (!name || !email || !msg) {
      alert('Please fill in all fields');
      return;
    }

    const mailtoLink = `mailto:mickavallery@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=From: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(msg)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', msg: '' });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div id="Contact" className="px-4 max-w-4xl">
        <h1 className='p-4 mb-4 text-center font-semibold'>Contact Me</h1>
        <div className="flex items-center justify-center gap-20">
          <img src="/seagrass-tri.png" className='h-100'/>
          
        <div className='w-20' />
          <form className="contact-form text-2x1" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your full name.." 
              value={formData.name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your email.." 
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="msg">Message</label>
            <textarea 
              id="msg" 
              name="msg" 
              placeholder="Write something.." 
              value={formData.msg}
              onChange={handleChange}
            />

            <div className="form-actions">
              <input className="submit-button" type="submit" value="Send" />
            </div>
          </form>
          </div>

        </div>
      </div>
  );
}

export default Contact;