import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Adarsh Kumar, a BSc CSDA student at IIT Patna with 2 years of hands-on ML engineering experience. I've built production LLM systems, agentic AI workflows, and full-stack applications that push the boundaries of what's possible with artificial intelligence.
        </p>
        <p className="para">
          From fine-tuning BERT and GPT-2 models to architecting RAG pipelines and deploying AI assistants on AWS, I thrive at the intersection of research and real-world deployment. My work at ValersAI (2024-2026) gave me deep experience shipping ML products that actually work.
        </p>
        <p className="para">
          When I'm not training models, I'm building IoT systems with ESP32, contributing to open-source (GSoC 2026 contributor — Mesa-LLM), or automating everything with n8n workflows.
        </p>
      </div>
    </div>
  );
};

export default About;
