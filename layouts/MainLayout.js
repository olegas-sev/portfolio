import Header from '../components/Header'

function MainLayout(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default MainLayout
