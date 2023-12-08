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
            <h1 className="text-white" onClick={handleCloseModal}>X</h1>
        </div>
    )
}

export default memo(MenuModal)
