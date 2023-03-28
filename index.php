<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--<link rel="stylesheet" href="css/animations.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/index.css">-->

    


    <link rel="icon" type="image/png" sizes="16x16" href="./img/logo.png">

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="estilos.css">
    <link rel="stylesheet" href="estilosrepor.css">
    <link rel="stylesheet" href="estilosslide.css">
    <link rel="stylesheet" href="estilosterminos.css">

    <link rel="shortcut icon" href="images/LogoOneTapCortadoColorTransparente.png" type="image/x-icon">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rambla&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rum+Raisin&display=swap" rel="stylesheet">

    <meta name="theme-color" content="#202020">

    <script src="https://kit.fontawesome.com/a01a75bbd0.js" crossorigin="anonymous"></script>

    <style>
        table {
            animation: transitionIn-Y-bottom 0.5s;
        }
    </style>

</head>

<body>

               
                <header>
        <nav class="contenedormenu">
            <div class="logo" onclick="location.href='index.php';">
                <img src="images/OneTapLetraLogoBlanco.png">
            </div>
            <div class="enlaces">
                <a href="#audi"> <i class="fa-solid fa-music"></i>Samples</a>
                <a href="login.php"> <i class="fa-solid fa-user"></i>Iniciar Sesion</a>
                <a href="create-account.php"> <i class="fa-solid fa-headphones"></i>Registrarse</a>
            </div>
            
            
            <div class="hamburguesa">
                <img src="images/imgmenu.png" id="hamburguesa">
            </div>

        </nav>
    </header>

    <!--Imagen Portada-->

    <div class="portada" id="inicioo">
        <img src="images/PortadaStudio.jpg" alt="">
    </div>

    <!--Seccion Redes Sociales-->

    <div class="socialbar">
        <a href="https://www.facebook.com/profile.php?id=100091389575360" class="iconface" target="_blank"><img src="images/iconf.png" class="icosociales"></a>
        <a href="https://www.instagram.com/lone_tapl/" class="iconinsta" target="_blank"><img src="images/iconi.png" class="icosociales"></a>
        <a href="https://twitter.com/lOneTapl" class="icontwi" target="_blank"><img src="images/icont.png" class="icosociales"></a>
        
    </div>

    <main>

        <!--Seccion Nuevo-->

        <section class="contenedornuevo" id="nuevoo">
            <div class="conuevo">
                <img src="images/studio2.jpg" class="imgnuevo">
                <div class="textosnue">
                    <h2 class="titulos">Suena como un profesional</h2>
                    <p>Con nuestros sonidos puedes alcanzar producciones excepcionales a la tall de
                        las canciones publicadas de los artistas mas grandes del momento como Bad Bunny,
                         Paulo Londra, Duki Lit Killah, The Weeknd, Junior H, Travis Scott, etc. 
                        Si lo que buscas es inspiracion o nuevos sonidos, estas en el lugar 
                        perfecto para experimentar y conseguir todo lo que necesites.</p>

                        <button class="botonani" id="audi">
                            <a href="login.php"><i class="fa-solid fa-headphones"></i>Experiementa</a>
                        </button>
                </div>
            </div>

            <!--Rproductor de musica-->

            <div class="audio-player" id="skin">
			
                <div class="holder">
                    <div class="audio-wrapper" id="player-container" href="javascript:;">
                        <audio id="player" preload="metadata" onloadedmetadata="mDur()" ontimeupdate="initProgressBar()">
                            <source src="" type="audio/mp3">
                        </audio>
                    </div>
                    <div class="player-controls scrubber">
                        <div>
                            <div class="nombrebeat">
                                <p class="title"></p>
                            </div>
                            <div class="range">
                                <input id="dur" type="range" class="range" name="rng" min="0" max="1" step="0.00000001" value="0" onchange="mSet()" style="width: 100%">
                            </div>
                            <br>
                            <span class="time start-time"></span>
                            <span class="time end-time"></span>
                            <br>
                            <div class="ctrl">
                                <div class="botonesrepro">
                                    <p href="#prev" class="ctrl_btn " id="prev"><i class="fa fa-arrow-left" ></i></p>
                                    <span id="play-btn" class="fa fa-play "></span>
                                    <p href="#next" class="ctrl_btn " id="next"><i class="fa fa-arrow-right" ></i></p>
                                </div>
                                <div class="volumeControl">
                                    <div class="wrapper">
                                        <i class="fa fa-volume-up"></i>
                                        <span class="outer">
                                            <span class="inner"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            
                
            </div>
            
            <script type="text/javascript" src="assets/jquery/jquery.min.js"></script>
            <script type="text/javascript" src="scriptrepro.js"></script>


            <button class="botonrepro">
                <a href="create-account.php">Mas Contenido<i class="fa-solid fa-play"></i></a>
            </button>
        

        <!--Tarjetas Cartas 3D-->

        <section class="concard" id="dibujantee">
            <div class="Carousel">
                <div class="slick-list" id="slick-list">
                    <button class="slick-arrow slick-prev" id="button-prev" data-button="button-prev" onclick="app.processingButton(event)">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                    </button>
                    <div class="slick-track" id="track">
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Bad Bunny</small>Un Verano Sin Ti</h4>
                                    <picture>
                                        <img src="./images/album1.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Bad Bunny</small>El Ultimo Tour Del Mundo</h4>
                                    <picture>
                                        <img src="./images/album8.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Paulo Londra</small>Homerun</h4>
                                    <picture>
                                        <img src="./images/album2.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Paulo Londra</small>Back To The Game</h4>
                                    <picture>
                                        <img src="./images/album3.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Junior H</small>Musica <3</h4>
                                    <picture>
                                        <img src="./images/album4.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Junior H</small>Contingente</h4>
                                    <picture>
                                        <img src="./images/album5.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Kygo</small>Thrill Of The Chase</h4>
                                    <picture>
                                        <img src="./images/album6.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Kygo</small>Kids Love</h4>
                                    <picture>
                                        <img src="./images/album7.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Duki</small>Super Sangre Joven</h4>
                                    <picture>
                                        <img src="./images/album9.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Lit Killah</small>MAWZ</h4>
                                    <picture>
                                        <img src="./images/album10.png" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Travis Scott</small>Astroworld</h4>
                                    <picture>
                                        <img src="./images/album14.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Marshmello</small>Joytime</h4>
                                    <picture>
                                        <img src="./images/album11.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Martin Garrix</small>Sentio</h4>
                                    <picture>
                                        <img src="./images/album12.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>The Weeknd</small>Star Boy</h4>
                                    <picture>
                                        <img src="./images/album13.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div class="slick">
                            <div>
                                <a href="login.php">
                                    <h4><small>Ed Sheeran</small>Divide</h4>
                                    <picture>
                                        <img src="./images/album15.jpg" alt="Image">
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                    <button class="slick-arrow slick-next" id="button-next" data-button="button-next" onclick="app.processingButton(event)">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                    </button>
                </div>
               


    
        </div>
        </section>

       
        <section class="contenedorformas" id="formass">

            <div class="conformas">
                <div class="container__slider">

                    <div class="containerr">
                        <input type="radio" name="slider" id="item-1" checked>
                        <input type="radio" name="slider" id="item-2">
                        <input type="radio" name="slider" id="item-3">
            
                        <div class="cardss">
                            <label class="cardd" for="item-1" id="selector-1">
                                <img class="imgslide" src="images/studio6.jpg">
                            </label>
                            <label class="cardd" for="item-2" id="selector-2">
                                <img class="imgslide" src="images/studio14.jpg">
                            </label>
                            <label class="cardd" for="item-3" id="selector-3">
                                <img class="imgslide" src="images/studio17.jpg">
            
                        </div>
                    </div>
                <div class="textosformas">
                    <h2 class="titulos">Encuentra Tu Nota...</h2>
                    <p>Si necesitas elementos que te ayuden a producir como nunca lo has hecho
                        One Tap es para ti, pudes tener acceso a distintos sonidos que pueden encajar 
                        perfectamente con eso que estas creando, pruebalo.
                    </p>
                </div>
                
            </div>


        </section>

        <section class="marcass">
            <div class="slider">
                <div class="slide-track">
                    <div class="slide">
                        <img src="images/negro.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/spotify.png" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/amazonmusc.png" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/soundcloud.png" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/applemusic.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/googlemusci.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/deezer.png" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/yutubemusic.jpg" alt="">
                    </div>
        
                    <div class="slide">
                        <img src="images/flstudio.jpg" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/lmms_logo.png" alt="">
                    </div>
                    <div class="slide">
                        <img src="images/bandlab.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section class="contenedorformas" id="formass">

            <div class="conformas">
                <div class="textosformass">
                    <h2 class="titulos">Licencias Comerciales</h2>
                    <p>Los sonidos o samples que se comparten en esta pagina no son con fines comerciales 
                        pero pueden ser utilizados en producciones musicales que son con fines 
                        potenciales para el crecimiento de los productores.
                    </p>
                </div>
                
            </div>
            <button class="botonrepro">
                <a href="terminoslicencias.html"><i class="fa-solid fa-bookmark"></i>Leer Licencias</a>
            </button>


        </section>
    

    </main>

    <footer class="contenedorfoo" id="contactoo">
        <div class="confoo">
            <img src="images/OneTapLetraLogoBlanco.png" alt="" class="imgfloo">

            <span class="lineafoo"></span>
            
            <p id="cont"></p>

            <div class="socialesfoo">
                <a href="https://www.facebook.com/profile.php?id=100091389575360" target="_blank"><img src="images/iconf.png"></a>
                <a href="https://www.instagram.com/lone_tapl/"  target="_blank" ><img src="images/iconi.png"></a>
                <a href="https://twitter.com/lOneTapl"  target="_blank" ><img src="images/icont.png"></a>
            </div>

            
            <h3 class="titulo-final">| One Tap | ©United Networks | 2023 | <a href="terminoslicencias.html">Terminos y Condiciones</a> |</h3>
        </div>

    </footer>

    <script src="main.js"></script>
    
</body>
</html>