<?php
/**
 * Created by PhpStorm.
 * User: PC
 * Date: 16/01/2018
 * Time: 21:27.
 */
class Connexion
{
    public static function getConnexion()
    {
        try {
            $host = 'mysql:host=127.0.0.1;dbname=kuria';
            $user = 'root';
            $pwd = '';
            $pdo = new PDO($host, $user, $pwd,
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,PDO::ATTR_PERSISTENT => true));
        } catch (Exception $e) {
            die('Erreur : '.$e->getMessage());
        }

        return $pdo;
    }
}
