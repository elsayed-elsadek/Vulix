import loginImg1 from "../assets/image shaep.svg";
import graduate from "../assets/graduate.svg";
import student from "../assets/student.svg";
import male from "../assets/male.svg";
import femal from "../assets/female.svg";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Step2 = () => {
    const [currentStep] = useState(1); // Step 2 active
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [studentStatus, setStudentStatus] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();


    // المحافظات
    const governorates = {
        cairo: ["القاهرة", "مدينة نصر", "المعادي", "حلوان"],
        alexandria: ["الإسكندرية", "العجمي", "برج العرب"],
        giza: ["الجيزة", "6 أكتوبر", "الشيخ زايد", "الهرم"],
        dakahlia: ["الدقهليه", "طلخا", "ميت غمر", "المنزلة"],
        luxor: ["الأقصر", "الزينية", "القرنة", "إسنا"],
    };

    const [governorate, setGovernorate] = React.useState("");
    const [cities, setCities] = React.useState([]);
    const [city, setCity] = React.useState("");

    const handleGovernorateChange = (e) => {
        const selectedGovernorate = e.target.value;
        setGovernorate(selectedGovernorate);
        setCities(governorates[selectedGovernorate].slice(1) || []);
        setCity("");
    };

    // الكليه
    const universities = {
        القاهره: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],
        المنصوره: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],
        حلوان: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],
        الجيزه: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],
        عين_شمس: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],
        دمياط: ["كلية الهندسة", "كلية الطب", "كلية العلوم", "كلية الحاسبات والمعلومات", " كلية التجاره"],

    };
    const [university, setUniversity] = React.useState("");
    const [colleges, setColleges] = React.useState([]);
    const [college, setCollege] = React.useState("");

    const handleUniversityChange = (e) => {
        const selectedUniversity = e.target.value;
        setUniversity(selectedUniversity);
        setColleges(universities[selectedUniversity] || []); // جلب الكليات بناءً على الجامعة
        setCollege(""); // تفريغ اختيار الكلية عند تغيير الجامعة
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!phoneNumber || !governorate || !city || !date || !studentStatus || !gender || !university || !college) {
            alert("يرجى ملء جميع الحقول المطلوبة!");
            return;
        }

        // Store user inputs into variables
        const userData = {
            phoneNumber,
            governorate,
            city,
            date,
            studentStatus,
            gender,
            university,
            college,
        };

        // Save data into Local Storage
        Object.keys(userData).forEach((key) => {
            localStorage.setItem(key, userData[key]);
        });

        // Log data into console
        console.log(userData);

        // Navigate to next step
        navigate("/step3");
    };


    return (
        <div className=" step2 login">
            <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
                {/* Left Side - Image */}
                <div className="leftside d-flex m-auto">
                    <img className="" style={{ maxWidth: '30rem' }} src={loginImg1} alt="loginImg" />
                </div>

                {/* Right Side - Form */}
                <div className="rightside d-grid bg-light rounded-4" style={{ width: '30rem', height: "97vh" }}>
                    <div className="content m-auto p-sm-4 px-lg-5 w-100" style={{ top: "8%" }}>
                        {/* Header */}
                        <div className="header d-grid gap-2 justify-content-end text-end">
                            <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                                <h3>Vulix</h3>
                                <img src={logo} alt="logo" />
                            </div>
                            <h4 className="fw-bold">لمساعدتك في الحصول على أفضل تجربة، أكمل بياناتك!</h4>
                            <p className="text-black-50">أدخل بعض التفاصيل البسيطة لنتمكن من تقديم خدمات مخصصة لك بشكل أفضل!</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="stepper my-4">
                                {[1, 2, 3].map((step, index) => (
                                    <React.Fragment key={index}>
                                        <div className={`step ${currentStep === step ? "active" : ""}`}>
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

                            <div className="userDetails d-grid gap-3 my-4">
                                {/* Phone Number Input */}
                                <input
                                    className="form-control bg-transparent border-2 py-2"
                                    placeholder="أدخل رقم الهاتف"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />

                                <div className="d-flex justify-content-between gap-3 align-items-center">
                                    {/* قائمة المحافظات */}
                                    <select
                                        className="form-select text-black-50 bg-transparent border-2 py-2"
                                        value={governorate}
                                        onChange={handleGovernorateChange}
                                        required
                                    >
                                        <option value="">محافظة</option>
                                        {Object.keys(governorates).map((govKey) => (
                                            <option key={govKey} value={govKey}>
                                                {governorates[govKey][0]}
                                            </option>
                                        ))}
                                    </select>

                                    {/* قائمة المدن */}
                                    <select
                                        className="form-select text-black-50 bg-transparent border-2 py-2"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        required
                                        disabled={!cities.length}
                                    >
                                        <option value="">مدينة</option>
                                        {cities.map((cityName, index) => (
                                            <option key={index} value={cityName}>
                                                {cityName}
                                            </option>
                                        ))}
                                    </select>

                                    {/* Date Input */}
                                    <input
                                        className="form-control text-black-50 bg-transparent border-2 p-2"
                                        placeholder="DD/MM/YY"
                                        type="text"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className=" d-flex flex-wrap justify-content-between gap-3">
                                    {/* first side: الحالة */}
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <div className="d-flex gap-1 align-items-center">
                                            <label className="d-flex rounded-4 p-2 text-center" htmlFor="graduate"
                                                style={{ backgroundColor: "#EFEFEF" }}>
                                                خريج
                                                <span role="img" aria-label="graduate">
                                                    <img style={{ width: "20px", marginLeft: "5px" }} src={graduate} alt="خريج" />
                                                </span>
                                            </label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="graduate"
                                                value="graduate"
                                                checked={studentStatus === "graduate"}
                                                onChange={(e) => setStudentStatus(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-flex gap-1 align-items-center">
                                            <label className="d-flex rounded-4 p-2 text-center" htmlFor="student"
                                                style={{ backgroundColor: "#EFEFEF" }}>
                                                طالب
                                                <span role="img" aria-label="student">
                                                    <img style={{ width: "20px", marginLeft: "5px" }} src={student} alt="طالب" />
                                                </span>
                                            </label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="status"
                                                id="student"
                                                value="student"
                                                checked={studentStatus === "student"}
                                                onChange={(e) => setStudentStatus(e.target.value)}
                                            />
                                        </div>

                                    </div>

                                    {/* sec side: النوع */}
                                    <div className="d-flex gap-2 align-items-center mb-3">
                                        <div className="d-flex gap-1 align-items-center">
                                            <label className="d-flex rounded-4 p-2 text-center" htmlFor="male"
                                                style={{ backgroundColor: "#EFEFEF" }}>
                                                ذكر
                                                <span role="img" aria-label="male">
                                                    <img style={{ width: "20px", marginLeft: "5px" }} src={male} alt="ذكر" />
                                                </span>
                                            </label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="male"
                                                value="male"
                                                checked={gender === "male"}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-flex gap-1 align-items-center">
                                            <label className="d-flex rounded-4 p-2 text-center" htmlFor="female"
                                                style={{ backgroundColor: "#EFEFEF" }}>
                                                انثى
                                                <span role="img" aria-label="female">
                                                    <img style={{ width: "20px", marginLeft: "5px" }} src={femal} alt="أنثى" />
                                                </span>
                                            </label>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="female"
                                                value="female"
                                                checked={gender === "female"}
                                                onChange={(e) => setGender(e.target.value)}
                                            />
                                        </div>

                                    </div>

                                </div>

                                <div className="d-flex justify-content-center gap-4 align-items-center">
                                    {/* الجامعة */}
                                    <div className="w-50">
                                        <select
                                            className="form-select bg-transparent text-black-50"
                                            aria-label="Select University"
                                            value={university}
                                            onChange={(e) => setUniversity(e.target.value)}
                                            required
                                            onClick={handleUniversityChange}
                                        >
                                            <option value="" disabled>
                                                الجامعة
                                            </option>
                                            {Object.keys(universities).map((univKey) => (
                                                <option key={univKey} value={univKey}>
                                                    {univKey}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="w-50">
                                        <select
                                            className="form-select bg-transparent text-black-50"
                                            aria-label="Select College"
                                            value={college}
                                            onChange={(e) => setCollege(e.target.value)}
                                            required
                                            disabled={!colleges.length}
                                        >
                                            <option value="" disabled>
                                                الكلية
                                            </option>
                                            {colleges.map((collegeName, index) => (
                                                <option key={index} value={collegeName}>
                                                    {collegeName}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>


                            </div>
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn text-light w-100 rounded-5"
                                style={{ backgroundColor: '#3E36B5' }} >
                                تأكيد
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step2;
