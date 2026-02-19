export interface Project {
    id: string;
    title: string;
    role: string;
    description: string;
    tech: string[];
    repoUrl: string;
    demoUrl: string;
    color: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Tamil Nadu Heritage Navigator',
        role: 'FrontEnd Developer',
        description:
            'An AI-powered, multilingual voice assistant for heritage tourism using LLAMA-2, FAISS, and LangChain. Integrated Whisper (STT) & Tacotron 2 (TTS) for Tamil-English voice interactions. Deployed on AWS with FastAPI & ReactJS for real-time insights.',
        tech: ['LLAMA-2', 'FAISS', 'LangChain', 'Whisper', 'Tacotron 2', 'FastAPI', 'ReactJS'],
        repoUrl: 'https://github.com/hariharardev',
        demoUrl: '#',
        color: '#ff6b35',
    },
    {
        id: '2',
        title: 'To Do List App',
        role: 'Python Developer',
        description:
            'A graphical user interface (GUI) to-do list application in Python. Integrated an SQL database for persistent storage, allowing users to add, edit, and delete tasks seamlessly.',
        tech: ['Python', 'MySQL', 'Git', 'GitHub'],
        repoUrl: 'https://github.com/hariharardev',
        demoUrl: '#',
        color: '#4ecdc4',
    },
    {
        id: '3',
        title: 'Software Engineering Portfolio',
        role: 'Python Developer',
        description:
            'Developed and hosted a Resume Project using Node modules, showcasing skills on GitHub as part of an online portfolio.',
        tech: ['Python', 'Git', 'GitHub', 'ReactJS', 'HTML', 'CSS', 'JavaScript'],
        repoUrl: 'https://github.com/hariharardev',
        demoUrl: '#',
        color: '#6366f1',
    },
];
