import React from "react";
import { Survey } from "survey-react-ui";
import { Model } from "survey-core";
import "survey-core/defaultV2.min.css";

const surveyJson = {
  title: "KrisLynx Smart Questionnaire",
  showProgressBar: "top",
  pages: [
    {
      name: "company_info",
      elements: [
        {
          type: "text",
          name: "companyName",
          title: "What is your company name?",
          isRequired: true,
        },
        {
          type: "dropdown",
          name: "industry",
          title: "Which industry does your company belong to?",
          isRequired: true,
          choices: ["Healthcare", "Finance", "Retail", "Manufacturing", "Other"],
        },
      ],
    },
    {
      name: "services_interest",
      elements: [
        {
          type: "checkbox",
          name: "interestedServices",
          title: "Which of our services are you interested in?",
          isRequired: true,
          choices: [
            "AI Strategy Consulting",
            "Embedded & Edge AI Development",
            "Predictive Data Systems",
            "Custom AI Model Design",
            "AI System Integration",
            "Enterprise Automation & Optimization",
          ],
        },
      ],
    },
    {
      name: "product_interest",
      elements: [
        {
          type: "checkbox",
          name: "interestedProducts",
          title: "Which of our products are you interested in?",
          choices: ["FearLink", "TradeSphere"],
        },
      ],
    },
    {
      name: "contact_info",
      elements: [
        {
          type: "text",
          name: "fullName",
          title: "Your Full Name",
          isRequired: true,
        },
        {
          type: "text",
          name: "email",
          title: "Your Email Address",
          isRequired: true,
          validators: [
            {
              type: "email",
            },
          ],
        },
        {
          type: "text",
          name: "phone",
          title: "Your Phone Number",
        },
      ],
    },
  ],
  completedHtml:
    "<h3 style='color:#67e8f9'>Thank you for your interest in KrisLynx LLP. We'll be in touch soon!</h3>",
};

const SmartQuestionnaire = () => {
  const survey = new Model(surveyJson);

  // Apply KrisLynx theme CSS variables
  survey.cssVariables = {
    "--color-primary": "#06b6d4",       // cyan-400
    "--color-primary-dark": "#0f172a",  // slate-900
    "--color-primary-dim": "#1e293b",   // blue-gray
    "--color-secondary": "#0ea5e9",     // sky-500
    "--color-text": "#e0f2fe",          // light cyan text
    "--color-background": "#0f172a",    // dark blue background
    "--color-border": "#38bdf8",        // cyan
    "--color-hover": "#67e8f9",         // cyan hover
  };

  survey.onComplete.add((sender) => {
    const surveyData = sender.data;
    fetch("https://your-backend-api.com/submit-survey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(surveyData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Survey data submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting survey data:", error);
      });
  });

  return (
    <section className="bg-gradient-to-br from-blue-950 via-black to-blue-900 text-white min-h-screen py-20 px-4 md:px-16">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900 via-blue-950 to-black rounded-2xl shadow-xl shadow-cyan-800/30 p-8">
        <h2 className="text-3xl font-bold text-cyan-300 text-center mb-8">
          KrisLynx Smart Questionnaire
        </h2>
        <Survey model={survey} />
      </div>
    </section>
  );
};

export default SmartQuestionnaire;
