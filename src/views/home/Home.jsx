import Navbar from "../../components/navegacion/Navbar";
import ContTa from "../../css/contenttabla.module.css";
import TableHome from "../../components/table/Tablehome";

function Home() {
  return (
    <div className={ContTa.contenedorMT}>
      <Navbar />
      <div className={ContTa.contenedorTH}>
        <TableHome />
      </div>
    </div>
  );
}

export default Home;
