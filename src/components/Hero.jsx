import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            className="hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>Full Stack Developer</h1>
            <p>Python · Django · React · APIs · Databases</p>

            <div className="hero-btns">
                <a href="#contact" className="btn">Hire Me</a>
                <a href="/resume.pdf" className="btn outline" target="_blank">
                    View Resume
                </a>
            </div>
        </motion.section>
    );
}
