import { useState } from "react";

function AccordionComponent() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={setIsActive(isActive)}>
            <span>+</span>
            <p>More Info</p>
          </div>
          <div className="accordion-content">asd</div>
        </div>
      </div>
    </>
  );
}

export default AccordionComponent;
