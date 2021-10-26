import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MainLayout(props) {
    return (
        <div className="mx-5">
            <Header />
            {props.children}
            <Divider />
            <Footer />
        </div>
    )
}

export default MainLayout
