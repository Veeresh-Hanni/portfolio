import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h1>Veeresh Hanni</h1>
            <p>
                Full Stack Developer · Python · Django · React
            </p>

            <div className="header-actions text-2xl ">
                <a href="/resume.pdf" target="_blank" className="btn">
                    Resume
                </a>
                <a href="#contact" className="btn outline">
                    Contact
                </a>
            </div>
        </motion.header>
    );
}
