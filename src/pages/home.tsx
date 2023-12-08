import { useSelector } from "react-redux";

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

export default Home
