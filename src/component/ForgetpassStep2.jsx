import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgetpassStep2 = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userEmail: '', userPass: '', confirmPass: '' });
    const [errors, setErrors] = useState({ userEmail: '', userPass: '', confirmPass: '' });
    const [isLoading, setIsLoading] = useState(false);

    // Handle input change and reset errors
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value
        });

        // Clear errors when user is typing
        setErrors({
            ...errors,
            [id]: ''
        });
    };

    // Validate form inputs
    const validateForm = () => {
        let isValid = true;
        let newErrors = { userEmail: '', userPass: '', confirmPass: '' };

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!userData.userEmail || !emailPattern.test(userData.userEmail)) {
            newErrors.userEmail = 'يرجى إدخال بريد إلكتروني صالح';
            isValid = false;
        }

        if (!userData.userPass || userData.userPass.length < 6) {
            newErrors.userPass = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
            isValid = false;
        }

        // Check if password and confirm password match
        if (userData.userPass !== userData.confirmPass) {
            newErrors.confirmPass = 'كلمات المرور غير متطابقة';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsLoading(true);

        // Simulate API call or navigation {code API here}

        navigate("/forgetpassstep3");

    };

    return (
        <div className="forgetpassstep2 login">
            <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
                {/* Left Side - Image */}
                <div className="leftside d-flex m-auto">
                    <img className="" style={{ maxWidth: '30rem' }} src={loginImg1} alt="loginImg" />
                </div>

                {/* Right Side - Login Form */}
                <div className="rightside d-grid bg-light rounded-4" style={{ width: '30rem', height: "97vh" }}>
                    <div className="content m-md-auto p-sm-4 px-lg-5 mx-md-4" style={{ top: "8%" }}>
                        {/* Header */}
                        <div className="header d-grid gap-2 justify-content-end text-end">
                            <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                <h3>Vulix</h3>
                                <img src={logo} alt="logo" />
                            </div>
                            <h4 className="fw-bold">إدخال كلمة المرور الجديدة</h4>
                            <p className="text-black-50">يرجى إدخال كلمة المرور الجديدة وتأكيدها لتحديث حسابك</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userPass" className="form-label d-flex justify-content-end">
                                    كلمة المرور الجديدة
                                </label>
                                <input
                                    type="password"
                                    className="form-control bg-transparent border-2 py-2"
                                    id="userPass"
                                    placeholder="********"
                                    value={userData.userPass}
                                    onChange={handleChange}
                                />
                                {errors.userPass && <p className="text-danger">{errors.userPass}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPass" className="form-label d-flex justify-content-end">
                                    تأكيد كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    className="form-control bg-transparent border-2 py-2"
                                    id="confirmPass"
                                    placeholder="********"
                                    value={userData.confirmPass}
                                    onChange={handleChange}
                                />
                                {errors.confirmPass && <p className="text-danger">{errors.confirmPass}</p>}
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
                                        جاري تغيير كلمة المرور...
                                    </>
                                ) : (
                                    'تغيير كلمة المرور'
                                )}
                            </button>

                            <p className="hr text-center my-4 text-black-50 position-relative">أو</p>
                        </form>

                        <p className="text-center mt-3">
                            تم تذكر كلمة المرور؟  <Link to="/" style={{ color: '#3E36B5' }}>العودة لتسجيل الدخول</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetpassStep2;
