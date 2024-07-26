import { BarLoader } from "react-spinners";

import "./index.style.css";

const LoadinScreen = () => {
    return (
        <div className="guns-loading">
            <BarLoader
                height={4}
                speedMultiplier={2}
                width={300}
                color={"#54a727"}
            />
        </div>
    );
};

export default LoadinScreen;