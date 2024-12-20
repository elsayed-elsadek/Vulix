import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import environmentalImg from "../assets/environmental.svg";
import creativeImg from "../assets/creative.svg";
import artisticImg from "../assets/artistic.svg";
import technicalImg from "../assets/technical.svg";
import contestsImg from "../assets/Contests.svg";
import educationalImg from "../assets/Educational.svg";
import academicImg from "../assets/academic.svg";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Step3 = () => {
    const [currentStep] = useState(2);
    const [selectedStep, setSelectedStep] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Selected Step:", selectedStep);
        navigate("/home");
    };

    const steps = [
        { name: "بيئي", img: environmentalImg },
        { name: "ابداعى", img: creativeImg },
        { name: "فني", img: artisticImg },
        { name: "تقني", img: technicalImg },
        { name: "ريادي", img: contestsImg },
        { name: "تعليمي", img: educationalImg },
        { name: "مسابقات", img: contestsImg },
        { name: "اكاديمي", img: academicImg },
    ];

    const handleStepClick = (step) => {
        setSelectedStep(step);
        localStorage.setItem("selectedStep", JSON.stringify(step.name));
    };

    return (
        <>
            <div className="login">
                <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
                    {/* Left Side - Image */}
                    <div className="leftside d-flex m-auto">
                        <img
                            className=""
                            style={{ maxWidth: "30rem" }}
                            src={loginImg1}
                            alt="loginImg"
                        />
                    </div>

                    {/* Right Side - Login Form */}
                    <div
                        className="rightside d-grid bg-light rounded-4"
                        style={{ width: "30rem", height: "97vh" }}
                    >
                        <div
                            className="content m-md-auto p-sm-4 px-lg-5 mx-md-4"
                            style={{ top: "8%" }}
                        >
                            {/* Header */}
                            <div className="header d-grid gap-2 justify-content-end text-end">
                                <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                    <h3>Vulix</h3>
                                    <img src={logo} alt="logo" />
                                </div>
                                <h4 className="fw-bold">
                                    لمساعدتك في الحصول على أفضل تجربة، أكمل بياناتك!
                                </h4>
                                <p className="text-black-50">
                                    أدخل بعض التفاصيل البسيطة لنتمكن من تقديم خدمات مخصصة لك
                                    بشكل أفضل!
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="stepper my-4">
                                    {[1, 2, 3].map((step, index) => (
                                        <React.Fragment key={index}>
                                            <div
                                                className={`step ${currentStep >= step ? "active" : ""}`}
                                            >
                                                <span className="circle">{step}</span>
                                            </div>
                                            {index < 2 && (
                                                <div
                                                    className={`lineStep3 ${currentStep > step ? "line-active" : ""}`}
                                                ></div>
                                            )}
                                        </React.Fragment>
                                    ))}

                                </div>

                                <div className="d-flex justify-content-end flex-wrap gap-2 text-align-center my-4 m-auto ">
                                    {steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className={`d-flex align-items-center m-auto gap-0 rounded-5 p-2 mb-3 ${selectedStep?.name === step.name ? "selected" : ""
                                                }`} // إضافة كلاس للعنصر المختار
                                            onClick={() => handleStepClick(step)} // استدعاء الدالة عند النقر
                                            style={{
                                                backgroundColor: selectedStep?.name === step.name ? "#3e36b5" : "#EFEFEF",
                                                color: selectedStep?.name === step.name ? "white" : "",
                                                width: "75px",
                                                gap: "10px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            <p className="m-auto">{step.name}</p>
                                            <img
                                                src={step.img}
                                                alt={`${step.name} icon`}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button
                                    type="submit"
                                    className="btn text-light w-100 rounded-5"
                                    style={{ backgroundColor: "#3E36B5" }}
                                >
                                    ابدأ رحلتك
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Step3;
