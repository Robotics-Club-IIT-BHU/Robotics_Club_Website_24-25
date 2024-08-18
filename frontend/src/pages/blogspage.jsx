// import React from 'react';
import Navbar from "../components/Navbar";
import Background from '../components/Background';
import Footer from "../components/Footer";
import { IoArrowBackCircleOutline } from "react-icons/io5";
const BlogPage = () => {
    return (
      <>
        <main className="text-white relative">
          <Background />
          <Navbar />
          <div className="px-20 mt-10">
            <h1 className="text-white text-3xl">LLM Agents for Tool Planning & Function Calling - Part 1 <a href="/blogs" className="float-end"><IoArrowBackCircleOutline style={{ fontSize: '3rem' }}/></a></h1>
            <br></br>
            <p>This post introduces the work on developing efficient LLM agents for external tool usage, focusing on reasoning, planning, and function calling. The project originated from a problem statement proposed by DevRev at Inter IIT Tech Meet 12.0 and evolved into a research paper. For more details, see our arxiv preprint titled SwissNYF: Tool Grounded LLM Agents for Black Box Setting.</p>
          </div>

          <div className="flex justify-between items-center text-white px-20 py-4">
            <h4>Dhruv Jain</h4>
            <h4>05 June, 2024</h4>
          </div>

          <hr className="border-t border-white mx-auto w-11/12 my-4" />

          <div className="mx-20 text-white">
          <h1 className="text-purple-200 text-3xl">
            Reasoning & Planning with LLMs
            </h1>
<br></br>
            <p>
            Planning involves breaking down complex problems into simpler subproblems and solving them sequentially. LLMs leverage their pre-training data and fine-tuning to perform reasoning, such as mathematical or conceptual tasks. However, LLMs can sometimes "hallucinate" by providing confident but incorrect answers due to flawed reasoning.
            </p>
          </div>
          <br></br>
          <div className="mx-20 text-white">
          <h3 className="text-purple-200 text-3xl">
          Improving LLM Reasoning:
            </h3>
<br></br>
<p>
    <strong>Fine-Tuning:</strong> Enhances reasoning for specific tasks but requires significant computing resources.
</p>
<br></br>
<p>
    <strong>Prompting Techniques: </strong> Helps LLMs by providing detailed instructions to improve accuracy
    
</p>
<br></br>
          </div>
          <div className="mx-20 text-white">
          <h3 className="text-purple-200 text-3xl">
          Tool Planning & Function Calling
            </h3>
<br></br>
<p>
    <strong>Fine-Tuning:</strong>  Involves identifying and sequencing functions needed to solve a problem. For example, in a PyTorch scenario, it involves generating tensors and performing operations using specific functions.
</p>
<br></br>
<p>
    <strong>Function Calling:</strong>   Refers to executing functions with appropriate arguments.
</p>
<br></br>


          </div>

          <div className="flex justify-center bg-white h-80 w-11/12 max-w-6xl mx-auto my-10 rounded-lg"></div>

          <div className="mx-20 text-white">
          <h3 className="text-purple-200 text-3xl">
          LLM Reasoning Methodologies
            </h3>
<br></br>
<p>
    <strong>1. Chain of Thought (CoT):</strong>Introduced by Wei et al. (2022), CoT enables complex reasoning by breaking down problems into intermediate steps, which are solved to address the main problem
</p>
<br></br>
<p>
    <strong>2. ReAct:</strong>   Proposed by Yao et al. (2022), ReAct combines reasoning with task-specific actions, using a Thought, Action, and Observation pattern to guide decision-making and tool usage.
</p>
<br></br>
<p>
    <strong>3. DFSDT (Depth First Search-based Decision Tree):</strong>  Developed by Qin et al. (2023), DFSDT enhances reasoning by exploring multiple reasoning paths and handling errors through a depth-first search strategy.
</p>
<br></br>


          </div>
          <div className="mx-20 text-white">
          <h3 className="text-purple-200 text-3xl">
          Black Box Tool Setting

            </h3>
<br></br>
<p>
In real-world scenarios, access to actual APIs or tools may not be feasible due to privacy concerns. Our work addresses this "Black Box" setting, where only tool descriptions are available, and efficient, accurate planning must be achieved without direct API access. This approach contrasts with traditional methods that rely on traversal-based exploration and can be costly in terms of tokens and resources
</p>
<br></br>



          </div>
          <div className="mx-20 text-white">
          <h3 className="text-purple-200 text-3xl">
          Conclusion

            </h3>
<br></br>
<p>
This introduction provides an overview of LLM reasoning and planning, focusing on tool usage in a black box setting. In the next part, we will discuss our approach to handling these challenges in the context of limited API access, as presented in our research.
</p>
<br></br>



          </div>

          

        
          <div className="flex items-center justify-between mx-20 mt-10">
            <span className="italic text-lg font-bold">Share Via</span>
            <div className="flex justify-center flex-grow space-x-4">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </main>
        <Footer/>
      </>
    );
};

export default BlogPage;
