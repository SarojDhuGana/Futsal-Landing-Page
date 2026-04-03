import React from "react";
export default function Programs() {
  const programs = [
    {
      icon: "⚽",
      title: "Professional Training",
      description: "Age-specific programs designed for optimal development",
    },
    {
      icon: "🏆",
      title: "Competitive Matches",
      description: "Regular tournaments and friendly matches",
    },
    {
      icon: "🎓",
      title: "Pathway to Pro",
      description: "Clear development pathway to professional clubs",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <div
          key={index}
          className="text-center p-6 bg-gray-50 rounded-xl border-2 border-green-200"
        >
          <div className="text-4xl mb-4 animate-bounce">{program.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
          <p className="text-gray-600">{program.description}</p>
        </div>
      ))}
    </div>
  );
}
