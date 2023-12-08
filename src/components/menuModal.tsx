import { memo } from "react"
import { useDispatch } from "react-redux";

import { closeModal } from "../store/slice";

const MenuModal = () => {
    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(closeModal());
    };

    return (
        <div className="absolute top-0 right-0 w-full h-full bg-blackOpacity">
            <h1>menu</h1>
            <h1 className="text-white" onClick={handleCloseModal}>
                <span className="w-10 h-[2px] bg-white block transform rotate-45"></span>
                <span className="w-10 h-[2px] bg-white block transform rotate-[-45deg]"></span>
            </h1>
        </div>
    )
}

export default memo(MenuModal)
