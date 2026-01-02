import "../index/index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"

export default function CareersPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background"></div>
            <div className="section-one-container">
                <h1 className="section-one-title">Careers</h1>
                <p className="section-one-description">Join our team and help the next generation of founders build the future.</p>
            </div>
        </div>
        <Footer />
    </>
}
