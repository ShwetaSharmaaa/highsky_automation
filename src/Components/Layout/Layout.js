import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="content-container">
                {children}
            </div>
            <Footer />
        </div>
    );
}