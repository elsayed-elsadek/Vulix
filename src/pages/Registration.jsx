import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/authService"; // استدعاء الدالة

const Registration = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userName: '', userEmail: '', userPass: '' });
    const [errors, setErrors] = useState({ userName: '', userEmail: '', userPass: '' });
    const [registrationError, setRegistrationError] = useState(''); // خطأ في التسجيل
    const [isLoading, setIsLoading] = useState(false); // حالة التحميل

    const validateForm = () => {
        let isValid = true;
        let newErrors = { userName: '', userEmail: '', userPass: '' };

        if (!userData.userName || userData.userName.trim().length < 3) {
            newErrors.userName = 'اسم المستخدم يجب أن يكون 3 أحرف على الأقل';
            isValid = false;
        }

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
            // التأكد من أن البيانات يتم إرسالها بشكل صحيح
            const response = await register(userData.userName, userData.userEmail, userData.userPass);

            console.log('Registration successful:', response);
            // تنظيف الأخطاء السابقة
            setRegistrationError('');
            // إعادة توجيه المستخدم للصفحة التالية
            navigate("/step1");

        } catch (error) {
            console.error('Registration error:', error);

            // التحقق إذا كان الخطأ بسبب البريد الإلكتروني الموجود
            if (error?.response?.data?.error?.email) {
                setRegistrationError('البريد الإلكتروني مسجل بالفعل');
            } else {
                setRegistrationError('حدث خطأ أثناء التسجيل، يرجى المحاولة لاحقًا');
            }

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

                {/* Right Side - Registration Form */}
                <div className="rightside d-grid bg-light rounded-4" style={{ width: '30rem', height: "97vh" }}>
                    <div className="content m-md-auto p-sm-4 px-lg-5 mx-md-4" style={{ top: "8%" }}>
                        {/* Header */}
                        <div className="header d-grid gap-2 justify-content-end text-end">
                            <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                <h3>Vulix</h3>
                                <img src={logo} alt="logo" />
                            </div>
                            <h4 className="fw-bold">!أنشئ حسابك الآن واستمتع بتجربة مخصصة</h4>
                            <p className="text-black-50">سجل حسابك مجانًا واستمتع بتجربة لا تُنسى في استكشاف أجمل الفعاليات حولك!</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputname" className="form-label d-flex justify-content-end">
                                    اسم المستخدم
                                </label>
                                <input
                                    required
                                    type="text"
                                    className="form-control bg-transparent border-2 py-2"
                                    id="exampleInputname"
                                    placeholder="عمر خالد"
                                    onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label d-flex justify-content-end">
                                    الايميل
                                </label>
                                <input
                                    required
                                    type="email"
                                    className="form-control bg-transparent border-2 py-2"
                                    id="exampleInputEmail1"
                                    placeholder="abdullahelawady@gmail.com"
                                    onChange={(e) => setUserData({ ...userData, userEmail: e.target.value })}
                                />
                                {errors.userEmail && <p className="text-danger">{errors.userEmail}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label d-flex justify-content-end">
                                    كلمة المرور
                                </label>
                                <input
                                    type="password"
                                    className="form-control bg-transparent border-2 py-2"
                                    id="exampleInputPassword1"
                                    placeholder="********"
                                    onChange={(e) => setUserData({ ...userData, userPass: e.target.value })}
                                />

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
                                        جاري إنشاء الحساب...
                                    </>
                                ) : (
                                    'إنشاء حساب'
                                )}
                            </button>

                            {/* Error Message */}
                            {(registrationError || errors.userPass) && (
                                <p className="text-danger text-center mt-2">
                                    {registrationError || errors.userPass}
                                </p>
                            )}

                            <p className="hr text-center my-4 text-black-50 position-relative">أو</p>
                        </form>

                        {/* Social Media Icons */}
                        <div className="socialmedia d-flex gap-4 justify-content-center align-items-center fs-4">
                            <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} />
                            <FontAwesomeIcon icon={faGoogle} style={{ color: '#4285F4' }} />
                        </div>
                        <p className="text-center mt-3">بالفعل لدى حساب ؟ <Link to="/" style={{ color: '#3E36B5' }}> تسجيل الدخول</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
