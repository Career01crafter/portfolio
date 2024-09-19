document.addEventListener("DOMContentLoaded", ()=> {
    const form = document.getElementById('contact-form') as HTMLFormElement

    form.addEventListener('submit',(event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const number = (document.getElementById('number') as HTMLInputElement).value;
        const text = (document.getElementById('message') as HTMLTextAreaElement).value;
        
        alert(`${name} Thankyou! Yoour message has been sent!`);
        form.reset();
    })
})
