import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonaliInfo from "./PersonaliInfo";
import OtherInfo from "./OtherInfo";

function RegisterComponents() {
  const [page, setPage] = useState(0);

  const handleSteps = (state) => {
    console.log(state);
    switch (state) {
      case "prev":
        setPage((prev) => (prev > 1 ? prev - 1 : prev));
        break;
      case "next":
        setPage((prev) => (prev < 3 ? prev + 1 : prev));
        break;
    }
    console.log(page);
  };
  const DisplayPage = () => {
    switch (page) {
      case 0:
        return <div> You wil Be happy</div>;
      case 1:
        return <SignUpInfo />;
      case 2:
        return <PersonaliInfo />;
      case 3:
        return <OtherInfo />;
    }
  };
  const StepsHeader = () => {
    return (
      <div className="stepper my-4">
        {Array.from({ length: 3 }, (step, index) => (
          <React.Fragment key={index}>
            <div className={`step ${page === index + 1 ? "active" : ""}`}>
              <span className="circle">{index + 1}</span>
            </div>
            {index < 2 && <div className="line"></div>}
          </React.Fragment>
        ))}
      </div>
    );
  };
  return (
    <div className="form-group">
      <div className="progressBar"></div>
      <div className="form-container">
        <div className="header">{!page || <StepsHeader />}</div>

        <div className="steps">{<DisplayPage />}</div>

        <div className="footer">
          <button disabled={page == 1} onClick={() => handleSteps("prev")}>
            prev
          </button>
          <button disabled={page == 3} onClick={() => handleSteps("next")}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponents;
