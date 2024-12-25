import { faBell, faUser } from "@fortawesome/free-regular-svg-icons"
import { faAngleDown, faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../assets/logo.svg"
const Navbar = () => {
    return (
        <>
            <div className="navBar p-4">

                <div className="d-flex justify-content-between align-items-center">

                    <div className="userInfo d-flex gap-2 align-items-center">
                        <FontAwesomeIcon className="fs-4 text-light p-2 rounded-5"
                            icon={faUser}
                            style={{ backgroundColor: "#3e36b5" }} />
                        <FontAwesomeIcon className="fs-5" icon={faAngleDown} />

                        <FontAwesomeIcon className="fs-5 mx-2" icon={faBell} />
                    </div>

                    <div className="inputGroup position-relative d-flex w-75">
                        <input type="text"
                            className="w-50 rounded-5 p-2 px-5  m-auto border-1 border-black bg-transparent"
                            placeholder="بحث"

                        />
                        <FontAwesomeIcon className="propertisIcon" icon={faBars} />
                        <FontAwesomeIcon className="serachIcon" icon={faSearch} />
                    </div>

                    <div className="d-flex gap-2 align-items-center justify-content-end mb-2">
                        <h3>Vulix</h3>
                        <img src={logo} alt="logo" />
                    </div>


                </div>





            </div>

        </>
    )
}

export default Navbar
