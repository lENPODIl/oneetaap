
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="shortcut icon" href="images/LogoOneTapCortadoColorTransparente.png" type="image/x-icon">
    <link rel="stylesheet" href="estilosformularios.css">
  <link rel="stylesheet" href="estilos.css">

    <title>Registrarse</title>
    
</head>

<nav class="contenedormenu2">
            <div class="logo" onclick="location.href='index.php';">
                <img src="images/OneTapLetraLogoBlanco.png">
            </div>
            <div class="enlaces">
               
            </div>
            

        
        </nav>


<body>


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

        $result = $database->query("select * from webuser");

        
        $email = $_POST['newemail'];
        $tele = $_POST['tele'];
        $newpassword = $_POST['newpassword'];
        $cpassword = $_POST['cpassword'];

        if ($newpassword == $cpassword) {
            $result = $database->query("select * from webuser where email='$email';");
            if ($result->num_rows == 1) {
                $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">Already have an account for this Email address.</label>';
            } else {

                $database->query("insert into patient(pemail,pname,ppassword, paddress, pnic,pdob,ptel) values('$email','$name','$newpassword','$address','$nic','$dob','$tele');");
                $database->query("insert into webuser values('$email','p')");

                //print_r("insert into patient values($pid,'$email','$fname','$lname','$newpassword','$address','$nic','$dob','$tele');");
                $_SESSION["user"] = $email;
                $_SESSION["usertype"] = "p";
                $_SESSION["username"] = $fname;

                echo '<script language="javascript"> window.location="login.php";</script>';
                //header('Location: patient/index.php');
                $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;"></label>';
            }
        } else {
            $error = '<label for="promter" class="form-label" style="color:rgb(255, 62, 62);text-align:center;">Password Conformation Error! Reconform Password</label>';
        }
    } else {
        //header('location: signup.php');
        $error = '<label for="promter" class="form-label"></label>';
    }

    ?>




            

    <center>
        <div class="container">
            <table style="margin: 30px 0px 0px 0px;width: 80%;">
                <tr>
                    <td colspan="2">
                        <p class="header-text">Registrarse</p>
                        
                    </td>
                </tr>
                <tr>
                    <form action="" method="POST">
                        <td class="label-td" colspan="2">
                            <label for="newemail" class="form-label">Correo: </label>
                        </td>
                </tr>
                <tr>
                    <td class="label-td" colspan="2">
                        <input type="email" name="newemail" class="input-text" placeholder="Email Address" required>
                    </td>

                </tr>
                
                <tr>
                    <td class="label-td" colspan="2">
                        <label for="newpassword" class="form-label">Crear Nueva Contraseña: </label>
                    </td>
                </tr>
                <tr>
                    <td class="label-td" colspan="2">
                        <input type="password" name="newpassword" class="input-text" placeholder="New Password" required>
                    </td>
                </tr>
                <tr>
                    <td class="label-td" colspan="2">
                        <label for="cpassword" class="form-label">Confirmar Contraseña: </label>
                    </td>
                </tr>
                <tr>
                    <td class="label-td" colspan="2">
                        <input type="password" name="cpassword" class="input-text" placeholder="Confirmar Contraseña" required>
                    </td>
                </tr>

                <tr>

                    <td colspan="2">
                        <?php echo $error ?>

                    </td>
                </tr>

                <tr>
                    
                    <td>
                        <input type="submit" value="Registrarse" class="login-btn btn-primary btn">
                    </td>

                </tr>
                <tr>
                    <td colspan="2">
                        <br>
                        <label for="" class="sub-text" style="font-weight: 280;">Si ya tienes una cuenta solo&#63; </label>
                        <a href="login.php" class="hover-link1 non-style-link">Inicia Sesión</a>
                        <br><br><br>
                    </td>
                </tr>

                </form>
                </tr>
            </table>

        </div>
        <div class="socialesfoo">
                <p>| One Tap | ©United Networks | 2023 |</p><a href="terminoslicencias.html">Terminos y Condiciones</a><p>|</p>
            </div>
    </center>


</body>

</html>