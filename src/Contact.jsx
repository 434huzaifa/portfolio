import emailjs from '@emailjs/browser';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMP_ID, form.current, import.meta.env.VITE_PUBLICK_KEY)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="user_name" value="Your Name" />
                    </div>
                    <TextInput id="user_name" name='user_name' type="text" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="user_email"  value="Your email" />
                    </div>
                    <TextInput id="user_email" name='user_email' type="email" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="user_email" value="Your Message" />
                    </div>
                    <Textarea name="message"></Textarea>
                </div>
                <Button type='submit'>Send</Button>
            </form>
        </div>
    );
};

export default Contact;