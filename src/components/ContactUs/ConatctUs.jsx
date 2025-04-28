import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import pet from '../../images/pets-3715733_640-removebg-preview.png';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY// your user ID here
      );
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'We have received your message and will get back to you shortly.',
        confirmButtonColor: '#f87171',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
     // setStatus('Failed to send message. Please try again.');
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!newsletterEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Please enter an email!',
        confirmButtonColor: '#f87171',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Subscribed!',
      text: 'You have successfully subscribed to our newsletter.',
      confirmButtonColor: '#f87171',
    });

    setNewsletterEmail('');
  };

  return (
    <div className="bg-accent">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: `url('https://i.pinimg.com/474x/6f/6c/33/6f6c33903939975c320e9e81bc55c258.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center md:px-44 sm:px-0">
          <h1 className="text-white text-4xl font-bold mb-2">Contact Us</h1>
          <div className="text-white text-sm">
            <Link to="/" className="hover:underline">Home</Link> / Contact
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
        
        {/* Left - Form */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message!</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*" 
                className="w-1/2 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*" 
                className="w-1/2 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-300"
                required
              />
            </div>
            <input 
              type="text" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject" 
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message*" 
              rows="5" 
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-300"
              required
            />
            <button 
              type="submit" 
              className="bg-red-400 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Send Message
            </button>

            {status && <p className="text-green-600 mt-2">{status}</p>}
          </form>
        </div>

        {/* Right - Info Box */}
        <div className="flex-1 bg-red-400 text-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Information</h2>
          <p className="text-sm mb-4">
            Feel free to contact us anytime for inquiries or support.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              📧 <span className="ml-2">adoptly@yoursite.com</span>
            </div>
            <div className="flex items-center">
              📞 <span className="ml-2">(123) 456-789</span>
            </div>
            <div className="flex items-center">
              📍 <span className="ml-2">Pet Street 123 - New York</span>
            </div>
          </div>
        </div>

      </div>

      {/* Newsletter Section */}
      <div className="bg-accent pb-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Dog and Cat Image */}
          <motion.img 
            src={pet}
            alt="Dog and Cat" 
            className="h-60 object-contain mb-6 w-full" 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Text */}
          <h2 className="text-3xl font-bold text-center mb-4 -mt-10">Get In Touch With Us</h2>
          <p className="text-gray-600 text-center mb-8 px-6">
            Want to get the latest updates on pet care? Then subscribe to our newsletter for fun tips, tutorials and much more!
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-2/3 flex bg-white shadow-md rounded-full overflow-hidden">
            <input 
              type="email" 
              placeholder="Email" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 p-3 focus:outline-none"
              required
            />
            <button type="submit" className="bg-orange-400 text-white px-6 py-2 hover:bg-orange-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
