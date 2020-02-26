<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="CSS/propinas.css">
</head>
<body style="margin: 0">
    <div id="divi" style="height: 100vh;">
        <form id="container">
            <h3>Calculadora de propinas</h3>
            <ul style="list-style: none; padding-left: 5px;">
                <li>¿Cuánto costó todo?</li>
                <li class="inputs">$<input id="input--costo" placeholder="0" type="number"></li>
                <li>¿Cómo calificas la atención?</li>
                <li class="inputs">
                    <select id="select--atencion">
                        <option disabled selected value="0">-- Seleccionar --</option>
                        <option value="0.3">30% - Genial!</option>
                        <option value="0.2">20% - Buena</option>
                        <option value="0.15">15% - No tan mal mala</option>
                        <option value="0.1">10% - Pesima</option>
                        <option value="0.05">5%  - No vuelvo más.</option>
                    </select>
                </li>
                <li>¿Cuántos comparten la cuenta?</li>
                <li class="inputs"><input id="input--personas" style="width: 46%;" placeholder="Cantidad de" type="number">personas.</li>
                <li><button type="button" id="calcular">Calcular</button></li>
                <li><p id="resultado" style="font-size: 11px;"></p></li>
            </ul>
        </form>
    </div>

   <script src="JS/propinas.js"></script>
</body>
</html>