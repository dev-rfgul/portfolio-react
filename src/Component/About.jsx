
import Heading from './Heading';
import { motion } from 'framer-motion';

const AboutMe = () => {
    const stats = [
        { icon: "👥", title: "Education", detail: "B.Sc. Computer Science", institution: "Islamia University Bahawalpur" },
        { icon: "🏅", title: "Trainee Software Engineer", detail: "6 Months", institution: "Aitch Tech Bahawalpur " },
        { icon: "🚀", title: "Projects", detail: "30+", institution: "Practice Projects" },
        { icon: "📚", title: "Learning", detail: "Angular + DSA", institution: "Beginner" }
    ];

    return (
        <section id='about' className="py-16 px-6 md:px-8 lg:px-32 bg-gradient-to-b from-gray-50 to-gray-100">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Heading heading={"About Me"} subHeading={"Get to know more about me"} />
            </motion.div>

            <motion.div
                className="mt-12 w-full flex flex-col items-center gap-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-black transition-all hover:shadow-xl"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * index }}
                            viewport={{ once: true }}
                        >
                            {/* <div className="text-4xl mb-4 text-blue-600">{stat.icon}</div> */}
                            <h2 className="text-2xl font-bold text-gray-800 text-center">{stat.title}</h2>
                            <p className="text-gray-700 text-lg mt-2">{stat.detail}</p>
                            <p className="text-gray-500 font-bold text-center">{stat.institution}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
                    <p className="text-lg leading-relaxed text-gray-700">
                        I am a <span className='font-bold text-black'>Trainee Software Engineer</span> - Full Stack with <span className='font-bold text-black'>6+ Months</span> of experience in Full Stack Web  Development <span className='font-bold text-black'>MERN & Django</span> I have worked on <span className='font-bold text-black'>30+ practice projects</span> which included <span className='font-bold text-blue-800'><a target='_blank' href='https://www.taskai.studio'>Task AI Studio</a></span> and <span className='font-bold text-blue-800'><a href='https://www.glowzlifestyle.shop' target='_blank'>Glowz Lifestyle </a></span>(Ecom Website) and <span className='font-bold text-blue-800'> <a href='https://busconnect.pythonanywhere.com/'> Smart Univ Bus Management System</a></span> which gave me  a good understanding of Full Stack development.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {[ 'JavaScript','React', 'Node JS', 'Express JS', 'MongoDB','Django', 'Git', 'GitHub', 'Deployment','Responsive Design'].map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-200 text-black rounded-full text-sm font-medium">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6">
                        <a href="#contact" className="inline-block px-6 py-3 bg-white text-black border border-gray-900 font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
