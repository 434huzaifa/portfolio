import emailjs from '@emailjs/browser';
import { Button, Card, Label, TextInput, Textarea } from 'flowbite-react';
import { FaGithub,FaLinkedin  } from "react-icons/fa";
import { useRef } from 'react';
import { IoMdMail } from "react-icons/io";
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
        <Card className='bg-white/10 backdrop-blur-sm'>
            <div className='flex justify-center flex-wrap gap-5'>
                <div className='flex-1'>
                    <p className='text-center text-lg font-semibold'>Contact Me</p>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="user_name" value="Your Name" />
                            </div>
                            <TextInput id="user_name" name='user_name' type="text" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="user_email" value="Your email" />
                            </div>
                            <TextInput id="user_email" name='user_email' type="email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="user_email" value="Your Message" />
                            </div>
                            <Textarea name="message"></Textarea>
                        </div>
                        <Button className='mt-5' type='submit' color='purple' >Send</Button>
                    </form>
                </div>

                <div className='flex-1 mt-11'>
                    <p className='flex items-center gap-3 p-1'>
                        <IoMdMail className='text-3xl' /> <span className='text-xl font-semibold'><a className='underline text-blue-500' href="mailto:saadhuzaifa2497@gmail.com">saadhuzaifa2497@gmail.com</a></span>
                    </p>
                    <p className='flex items-center gap-3 p-1'>
                        <FaGithub className='text-3xl' /> <span className='text-xl font-semibold'><a className='underline text-blue-500' href="https://github.com/434huzaifa">https://github.com/434huzaifa</a></span>
                    </p>
                    <p className='flex items-center gap-3 p-1'>
                        <FaLinkedin className='text-3xl' /> <span className='text-xl font-semibold'><a className='underline text-blue-500' href="http://www.linkedin.com/in/434-md-huzaifa">http://www.linkedin.com/in/434-md-huzaifa</a></span>
                    </p>
                </div>
            </div>


        </Card>
    );
};

export default Contact;