import Header from '../components/Header'

function MainLayout(props) {
    return (
        <div className="mx-5">
            <Header />
            {props.children}
        </div>
    )
}

export default MainLayout
