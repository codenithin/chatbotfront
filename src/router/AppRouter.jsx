import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../App";
import RFP from "../page/RFP";
import Dashboard from "../page/Dashboard";



export default function AppRouter() {
  const [rfpQuestions, setRFPQuestions] = useState([
    {
      id: 1,
      question: "Please provide details about your company's experience in developing talent acquisition systems:",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 2,
      question: "How will your solution ensure seamless integration with our existing HR management systems?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 3,
      question: "Can you provide examples of similar projects you have successfully delivered in the past?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 4,
      question: "How does your solution address data security and compliance requirements?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 5,
      question: "What level of ongoing support and maintenance can we expect after implementation?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 6,
      question: "How does your solution handle candidate data privacy?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 7,
      question: "What measures do you have in place for system scalability?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 8,
      question: "How do you ensure the reliability and performance of your system?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 9,
      question: "Can you describe your approach to user training and onboarding?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 10,
      question: "How does your solution handle multilingual support?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 11,
      question: "What customization options are available in your solution?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 12,
      question: "How do you handle system updates and upgrades?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
    {
      id: 13,
      question: "Can you provide details on your disaster recovery and backup strategies?",
      required: false,
      responseType: "text",
      allowAttachment: false
    },
])

  return (
    <div className="h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="/" Component={App} />
          <Route path='/rfp' Component={RFP} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
