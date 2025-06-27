import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTopButton from "./ScrollToTopButton";

export const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="content-container">
                {children}
                <ScrollToTopButton />
            </div>
            <Footer />
        </div>
    );
}