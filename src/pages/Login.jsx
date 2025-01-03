import { login } from '../services/authService'; // استيراد دالة تسجيل الدخول
import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userEmail: '', userPass: '' });
    const [errors, setErrors] = useState({ userEmail: '', userPass: '' });
    const [loginError, setLoginError] = useState(''); // حالة الخطأ في الدخول
    const [isLoading, setIsLoading] = useState(false); // حالة التحميل

    // دالة لتحديث المدخلات ومسح الأخطاء عند التعديل
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUserData({
            ...userData,
            [id]: value
        });

        // مسح الأخطاء عند التعديل
        setErrors({
            ...errors,
            [id]: ''
        });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = { userEmail: '', userPass: '' };

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!userData.userEmail || !emailPattern.test(userData.userEmail)) {
            newErrors.userEmail = 'يرجى إدخال بريد إلكتروني صالح';
            isValid = false;
        }

        if (!userData.userPass || userData.userPass.length < 6) {
            newErrors.userPass = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
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
            const data = await login(userData.userEmail, userData.userPass); // نداء دالة تسجيل الدخول
            console.log("Login successful:", data);

            // تنظيف الأخطاء السابقة
            setLoginError('');

            // تخزين التوكن أو البيانات
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('userEmail', userData.userEmail);

            // الانتقال للصفحة الرئيسية
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error);
            // رسالة خطأ عامة للمستخدم
            setLoginError('اسم المستخدم أو كلمة المرور غير صحيحة');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login">
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
                            <h4 className="fw-bold">استعد للعودة إلى فعالياتك المفضلة</h4>
                            <p className="text-black-50">سجّل دخولك الآن واستكمل رحلتك معنا بسهولة</p>
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

                            <div className="mb-3">
                                <label htmlFor="userPass" className="form-label d-flex justify-content-end">
                                    كلمة المرور
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

                                <Link to="/forgetpassword" className="d-flex justify-content-end" style={{ color: '#3E36B5' }}>هل نسيت كلمة المرور</Link>
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

                            {/* Error Message */}
                            {loginError && <p className="text-danger text-center mt-3">{loginError}</p>}

                            <p className="hr text-center my-4 text-black-50 position-relative">أو</p>
                        </form>

                        {/* Social Media Icons */}
                        <div className="socialmedia d-flex gap-4 justify-content-center align-items-center fs-4">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
                            <FontAwesomeIcon icon={faGoogle} style={{ color: '#4285F4' }} />
                        </div>
                        <p className="text-center mt-3">ليس لديك حساب ؟ <Link to="/registration" style={{ color: '#3E36B5' }}>انشاء حساب</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
