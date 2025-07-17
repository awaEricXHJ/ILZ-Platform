<?php

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => 'https://api.bilibili.com/x/web-interface/card?mid=1341714982',
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => '',
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 0,
   CURLOPT_FOLLOWLOCATION => true,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => 'GET',
   CURLOPT_HTTPHEADER => array(
      'User-Agent: Apifox/1.0.0 (https://apifox.com)',
      'Accept: */*',
      'Host: api.bilibili.com',
      'Connection: keep-alive'
   ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>
