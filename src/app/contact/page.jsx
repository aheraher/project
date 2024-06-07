import React from 'react';
import ContactForm from '../componets/ContactForm';
const FeedbackSection = () => {
  return (
    <section className="text-gray-600   mt-[-50px]  mb-[-40px] body-font relative">
      <div className="absolute inset-0 bg-gray-300">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d674.135721775993!2d73.60032354665735!3d19.94375190879848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1716648666424!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
       <ContactForm/>
      </div>
    </section>
  );
};

export default FeedbackSection;
