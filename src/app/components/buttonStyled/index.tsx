import { ButtonWhatsappProps } from "./props";

import "./index.style.css";

const ButtonStyled = ({number, desc, text}: ButtonWhatsappProps) => {
    return (
        <a className="guns-button-styled" target="_blank" href={`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(desc)}`}>
            {text}
        </a>
    );
};

export default ButtonStyled;