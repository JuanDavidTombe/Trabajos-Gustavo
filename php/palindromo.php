<!DOCTYPE html>
<html>
<body>

<!-- FORMULARIO HTML -->
<form method="POST">
    <input type="text" name="palabra" placeholder="Escribe una palabra">
    <button type="submit">Validar</button>
</form>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $palabra = $_POST['palabra']; 
    $palabra = strtolower($palabra); 
    $palabra = str_replace(" ", "", $palabra);
    
    $longitud = strlen($palabra);
    $esPalindromo = true;

    for ($i = 0; $i < $longitud / 2; $i++) {
        $letraInicio = $palabra[$i];
        $letraFinal  = $palabra[$longitud - 1 - $i];
        
        if ($letraInicio != $letraFinal) {
            $esPalindromo = false;
            break;
        }
    }

    if ($esPalindromo) {
        echo "<p>" . $palabra . " ES palíndromo </p>";
    } else {
        echo "<p>" . $palabra . " NO es palíndromo </p>";
    }
}
?>

</body>
</html>