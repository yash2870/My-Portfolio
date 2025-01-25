import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };
  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 bg-gradient-to-b from-gray-900 to-black text-center text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="space-y-4 ">
      <div className='mb-2'>
        <span>Email: </span>
        <span className="text-teal-500 ">
          <Mailto email="yashmukherjee62@gmail.com"  >
            yashmukherjee62@gmail.com
          </Mailto>
        </span>
        </div>
        <div className='mb-2'>
        <span>Contact Number: </span>
        <span className="text-teal-500 ">
        <Callto phone="+918697518674">+91 8697518674</Callto>
        </span>
        </div>
        <p>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/yash-mukhopadhyay-286183225"
            className="text-teal-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yash-mukhopadhyay
          </a>
        </p>
        <p>
          GitHub:{' '}
          <a
            href="https://github.com/yash2870"
            className="text-teal-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yash2870
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
