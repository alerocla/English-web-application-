import React from "react";
import { grammarRules } from "../data/grammarRules.ts";
import { Link } from "react-router";

const GrammarPage: React.FC = () => {
  return (
    <div className="flex flex-col m-6 gap-7 items-center">
      {grammarRules.map((rule) => (
        <div
          key={rule.id}
          className="border p-2 rounded-lg shadow-sm p-2 text-center w-1/2 hover:scale-105 transition duration-200 bg-blue-50 hover:bg-blue-100"
        >
          <Link to={`/grammar/${rule.id}`}>
            <h3 className="font-bold">
              {rule.title} ({rule.level})
            </h3>
            <p>{rule.shortDescription.ua}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GrammarPage;
