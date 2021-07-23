<?php

if(isset($_POST['submit'])) {
    $first_name = $_POST['prenom'];
    $last_name = $_POST['name'];
    $headline = $_POST['poste'];
    $email1 = $_POST['email'];
    $phone1 = $_POST['telephone'];
    $educationLevel = $_POST['etudes'];
    $county = $_POST['adresse'];
    $city = $_POST['town'];
    $zipcode = $_POST['postal'];
    $description = $_POST['message'];
    $uname = $_POST['cv'];
};

$data = array (
    'first_name' => $first_name,
    'last_name' => $last_name,
    'headline' => $headline,
    'email1' => $email1,
    'phone1' => $phone1,
    'educationLevel' => $educationLevel,
    'county' => $county,
    'city' => $city,
    'zipcode' => $zipcode,
    'description' => $description,
    'uname' => $uname,
);

?>
