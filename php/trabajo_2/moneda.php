<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Moneda</title>
</head>
<body>
    
</body>
</html>
<?php
$conteoDeCaras = 0;
$conteoDeLnazamientos = 0;
while ($conteoDeCaras < 3) {
    $lanzamiento = rand(0, 1);
    $conteoDeLnazamientos++;
    
    if ($lanzamiento === 0) {
        $conteoDeCaras++;
        echo "<div class=\"coin\">C</div>";
    } else {
        $conteoDeCaras = 0;
        echo "<div class=\"coin\">X</div>";
    }
}
echo "<p>Se lanzaron " . $conteoDeLnazamientos . " lanzamientos.</p>";
?>