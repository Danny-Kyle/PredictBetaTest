import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

type props = {
    children: React.ReactNode
}

const layout = ({children}: props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container mx-auto flex-1 py-10">{children}</div>
            <Footer />
        </div>
    )
}

export default layout