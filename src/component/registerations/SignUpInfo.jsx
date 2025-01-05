import logo from "../../assets/logo.svg";



function SignUpInfo() {

    return (
      <>

          <div className="d-flex align-items-center justify-content-between m-auto mx-2 p-2 gap-2">
            {/* Right Side - Login Form */}
           
              <div
              >
                {/* Header */}
                <div className="header d-grid gap-2 justify-content-end text-end">

                  <h4 className="fw-bold">
                    تم إرسال رسالة التفعيل إلى بريدك الإلكتروني
                  </h4>
                  <p className="text-black-50">
                    يرجى التحقق من بريدك الإلكتروني لإتمام عملية التسجيل والوصول
                    إلى حسابك
                  </p>
                </div>

                {/* Form */}
                <form>
                  <button
                    type="submit"
                    className="btn text-light w-100 rounded-5"
                    style={{ backgroundColor: "#3E36B5" }}
                  >
                    تحقق من بريدك
                  </button>
                </form>
              </div>
            </div>
    
        </>
    );
};

export default SignUpInfo




