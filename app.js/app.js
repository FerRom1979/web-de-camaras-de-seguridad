let cotizacion = document.getElementById("cotizacion");
let cotizacionVenta = document.getElementById("coti-venta");

function traer() {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((datos) => {
      console.log(datos[0].casa.compra);
      let compra = datos[0].casa.compra;
      let venta = datos[0].casa.venta;
      cotizacion.innerHTML = `compra : ${compra}`;
      cotizacionVenta.innerHTML = `Venta : ${venta}`;
    });
}
 /*{
  "extends"; "airbnb-base",
  "rules";{
      "indent"; ["error", 4],
      "strict"; off,
      "no-alert"; off,
      "no-console"; off,
      "func-name"; off
  }

}*/