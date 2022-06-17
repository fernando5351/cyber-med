import Navbar from "../../components/navegacion/Navbar";
import '../../css/contenttabla.css'
import Btnhome from '../../components/btn/Btnhome'
import TableHome from "../../components/table/Tablehome";


function Home() {
    return(
      <div className="contenedor-main-tabla">
          <Navbar />
          <div className="contenedor-btn">
          <Btnhome />
          </div>
          <div className='contenedor-tablaH'>
          <TableHome />
          </div>
      </div>
           
    );
}  

export default Home;