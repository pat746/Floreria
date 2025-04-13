<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Tus etiquetas meta, enlaces CSS y posiblemente scripts -->
    <title>Carrito de Compras</title>
</head>

<body>
    <!-- Contenido de la tabla del carrito -->
    <table id="cart-table" class="table">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
            </tr>
        </thead>

        <tbody>
            <?php
            $total = 0; // Inicializa la variable para el total de la compra

            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["productos"])) {
                // Obtener los productos seleccionados del campo oculto
                $productosSeleccionados = json_decode($_POST["productos"], true);

                // Verificar que $productosSeleccionados es un array
                if (is_array($productosSeleccionados)) {
                    // Ahora puedes recorrer $productosSeleccionados y mostrar los productos en una tabla
                    foreach ($productosSeleccionados as $producto) {
                        echo "<tr>";
                        echo "<td>" . $producto["nombre"] . "</td>";
                        echo "<td>" . $producto["cantidad"] . "</td>";
                        echo "<td>" . $producto["precio"] . "</td>";
                        echo "</tr>";

                        // Sumar el precio total del producto al total de la compra
                        $total += $producto["precio"] * $producto["cantidad"];
                    }
                } else {
                    echo "Los datos de productos no son válidos.";
                }
            } else {
                echo "No se enviaron datos de productos.";
            }
            ?>
        </tbody>
    </table>

    <!-- Mostrar el total de la compra y el botón de pago con la alerta -->
    <p>Total a pagar: S/<?php echo number_format($total, 2); ?></p>
    <button onclick="realizarPago()">Pagar</button>

    <!-- Tu script JavaScript, si es necesario -->
  
</body>

</html>
