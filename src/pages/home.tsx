import { useSelector } from "react-redux";
import { memo } from "react";

import AppStateInterface from "../store/interface/AppSateInterface";
import MenuModal from "../components/menuModal";

const Home = () => {
    const { showModal } = useSelector((state: { app: AppStateInterface }) => state.app);
    return (
        <>
            {showModal && <MenuModal />}
            <div>home</div>
        </>
    )
}

export default memo(Home)
