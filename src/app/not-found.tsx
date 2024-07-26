import "./not-found.style.css";

const ErrorPage = () => {
    return (
        <div className="guns-error-page">
            <div className="guns-error-page-content">
                <img draggable="false" src="/svg/error.svg" alt="" />
            </div>
            <div className="guns-error-page-content">
                <h1>404</h1>
            </div>
            <div className="guns-error-page-content">
                <p>Página não encontrada!</p>
            </div>
        </div>
    )
};

export default ErrorPage;