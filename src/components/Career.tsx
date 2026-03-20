import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Engineer</h4>
                <h5>ValersAI</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Built and deployed production ML models and LLM-powered applications. Architected RAG pipelines and agentic AI workflows. Integrated OpenAI, Anthropic, and Gemini APIs into production systems. Stack: Python, PyTorch, FastAPI, AWS, Docker.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GSoC 2026 Contributor</h4>
                <h5>Mesa (Mesa-LLM)</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Stabilizing Mesa-LLM for production use in agent-based modeling. Implementing structured outputs, multi-provider support, retry mechanisms. Collaborating with core maintainers: @wang-boyu, @EwoutH, @jackiekazil.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ML Intern</h4>
                <h5>ValersAI</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Fine-tuned BERT and GPT-2 models on custom datasets. Built data preprocessing and feature engineering pipelines. Developed REST APIs for ML model serving. Stack: Python, TensorFlow, Flask, HuggingFace.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc CSDA</h4>
                <h5>IIT Patna</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Computer Science and Data Analytics. Relevant coursework: Machine Learning, Data Structures, Algorithms, Statistics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
