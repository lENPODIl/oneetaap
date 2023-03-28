<?php
 session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="shortcut icon" href="images/LogoOneTapCortadoColorTransparente.png" type="image/x-icon">
    <link rel="stylesheet" href="estilosformularios.css">
  <link rel="stylesheet" href="estilos.css">

    <title>Inicio Sesión</title>



</head>

<body>

<nav class="contenedormenu2">
            <div class="logo" onclick="location.href='index.php';">
                <img src="images/OneTapLetraLogoBlanco.png">
            </div>
            <div class="enlaces">
               
            </div>
        </nav>

    
    <?php

    //learn from w3schools.com
    //Unset all the server side variables

   

    //$_SESSION["user"] = "";
    //$_SESSION["usertype"] = "";

    // Set the new timezone
    date_default_timezone_set('America/Mexico_City');
    $date = date('Y-m-d');

    $_SESSION["date"] = $date;


    //import database
    include("connection.php");





    if ($_POST) {

        $email = $_POST['useremail'];
        $password = $_POST['userpassword'];

        $error = '<label for="promter" class="form-label"></label>';

        $result = $database->query("select * from webuser where email='$email'");
        if ($result->num_rows == 1) {
            $utype = $result->fetch_assoc()['usertype'];
            if ($utype == 'p') {
                $checker = $database->query("select * from patient where pemail='$email' and ppassword='$password'");
                if ($checker->num_rows == 1) {


                    //   Patient dashbord
                    $_SESSION['user'] = $email;
                    $_SESSION['usertype'] = 'p';

                    echo '<script language="javascript"> window.location="perfilusuario.html";</script>';
                    //header('location: patient/index.php');
                } else {
                    $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">Credenciales incorrectas: correo electrónico o contraseña no válidos</label>';
                }
            } elseif ($utype == 'a') {
                $checker = $database->query("select * from admin where aemail='$email' and apassword='$password'");
                if ($checker->num_rows == 1) {


                    //   Admin dashbord
                    $_SESSION['user'] = $email;
                    $_SESSION['usertype'] = 'a';
                    echo '<script language="javascript"> window.location="admin/index.php";</script>';
                    //header('location: admin/index.php');
                } else {
                    $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">Credenciales incorrectas: correo electrónico o contraseña no válidos</label>';
                }
            } elseif ($utype == 'd') {
                $checker = $database->query("select * from doctor where docemail='$email' and docpassword='$password'");
                if ($checker->num_rows == 1) {


                    //   doctor dashbord
                    $_SESSION['user'] = $email;
                    $_SESSION['usertype'] = 'd';
                    echo '<script language="javascript"> window.location="doctor/index.php";</script>';
                    //header('location: doctor/index.php');
                } else {
                    $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">Credenciales incorrectas: correo electrónico o contraseña no válidos</label>';
                }
            }
        } else {
            $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">No podemos encontrar ninguna cuenta para este correo electrónico</label>';
        }
    } else {
        $error = '<label for="promter" class="form-label">&nbsp;</label>';
    }

    ?>


        





    <center>
        <div class="container">
            <table style="margin: 30px 0px 0px 0px;width: 60%;">
                <tr>
                    <td>
                        <p class="header-text">Inicia Sesión</p>
                    </td>
                </tr>
                <div class="form-body">
                    
                    <tr>
                        <form action="" method="POST">
                            <td class="label-td">
                                <label for="useremail" class="form-label">Correo Electrónico: </label>
                            </td>
                    </tr>
                    <tr>
                        <td class="label-td">
                            <input type="email" name="useremail" class="input-text" placeholder="Correo Electrónico" required>
                        </td>
                    </tr>
                    <tr>
                        <td class="label-td">
                            <label for="userpassword" class="form-label">Contraseña: </label>
                        </td>
                    </tr>

                    <tr>
                        <td class="label-td">
                            <input type="Password" name="userpassword" class="input-text" placeholder="Contraseña" required>
                        </td>
                    </tr>


                    <tr>
                        <td><br>
                            <?php echo $error ?>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="submit" value="Acceder" class="login-btn btn-primary btn">
                        </td>
                    </tr>
                </div>
                <tr>
                    <td>
                        <br>
                        <label for="" class="sub-text" style="font-weight: 280;">Aún no tienes cuenta&#63 </label>
                        <a href="create-account.php" class="hover-link1 non-style-link">Regístrate</a>
                        <br><br><br>
                    </td>
                </tr>




                </form>
            </table>

        </div>
        <div class="socialesfoo">
                <p>| One Tap | ©United Networks | 2023 |</p><a href="terminoslicencias.html">Terminos y Condiciones</a><p>|</p>
            </div>
    </center>
</body>

</html>