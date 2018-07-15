<?php
$json=$_POST[json];
$fichier=fopen('map.json','r+');

fseek($fichier,0);
fputs($fichier,$json);
fclose($fichier);

