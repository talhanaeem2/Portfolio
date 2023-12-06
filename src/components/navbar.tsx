import { memo } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="p-8">
            <div className="flex justify-between items-center">
                <Link to="/" className="text-xl text-white uppercase font-normal tracking-[5px] p-[7px] ml-[55px] flex items-center cursor-pointer">
                    <span className="w-[50px] h-[50px] rounded-full bg-cover bg-center inline-block bg-no-repeat mr-[10px]"
                        style={{ backgroundImage: "url('../src/assets/person.jpg')" }}></span>
                    Talha Naeem
                </Link>
                <Link to="#">
                    <i className="relative inline-block group">
                        <span className="w-10 h-[2px] bg-white block mb-2 transition-all ease-out duration-200 group-hover:mb-[10px]"></span>
                        <span className="w-10 h-[2px] bg-white block mb-2 transition-all ease-out duration-200 group-hover:mb-[10px]"></span>
                        <span className="w-10 h-[2px] bg-white block transition-all ease-out duration-200"></span>
                    </i>
                </Link>
            </div>
        </div>
    )
}

export default memo(Navbar)
