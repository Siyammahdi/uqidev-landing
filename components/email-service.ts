import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_xyjipv2';
const EMAILJS_TEMPLATE_ID = 'template_0y5zmld';
const EMAILJS_PUBLIC_KEY = 'ycgCwEGp7HO-UI5AW';

// Enable debug mode for development
const DEBUG = process.env.NODE_ENV === 'development';

// Initialize EmailJS
export const initEmailJS = () => {
  if (DEBUG) console.log('Initializing EmailJS with public key:', EMAILJS_PUBLIC_KEY);
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send email
export const sendEmail = async (templateParams: {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}) => {
  if (DEBUG) {
    console.log('Sending email with EmailJS:');
    console.log('- Service ID:', EMAILJS_SERVICE_ID);
    console.log('- Template ID:', EMAILJS_TEMPLATE_ID);
    console.log('- Parameters:', templateParams);
  }
  
  try {
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );
    
    if (DEBUG) console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    if (DEBUG) console.error('EmailJS send error:', error);
    throw error;
  }
}; 