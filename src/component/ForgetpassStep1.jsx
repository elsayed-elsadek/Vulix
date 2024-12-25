import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import sentEmailImg from "../assets/send email done.svg"

const ForgetPass = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // لإعادة التوجيه



    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/forgetpassstep2")
        setIsLoading(true)
    };


    return (
        <>
            <div className="forgetPassStep1 login">
                <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
                    {/* Left Side - Image */}
                    <div className="leftside d-flex m-auto">
                        <img className="" style={{ maxWidth: '30rem' }} src={loginImg1} alt="loginImg" />
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="rightside d-grid bg-light rounded-4 " style={{ width: '30rem', height: "97vh" }}>
                        <div className="content m-md-auto p-sm-4 px-lg-5 mx-md-4" style={{ top: "8%" }}>
                            {/* Header */}
                            <div className="header d-grid gap-4 justify-content-end text-end">
                                <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                    <h3>Vulix</h3>
                                    <img src={logo} alt="logo" />
                                </div>
                                <h4 className="fw-bold">يرجى التحقق من بريدك الإلكتروني لتغيير كلمة المرور.</h4>
                                <p className="text-black-50">تم إرسال رسالة إعادة تعيين كلمة المرور إلى بريدك الإلكتروني</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                <div className="my-3 w-100">
                                    <img className="d-flex m-auto w-75" style={{}} src={sentEmailImg} alt="" />
                                </div>
                                <button
                                    type="submit"
                                    className="btn text-light w-100 rounded-5"
                                    style={{ backgroundColor: '#3E36B5' }}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            جاري تحقق من بريدك...
                                        </>
                                    ) : (
                                        'تحقق من بريدك'
                                    )}
                                </button>
                            </form>

                            <p className="text-center mt-3">تم تذكر كلمة المرور ؟ <Link to="/" style={{ color: '#3E36B5' }}> لعودة لتسجيل الدخول</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPass;
