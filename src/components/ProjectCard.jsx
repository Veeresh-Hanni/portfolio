import { Github, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className={`group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-teal-500/50 transition-all ${project.featured ? 'md:col-span-2' : ''}`}>
            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-teal-500 text-xs font-bold uppercase tracking-wider mb-1 block">
                            {project.role}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex gap-3">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-teal-500 hover:text-slate-900 transition-all">
                                <Globe size={18} />
                            </a>
                        )}
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-white hover:text-slate-900 transition-all">
                                <Github size={18} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">
                    {project.description}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded-md border border-slate-700/50">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;