import "../index/index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"

export default function ContactPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background"></div>
            <div className="section-one-container">
                <h1 className="section-one-title">Contact Us</h1>
                <p className="section-one-description">Get in touch with our team to learn more about our programs.</p>
            </div>
        </div>
        <Footer />
    </>
}
