import "../index/index.css"
import Navbar from "../../components/navbar/navbar.tsx"
import Footer from "../../components/footer/footer.tsx"

export default function PortfolioPage() {
    return <>
        <Navbar />
        <div className="index-page">
            <div className="section-one-background"></div>
            <div className="section-one-container">
                <h1 className="section-one-title">Our Portfolio</h1>
                <p className="section-one-description">Companies built by young founders through our accelerator program.</p>
            </div>
        </div>
        <Footer />
    </>
}
