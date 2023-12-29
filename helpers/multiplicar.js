const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar){
      console.log(colors.america("******************************"));
      console.log("Tabla del ", colors.green(base) );
      console.log(colors.america("******************************"));
      console.log(salida.white);
    }
    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt  `;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
