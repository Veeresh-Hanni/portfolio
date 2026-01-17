import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            id="about"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>About</h2>
            <p>
                I build scalable, production-ready web applications using modern
                backend and frontend technologies. Focused on clean architecture,
                performance, and real-world usability.
            </p>
        </motion.section>
    );
}
