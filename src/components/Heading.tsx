import React from 'react';
import "../app/styles/heading.css"
// Define 'type' and 'title' as required props in the interface
interface proptype {
  type?: string;  // Make 'type' optional
  title: string; // Required prop 'title'
}

const Heading: React.FC<proptype> = ({ type, title }) => {
  return (
    <div className={`heading-container`}>
      {/* Display the 'title' prop */}
      <p className='heading-title'>{title}</p>
    </div>
  );
}

export default Heading;



