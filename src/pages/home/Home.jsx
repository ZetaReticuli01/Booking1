import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import Featured from "../../components/Featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import "./home.css"
import MailLists from "../../components/Maillists/MailLists";
import  Footer from '../../components/footer/Footer'



 const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
         <h1 className="homeTitle">Browse by property type</h1>
         <PropertyList/>  
         <h1 className="homeTitle">Homes guests love</h1>
         <FeaturedProperties/>
         <MailLists/>
         <Footer/>
        </div>
    </div>
  )
}

export default Home;
