export default function Contact() {
    return (
        <section id="contact">
            <h2>Contact</h2>

            <form
                className="contact-form"
                action="https://formspree.io/f/xyzzabcd"
                method="POST"
            >
                <input type="text" name="name" placeholder="Your name" required />
                <input type="email" name="email" placeholder="Your email" required />
                <textarea name="message" placeholder="Project details..." required />
                <button type="submit">Send Message</button>
            </form>

            <p className="alt">
                Or Email: <b>veereshhanni347@gmail.com</b>
            </p>

            <p>GitHub: github.com/veeresh-hanni</p>
            <p>LinkedIn: linkedin.com/in/veeresh-hanni-9775ba33b/</p>
        </section>
    );
}
