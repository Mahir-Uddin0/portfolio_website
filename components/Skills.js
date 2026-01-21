import Image from "next/image";
import { FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaLinux, FaDatabase } from "react-icons/fa";
import { SiTensorflow, SiC, SiPytorch, SiNumpy, SiMysql, SiPandas, SiDocker, SiGit, SiKubernetes } from "react-icons/si";
import { FaProjectDiagram, FaLanguage, FaRegImage, FaCamera } from "react-icons/fa";


export default function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* AI/ML */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">AI/ML</h3>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/ml.svg" alt="ML" width={24} height={24} className="dark:invert"/> ML</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/dl.png" alt="DL" width={24} height={24} className="dark:invert"/> DL</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/nlp.png" alt="NLP" width={24} height={24} className="dark:invert"/> NLP</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/cv.png" alt="CV" width={24} height={24} className="dark:invert"/> CV</span>
            {/* <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/rl.png" alt="RL" width={24} height={24}/> RL</span> */}
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/ai.png" alt="AI" width={24} height={24} className="dark:invert"/> AI</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/chatgpt.svg" alt="Gen AI" width={22} height={22} className="dark:invert"/> Gen AI</span>
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FaPython className="text-yellow-400 text-xl" /> Python</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/c.svg" alt="C" width={24} height={24}/> C</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/c++.svg" alt="C++" width={59} height={59}/> C++</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FaJsSquare className="text-yellow-300 text-xl" /> JavaScript</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FaHtml5 className="text-orange-500 text-xl" /> HTML</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FaCss3Alt className="text-blue-500 text-xl" /> CSS</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><FaDatabase className="text-yellow-300 text-xl" /> SQL</span>
          </div>
        </div>

        {/* Libraries & Frameworks */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Libraries & Frameworks</h3>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><SiNumpy className="text-blue-600 text-xl" /> Numpy</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><SiPandas className="text-green-600 text-xl" /> Pandas</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/matplotlib.svg" alt="Matplotlib" width={24} height={24}/> Matplotlib</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/scikit-learn.svg" alt="Scikit-Learn" width={24} height={24}/> Scikit-Learn</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/seaborn.svg" alt="Seaborn" width={24} height={24}/> Seaborn</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><SiTensorflow className="text-orange-500 text-xl" /> TensorFlow</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><SiPytorch className="text-red-600 text-xl" /> PyTorch</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/langchain.svg" alt="LangChain" width={36} height={36} className="dark:invert" /> Langchain</span>
         </div>
        </div>

        {/* Tools & Platforms */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Others</h3>
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><SiGit className="text-orange-600 text-xl" /> Git</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/linux.svg" alt="Linux" width={24} height={24}/> Linux</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/excel.svg" alt="Excel" width={24} height={24}/> MS Excel</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/word.svg" alt="Word" width={24} height={24}/> MS Word</span>
            <span className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-3 py-1 rounded-full shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"><Image src="/images/skills/latex.svg" alt="LaTeX" width={24} height={24} className="dark:invert"/> LaTeX</span>
          </div>
        </div>

      </div>
      <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
        <em>I am also knowledgeable about Big Data, Data Engineering, Cloud Computing, Reinforcement Learning and IoT.</em>
      </div>
    </section>
  );
}