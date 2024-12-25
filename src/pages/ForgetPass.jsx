import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { resetPassword } from "../services/authService";

const ForgetPass = () => {
    const [userData, setUserData] = useState({
        token: "e25c97f52f1527962424df72ac65e379b6266433a2f8ea65fc3226bf57708f87", // Correct key
        userEmail: '',
        password: "123456789",
        password_confirmation: "123456789"
    });
    const [errors, setErrors] = useState({ userEmail: '' });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); // لإعادة التوجيه

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value
        });

        setErrors({
            ...errors,
            [id]: ''
        });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { userEmail: '' };

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!userData.userEmail || !emailPattern.test(userData.userEmail)) {
            newErrors.userEmail = 'يرجى إدخال بريد إلكتروني صالح';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        setIsLoading(true);

        try {
            // Extract values from state
            const { datoken, userEmail, password, password_confirmation } = userData;

            // Call the API with correct parameters
            const data = await resetPassword(datoken, userEmail, password, password_confirmation);
            console.log('API Response:', data);

            // Redirect to the next step
            navigate('/forgetpassstep1', { state: { email: userEmail } });
        } catch (error) {
            const message = error.message || 'حدث خطأ أثناء إرسال الرابط. حاول مرة أخرى.';
            console.error('Full API Error:', error.response?.data);

            setErrors({
                userEmail: message
            });
        } finally {
            setIsLoading(false);
        }
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
                    <div className="rightside d-grid bg-light rounded-4 " style={{ width: '30rem', height: "97vh" }}>
                        <div className="content m-md-auto p-sm-4 px-lg-5 mx-md-4" style={{ top: "8%" }}>
                            {/* Header */}
                            <div className="header d-grid gap-4 justify-content-end text-end">
                                <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                    <h3>Vulix</h3>
                                    <img src={logo} alt="logo" />
                                </div>
                                <h4 className="fw-bold">نسيت كلمة المرور؟ لا مشكلة</h4>
                                <p className="text-black-50">يرجى إدخال بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="userEmail" className="form-label d-flex justify-content-end">
                                        الايميل
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control bg-transparent border-2 py-2"
                                        id="userEmail"
                                        placeholder="abdullahelawady@gmail.com"
                                        value={userData.userEmail}
                                        onChange={handleChange}
                                    />
                                    {errors.userEmail && <p className="text-danger">{errors.userEmail}</p>}
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
                                            جاري إرسال الرابط...
                                        </>
                                    ) : (
                                        'إرسال الرابط'
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
