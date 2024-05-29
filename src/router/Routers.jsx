import FAQ from "../pages/FAQ"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Services from "../pages/Services"
import Contacts from "../pages/Contacts"
import Error from "../pages/Error"
import Layout from "../components/shared/Layout/Layout"



  

  export const ROUTES = [
    {
      path:'/',
      element:<Layout />,
      children:[
        {path:'',element : <Home />},
        {path:'home',element : <Home />},
        {path:'faq',element : <FAQ />},
        {path:'about-us',element : <AboutUs />},
        {path:'services',element : <Services />},
        {path:'contacts',element : <Contacts />},
        {path:'*',element : <Error />},
      ]
    },
  ]
