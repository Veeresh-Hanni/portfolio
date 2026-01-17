import { motion } from "framer-motion";

const skills = [
    "Python", "Django", "Django REST",
    "React", "JavaScript",
    "MySQL", "PostgreSQL", "MongoDB",
    "REST APIs", "Git", "Docker", "Linux"
];

export default function Skills() {
    return (
        <section>
            <h2>Skills</h2>

            <motion.div
                className="skills"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                {skills.map(skill => (
                    <span key={skill}>{skill}</span>
                ))}
            </motion.div>
        </section>
    );
}
