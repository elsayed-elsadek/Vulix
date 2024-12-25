import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import doneImg from "../assets/done.svg"

const ForgetpassStep3 = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // لإعادة التوجيه



    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/home")
        setIsLoading(true)
    };


    return (
        <>
            <div className="forgetPassStep3 login">
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
                                <h4 className="fw-bold">تم تغيير كلمة المرور بنجاح</h4>
                                <p className="text-black-50">.يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                <div className="my-5 rounded-circle m-auto d-flex"
                                    style={{ backgroundColor: "#1EB410", height: "120px", width: "120px" }}>
                                    <img className=" m-auto w-50" style={{}} src={doneImg} alt="doneImg" />
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
                                            جاري تسجيل الدخول...
                                        </>
                                    ) : (
                                        'تسجيل الدخول'
                                    )}
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ForgetpassStep3
