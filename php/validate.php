<?php

declare(strict_types=1);

$regExp = "/[-+]?\d+[.]?\d{0,15}/";

function validateX($xInput): bool{
    global $regExp;
    return (is_numeric($xInput)) and (preg_match($regExp, strval($xInput))) and ((-4 <= $xInput) and ($xInput <= 4));
}

function validateY($yInput): bool{
    global $regExp;
    return (is_numeric($yInput)) and (preg_match($regExp, strval($yInput))) and ((-3 <= $yInput) and ($yInput <= 3));
}

function validateR($rInput): bool{
    global $regExp;
    return (is_numeric($rInput)) and (preg_match($regExp, strval($rInput))) and ((1 <= $rInput) and ($rInput <= 5));
}   