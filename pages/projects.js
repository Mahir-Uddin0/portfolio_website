import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-20 bg-white dark:bg-black">

      {/* Page Container */}
      <section className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            A selection of hands-on projects focused on Machine Learning, Deep Learning,
            and applied AI. Each project emphasizes problem formulation, modeling,
            and practical implementation. Source code is available on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


          {/* 1. Project Card */}
          <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                LLM Fine-Tuning with RAG for Investment Guidance
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Developed a domain-specific investing assistant by fine-tuning the LLaMA 3.2 (3B) model on
                finance and investment datasets. Integrated a Retrieval-Augmented Generation (RAG) pipeline
                that dynamically pulls information from investment books, company annual reports, and
                relevant web articles to provide context-aware, data-driven investment guidance.
              </p>

            </div>

            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">LLM</span>
                <span className="skill-pill">LangChain</span>
                <span className="skill-pill">Vector DB</span>
                <span className="skill-pill">RAG</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/llm-finetuning-rag"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* 3. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Density-Aware Dynamic Cluster Splitting Algorithm
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Designed a density-aware post-processing algorithm that automatically detects and
                splits erroneously merged k-means clusters. The method recursively refines clusters
                using spatial density analysis, removing dependency on correct k initialization and
                improving robustness for complex, overlapping data distributions.              </p>

            </div>

            {/* GitHub */}
            <div className="mt-6">
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">Numpy</span>
                <span className="skill-pill">Pandas</span>
                <span className="skill-pill">Scikit-Learn</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/density-aware-cluster-splitting"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* 3. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Smart EV Charging Scheduler for Self-Driving Vehicles
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Designed an automated scheduler for self-driving electric vehicles that optimizes charging assignments based on various data
                such as battery levels, station availability, and travel distances. Implemented with MiniZinc and constraint programming to ensure efficient,
                conflict-free scheduling while minimizing total travel distance.
              </p>

            </div>

            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">MiniZinc</span>
                <span className="skill-pill">CSP</span>
                <span className="skill-pill">Optimization</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/EV-charging-scheduler"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* 4. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Stock Market Trend Prediction using ANFIS
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                This project applies an Adaptive Neuro-Fuzzy Inference System (ANFIS) to predict short-term
                stock market trends using technical indicators such as RSI, MACD, and Volume Ratios. By
                integrating fuzzy logic with neural network learning, the model automatically learns fuzzy
                rules that capture non-linear patterns in stock price movements.
              </p>


            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">ANFIS</span>
                <span className="skill-pill">PyTorch</span>
                <span className="skill-pill">Scikit-learn</span>
              </div>
            </div>
            <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/stock-trend-identification-using-ANFIS"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* 5. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Uber Fare Prediction with Data Cleaning & EDA
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Performed rigorous data cleaning and exploratory data analysis to identify key factors
                influencing Uber fares. Built and refined regression models with regularization. Validated
                insights and model performance using error analysis and statistical tests.
              </p>

            </div>

            {/* GitHub */}
            <div className="mt-6">
              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">EDA</span>
                <span className="skill-pill">Statistics</span>
                <span className="skill-pill">Pandas</span>
                <span className="skill-pill">Matplotlib</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/Uber-Fare-Prediction"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>



          {/* 6. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technical Analysis and Predictive Insights on Stock Returns
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Developed a Python-based system to compute key technical indicators (SMA, EMA, RSI, MACD, Volume)
                and analyze stock return distributions under custom conditions. Enables data-driven insights for
                identifying high-probability bullish scenarios for stock price.
              </p>

            </div>

            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">Scikit-learn</span>
                <span className="skill-pill">Matplotlib</span>
                <span className="skill-pill">TA</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/stock-return-analysis/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

          {/* 7. Project Card */}
          <div className="bg-gray-100  dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Intelligent Crime Solver using Prolog
              </h3>

              <p className="mt-3 text-sm text-justify text-gray-600 dark:text-gray-400 leading-relaxed">
                Built a logic-based AI system using Knowledge Representation & Reasoning to investigate
                complex murder scenarios. The model evaluates motives, evidence, contradictions, and
                cover-ups to identify the killer(s), demonstrating advanced logical deduction, structured
                reasoning, and AI-driven problem solving.
              </p>

            </div>

            <div className="mt-6">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="skill-pill">Prolog</span>
                <span className="skill-pill">Expert Systems</span>
              </div>
              <br></br>
              <a
                href="https://github.com/Mahir-Uddin0/prolog-knowledge-based-crime-solver/tree/main"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <FaGithub className="text-lg" />
                View Code
              </a>
            </div>
          </div>

        </div>


      </section>
    </main>
  );
}
