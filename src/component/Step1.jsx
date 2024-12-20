import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Step1 = () => {
    const [currentStep] = useState(0);

    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/step2");;
    };

    return (
        <>
            <div className="login">
                <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
                    {/* Left Side - Image */}
                    <div className="leftside d-flex m-auto">
                        <img className="" style={{ maxWidth: '30rem' }} src={loginImg1} alt="loginImg" />
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="rightside d-grid bg-light rounded-4"
                        style={{ width: '30rem', height: "97vh" }}
                    >
                        <div className="content m-md-auto p-sm-4 px-lg-5 mx-md-4" style={{ top: "8%" }}>
                            {/* Header */}
                            <div className="header d-grid gap-2 justify-content-end text-end">
                                <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                    <h3>Vulix</h3>
                                    <img src={logo} alt="logo" />
                                </div>
                                <h4 className="fw-bold" >تم إرسال رسالة التفعيل إلى بريدك الإلكتروني</h4>
                                <p className="text-black-50">يرجى التحقق من بريدك الإلكتروني لإتمام عملية التسجيل والوصول إلى حسابك</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                <div className="stepper my-4">
                                    {[1, 2, 3].map((step, index) => (
                                        <React.Fragment key={index}>
                                            <div className={`step ${currentStep === step ? "active" : ""}`}>
                                                <span className="circle">{step}</span>
                                            </div>
                                            {index < 2 && <div className="line"></div>}
                                        </React.Fragment>
                                    ))}
                                </div>


                                <button
                                    type="submit"
                                    className="btn text-light w-100 rounded-5"
                                    style={{ backgroundColor: '#3E36B5' }}
                                >
                                    تحقق من بريدك
                                </button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};





export default Step1;
