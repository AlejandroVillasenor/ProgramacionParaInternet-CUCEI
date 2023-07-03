<?php
    include("conexion.php");

    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    //Query cosiderando el id como autoincrementable
    $query = "INSERT INTO contacto(nombre, telefono, correo, mensaje) VALUES ('$nombre', '$telefono', '$email', '$mensaje')";

    //Validacioines
    //Que no esten vacios los campos
    if(empty($nombre) || empty($telefono) || empty($email)){
        echo "<script> 
            alert('Todos los campos son obligatorios');
            window.history.go(-1);
        </script>";
        exit;
    }
    //Que el correo sea valido y no repetido
    else if(!filter_var($email, FILTER_VALIDATE_EMAIL) || mysqli_num_rows(mysqli_query($conexion, "SELECT correo FROM contacto WHERE correo = '$email'")) > 0 ){
        echo "<script>
            alert('El correo no es valido o ya esta registrado');
            window.history.go(-1);
        </script>";
        exit;
    }
    //Que el telefono sea valido y de 10 digitos
    else if(!is_numeric($telefono) || strlen($telefono) != 10){
        echo "<script>
            alert('El telefono no es valido');
            window.history.go(-1);
        </script>";
        exit;
    }
    //Que el nombre no tenga numeros en el
    else if(is_numeric($nombre)){
        echo "<script>
            alert('Nombre no valido');
            window.history.go(-1);
        </script>";
        exit;
    }
    //Que el mensaje no tenga mas de 200 caracteres
    else if(strlen($mensaje) > 200){
        echo "<script>
            alert('El mensaje no puede tener mas de 200 caracteres');
            window.history.go(-1);
        </script>";
        exit;
    }

    //Si todo esta bien
    $resultado = mysqli_query($conexion, $query);
    if(!$resultado){
        echo "<script>
            alert('Error al registrarse');
            window.history.go(-1);
        </script>";
    } else {
        echo "<script>
            alert('Usuario registrado exitosamente');
            window.history.go(-1);
        </script>";
    }

    mysqli_close($conexion);

?>