import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>

            <motion.div
                className="project"
                whileHover={{ y: -4 }}
            >
                <h3>Pingone – AI Chat Application</h3>

                <p>
                    Production-ready AI chat application with secure authentication,
                    REST APIs, and database-backed conversations.
                </p>

                <ul>
                    <li>React frontend with modern UX</li>
                    <li>Django REST backend</li>
                    <li>PostgreSQL + MongoDB</li>
                    <li>Deployed on Render</li>
                </ul>

                <a
                    href="https://pingone.onrender.com"
                    target="_blank"
                    className="link"
                >
                    Live Demo →
                </a>
            </motion.div>
        </section>
    );
}
