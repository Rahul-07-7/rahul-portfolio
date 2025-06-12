import React from "react";

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold border-b pb-1 text-indigo-500	">
        {title}
      </h2>
      <div className="mt-2 text-gray-700">{children}</div>
    </section>
  );
}

export default Section;
