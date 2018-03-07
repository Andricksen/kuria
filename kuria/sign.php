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
    $nom=$request->nom;
    $telephone = $request->telephone;
    $motdepasse= $request->motdepasse;
    $cmotdepasse=$request->cmotdepasse;

    if(!empty($nom) && !empty($telephone) && !empty($motdepasse) && !empty($cmotdepasse) && $motdepasse==$cmotdepasse)
    {

        include_once 'connexion.php';
        $conn= Connexion::getConnexion();
        $resultat="";
        $req=$conn->prepare('SELECT id FROM t_users WHERE nom_complet=?');
        $req->execute(array($nom));
        if($req->rowCount()>0)
        {
            $resultat="Cette information est deja utiliser";
        }
        $req=$conn->prepare('SELECT id FROM t_users WHERE telephone=?');
        $req->execute(array($telephone));
        if($req->rowCount()>0)
        {
            $resultat="Ce numero de telephone est deja utliser";
        }
        if(empty($resultat))
        {
            $req=$conn->prepare('INSERT INTO t_users SET nom_complet=?,telephone=?,motdepasse=?');
            $req->execute(array($nom,$telephone,sha1($motdepasse)));
            echo 'success';
        }
        else
        {
            echo $resultat;
        }


    }
    else
    {
        if($motdepasse!=$cmotdepasse)
        {
            echo 'mot de passe different';
        }
        if(empty($nom))
        {
            echo 'Completer le nom';
        } if(empty($telephone))
        {
            echo 'Completer le numero';
        }
        //echo 'remplir tous les champs';
    }
}
else {
    echo "Not called properly with username parameter!";
}
?>