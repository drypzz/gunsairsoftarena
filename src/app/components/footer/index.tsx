import { getYear } from "@/app/utils/getDate";

import "./index.style.css";

const Footer = () => {
    return (
        <footer>
            <div className="guns-footer-content">
                <div>
                    <p>2021 - {getYear()} © Todos os direitos reservados.</p>
                </div>
                <div>
                    <p>CNPJ: 41.181.619/0001-27</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;