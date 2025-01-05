import { login } from "../services/authService"; // استيراد دالة تسجيل الدخول
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ });
  const [loginError, setLoginError] = useState(""); // حالة الخطأ في الدخول
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل

  // دالة لتحديث المدخلات ومسح الأخطاء عند التعديل
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });

    // مسح الأخطاء عند التعديل
    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { email: "", password: "" };

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!userData.email || !emailPattern.test(userData.email)) {
      newErrors.email = "يرجى إدخال بريد إلكتروني صالح";
      isValid = false;
    }

    if (!userData.password || userData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
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
      const data = await login(userData); // نداء دالة تسجيل الدخول
      console.log("Login successful:", data);

      // تنظيف الأخطاء السابقة
      setLoginError("");

      // تخزين التوكن أو البيانات
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("email", userData.email);

      // الانتقال للصفحة الرئيسية
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      // رسالة خطأ عامة للمستخدم
      setLoginError("اسم المستخدم أو كلمة المرور غير صحيحة");
    } finally {
      setIsLoading(false);
    }
  };

  return (

      <div>
        <div>
          {/* Header */}
          <div className="header d-grid gap-2 justify-content-end text-end">
            <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
              <h1 className="text-xl">Vulix</h1>
              <img src={logo} alt="logo" />
            </div>
            <h4 className="fw-bold">استعد للعودة إلى فعالياتك المفضلة</h4>
            <p className="text-black-50">
              سجّل دخولك الآن واستكمل رحلتك معنا بسهولة
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="email"
                className="form-label d-flex justify-content-end"
              >
                الايميل
              </label>
              <input
                type="email"
                className="form-control bg-transparent border-2 py-2"
                id="email"
                placeholder="abdullahelawady@gmail.com"
                value={userData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-danger">{errors.email}</p>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label d-flex justify-content-end"
              >
                كلمة المرور
              </label>
              <input
                type="password"
                className="form-control bg-transparent border-2 py-2"
                id="password"
                placeholder="********"
                value={userData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}

              <Link
                to="/forgetpassword"
                className="d-flex justify-content-end"
                style={{ color: "#3E36B5" }}
              >
                هل نسيت كلمة المرور
              </Link>
            </div>

            <button
              type="submit"
              className="btn text-light w-100 rounded-5"
              style={{ backgroundColor: "#3E36B5" }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  جاري تسجيل الدخول...
                </>
              ) : (
                "تسجيل الدخول"
              )}
            </button>

            {/* Error Message */}
            {loginError && (
              <p className="text-danger text-center mt-3">{loginError}</p>
            )}

            <p className="hr text-center my-4 text-black-50 position-relative">
              أو
            </p>
          </form>

          {/* Social Media Icons */}
          <div className="socialmedia d-flex gap-4 justify-content-center align-items-center fs-4">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1877F2" }} />
            <FontAwesomeIcon icon={faGoogle} style={{ color: "#4285F4" }} />
          </div>
          <p className="text-center mt-3">
            ليس لديك حساب ؟{" "}
            <Link to="/register" style={{ color: "#3E36B5" }}>
              انشاء حساب
            </Link>
          </p>
        </div>
      </div>

  );
};

export default Login;
