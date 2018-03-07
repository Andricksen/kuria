<?php

class Plat
{
    private $id;
    private $titre;
    private $description;
    private $explication;

    /**
     * Plat constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * @param mixed $titre
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getExplication()
    {
        return $this->explication;
    }

    /**
     * @param mixed $explication
     */
    public function setExplication($explication)
    {
        $this->explication = $explication;
    }




}

;?>

<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST,OPTIONS');

include_once ('connexion.php');

$con=Connexion::getConnexion();
$req=$con->prepare('SELECT * FROM t_plats,t_users WHERE t_plats.id_user=t_users.id');
$req->execute();
$data=array();
foreach ($req->fetchAll() as $r)
{
    //$plat=new Plat();


    //$plat->setTitre($r['titre']);
    //$plat->setDescription($r['details']);
    //$plat->setExplication($r['explications']);


    $data[]=array('nomPlat'=>$r['nom'],'detailsPlat'=>$r['details'],'ingredients'=>$r['ingredients'],'explications'=>$r['explications'],'dataAjout'=>$r['date_ajout'],'chemin'=>'http://192.168.173.1/kuria/data_img/test.jpg','nom_complet'=>$r['nom_complet'],"telephone"=>$r['telephone']);

}

echo  json_encode($data);
?>