import React from "react";
import VistaMedy from "../../components/vistamed/VistaMed";
import Navbar from "../../components/navegacion/Navbar";

const Create = () => {
  return (
    <div>
      <Navbar />
      <VistaMedy cancel="CANCELAR" save="ACTUALIZAR" />
    </div>
  );
};

export default Create;
