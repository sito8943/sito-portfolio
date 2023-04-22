const {
  REACT_APP_EMAILJS_SERVICE_ID,
  REACT_APP_EMAILJS_TEMPLATE_ID,
  REACT_APP_EMAILJS_PUBLIC_ID,
  REACT_APP_GA,
  REACT_APP_GA2,
} = process.env;

const config = {
  serviceId: REACT_APP_EMAILJS_SERVICE_ID,
  templateId: REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: REACT_APP_EMAILJS_PUBLIC_ID,
  ga: REACT_APP_GA,
};

export default config;
