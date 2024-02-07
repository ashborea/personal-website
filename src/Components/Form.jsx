import { useState } from "react";

const Form = () => {
    const [formStatus, setFormStatus] = useState('Send');
    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');
        const {lastName, firstName, email, message} = e.target.elements;
        let conFom = {
            lastName: lastName.value,
            firstName : firstName.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <>
        <form onSubmit={onSubmit} className="bg-slate-300 flex flex-col p-5 w-2/3 m-auto mt-20">
            <label htmlFor="lastName" className="font-bold">Nom</label>
            <input type="text" id="lastName"/>
            <label htmlFor="firstName" className="font-bold" required>Prénom</label>
            <input type="text" id="firstName" />
            <label htmlFor="email" className="font-bold">Email</label>
            <input type="email" id="email" required />
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea  id="message" rows="10"  className="mb-5" required />
            <button type="submit" className="bg-darkbluebg rounded-lg text-white p-2 font-bold">Envoyer</button>
            {formStatus}
        </form>
        </>
    )
}

export default Form;