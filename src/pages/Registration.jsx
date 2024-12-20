import loginImg1 from "../assets/image shaep.svg";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Registration = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ userName: '', userEmail: '', userPass: '' });
    const [errors, setErrors] = useState({ userName: '', userEmail: '', userPass: '' });

    const validateForm = () => {
        let isValid = true;
        let newErrors = { userEmail: '', userPass: '' };
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!userData.userEmail || !emailPattern.test(userData.userEmail)) {
            newErrors.userEmail = 'Invalid email address';
            isValid = false;
        }

        if (!userData.userPass || userData.userPass.length < 6) {
            newErrors.userPass = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        console.log(userData);
        // Save user data to localStorage
        localStorage.setItem('isSignedUp', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to Home page
        navigate("/step1");;
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
                                <h4 className="fw-bold" >!أنشئ حسابك الآن واستمتع بتجربة مخصصة</h4>
                                <p className="text-black-50">سجل حسابك مجانًا واستمتع بتجربة لا تُنسى في استكشاف أجمل الفعاليات حولك!</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputname" className="form-label d-flex justify-content-end">
                                        اسم المستخدم
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent border-2 py-2"
                                        id="exampleInputname"
                                        placeholder="عمر خالد"
                                        onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
                                    />
                                    {errors.userName && <p className="text-danger">{errors.userName}</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label d-flex justify-content-end">
                                        الايميل
                                    </label>
                                    <input
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
                                    {errors.userPass && <p className="text-danger">{errors.userPass}</p>}

                                </div>


                                <button
                                    type="submit"
                                    className="btn text-light w-100 rounded-5"
                                    style={{ backgroundColor: '#3E36B5' }}
                                >
                                    تسجيل الدخول
                                </button>

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
        </>

    );
};



export default Registration
