<!DOCTYPE html>
<html lang="es-MX">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adivina el número</title>
    <link rel="stylesheet" href="CSS/style.css">
</head>
<body class="flex--center" background="Imagenes/bandw.jpg">
    <div class="container">
        <div class="container__screen flex--center">
            <div id="screen--id" class="screen flex--center">
                <header id="adivina">Adivina el número</header>
                <p id="dificultad"><h6 id="dificultadInner">Dificultad</h6></p>
                <p id="texto1--screen">NaN</p>
                <p id="texto2--screen">NaN</p>
            </div>
        </div>
        <div class="container__controls flex--center">
            <div class="controls flex--center">
                <div class="bar">
                    <button type="button" id="btn--1" class="button--bar flex--center"><img src="Imagenes/183-switch.png" id="onoffimg"/></button>
                    <button type="button" id="btn--2" class="button--bar flex--center"><img src="Imagenes/224-happy.png" id="difimg"/></button>
                    <button type="button" id="btn--3" class="button--bar flex--center"><img src="Imagenes/285-play3.png" id="playimg"></button>
                </div>
                <div class="game--controls">
                    <div class="flex--center"><input type="number" placeholder="Numero" id="input"></div>
                    <div class="flex--center"><button type="button" id="play"><img src="Imagenes/273-checkmark.png" height="100%" width="100%"></button></div>
                </div>
            </div>
        </div>
    </div>
<script src="JS/index.js"></script>
</body>
</html>
