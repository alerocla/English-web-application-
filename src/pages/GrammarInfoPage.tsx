import React from "react";
import { useNavigate, useParams } from "react-router";
import { grammarRules } from "../data/grammarRules.ts";

const GrammarInfoPage: React.FC = () => {
  const { ruleId } = useParams<{ ruleId: string }>();
  const findRule = grammarRules.find((r) => r.id === ruleId);
  const navigate = useNavigate();
  return (
    <div className="border w-1/2 flex flex-col items-center justify-center mx-auto mt-10 p-5 rounded-lg shadow-lg">
      <button
        className="self-start mb-3 p-2 hover:bg-blue-50  rounded-md transition-colors border cursor-pointer duration-150"
        onClick={() => navigate(-1)}
      >
        {"<-"}
      </button>
      {findRule ? (
        <div>
          <h2 className="font-bold text-2xl">{findRule.title}</h2>

          <div className="flex items-center justify-center gap-3">
            <span>{findRule.category}</span>
            <span>{findRule.level}</span>
          </div>

          <div className="flex gap-3 mb-5 mt-5">
            <h3 className="font-semibold">Пояснення:</h3>
            <p>{findRule.fullContent.ua.explanation}</p>
          </div>

          <div className="flex gap-3 mb-5">
            <h3 className="font-semibold">Використання:</h3>
            <ul>
              {findRule.fullContent.ua.usage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mb-5">
            <h3 className="font-semibold">Приклади:</h3>
            <ul>
              {findRule.examples.map((ex, index) => (
                <li key={index}>
                  <strong>{ex.en}</strong> — {ex.translation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <h2>Rule not found</h2>
      )}
    </div>
  );
};

export default GrammarInfoPage;
