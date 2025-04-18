import emailjs from '@emailjs/browser';
// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_xyjipv2';
const EMAILJS_TEMPLATE_ID = 'template_d2vmnmi';
const EMAILJS_PUBLIC_KEY = 'ycgCwEGp7HO-UI5AW';
// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};
// Send email
export const sendEmail = async (templateParams: {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}) => {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams
  );
};
