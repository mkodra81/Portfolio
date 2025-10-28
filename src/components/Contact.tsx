import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_j16x32r', // Replace with your EmailJS service ID
          'template_97fbcc6', // Replace with your EmailJS template ID
          formRef.current,
          'blGh1jdKY9vjdxCf6' // Replace with your EmailJS user ID
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
          },
          (error) => {
            console.error('Error sending email:', error.text);
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <section id="contact" className="section-padding bg-dark">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-highlight font-mono mb-2">04. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="bg-darker rounded-lg p-6 md:p-8 border border-secondary/20">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-dark border-secondary/20 focus:border-highlight"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="bg-dark border-secondary/20 focus:border-highlight"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                className="bg-dark border-secondary/20 focus:border-highlight"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows={6}
                className="bg-dark border-secondary/20 focus:border-highlight resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-highlight hover:bg-highlight-dark text-darker font-medium"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;