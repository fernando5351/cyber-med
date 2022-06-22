import Navbar from "../../components/navegacion/Navbar";
import ContTa from '../../css/contenttabla.module.css'
import Btnhome from '../../components/btn/Btnhome'
import TableHome from "../../components/table/Tablehome";


function Home() {
    return(
      <div className={ContTa.contenedorMT}>
          <Navbar />
          <div className={ContTa.contenedorBtn}>
          <Btnhome />
          </div>
          <div className={ContTa.contenedorTH}>
          <TableHome />
          </div>
      </div>
           
    );
}  

export default Home;