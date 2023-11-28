import Banner from "../Banner/Banner"
import CardGrid from "../Cards/CardGrid"
import Footer from "../Footer/Footer"
import Middle from "../Middle/Middle"
import Nav from "../Nav/Nav"
import Section2 from "../Section2/Section2"
import Section3 from "../Section3/Sectioon3"
import Section4 from "../Section4/Section4"
import Slides from "../Slides/Slides"

const Home = () =>
{
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Middle></Middle>
            <CardGrid></CardGrid>
            <Section2></Section2>
            <Section4></Section4>
            <Section3></Section3>
            <Slides></Slides>
            <Footer></Footer>
        </div>
    )
}

export default Home