<?php
//http://stackoverflow.com/questions/18382740/cors-not-working-php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


//http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
$postdata = file_get_contents("php://input");
if (isset($postdata)) {
    $request = json_decode($postdata);
    $nom_plat=$request->nom_plat;
    $description_plat = $request->description_plat;
    $ingredient= $request->ingredient;
    $explications=$request->explications;

    if(!empty($nom_plat) && !empty($description_plat) && !empty($ingredient) && !empty($explications))
    {

        include_once 'connexion.php';
        $conn= Connexion::getConnexion();
        $resultat="";
        $req=$conn->prepare('SELECT id_user FROM t_plats WHERE nom=? AND id_user=?');
        $req->execute(array($nom_plat,1));
        if($req->rowCount()>0)
        {
            $resultat="Ce plat existe deja";
        }

        if(empty($resultat))
        {
            $req=$conn->prepare('INSERT INTO t_plats SET nom=?,details=?,ingredients=?,explications=?,date_ajout=?,id_user=?');
            $req->execute(array($nom_plat,$description_plat,$ingredient,$explications,date('Y-m-d'),1));
            echo 'success';
        }
        else
        {
            echo $resultat;
        }


    }
    else
    {
        if(empty($nom_plat))
        {
            echo 'donner un nom a votre plat';
        }
        if(empty($description_plat))
        {
            echo 'donner une breve explcations';
        }
        if(empty($ingredient))
        {
            echo 'lister les ingredients pour preparer votre plat';
        }
        if(empty($explications))
        {
            echo 'Expliquez comment preparer votre plat';
        }
    }
}

else {
    echo "Not called properly with username parameter!";
}
?>