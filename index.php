<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>COVID API</title>
   <link rel="stylesheet" href="./styles/style.css">
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
   
   <div class="conteinerGeneral">
      <section class="contenedor">
         <h2 class="contenedor__titulo">Casos COVID-19 en el Perú al 2021-07-12</h2>

         <canvas id="myChart"></canvas>

         <?php 
            require('./secTabla.php');
         ?>
      </section>    
   </div>
   

   <!-- CDN jquery -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
   <!-- CDN CHARTJS -->
   <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
   <!-- JS PROPIO -->
   <script type="text/javascript" src="helper/app.js"></script>
   <script type="text/javascript" src="helper/tablaAjax.js"></script>

</body>
</html>