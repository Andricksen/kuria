<?php



    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST,OPTIONS');
/*
    $target_dir="data_img/";
    $url = $_SERVER['REQUEST_URI'];

    $parts= explode('/',$url);

    $dir= "http://".$_SERVER['SERVER_NAME'];

    for ($i=0;$i<count($parts)-1;$i++)
    {
        $dir.=$parts[$i]."/";
    }

    $actual_link="http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $tartget_file=$target_dir.basename($_FILES["selectFile"]["name"]);

    $uploadOk=1;

    $imageFileType=pathinfo($tartget_file,PATHINFO_EXTENSION);

    if(isset($_POST['submit']))
    {
        $check=getimagesize($_FILES["selectFile"]["name"]);
        if($check !== false)
        {
            echo "Image top ".$check["mine"];
            $uploadOk=1;
        }
        else
        {
            echo "ce fichier ne pas une image";
            $uploadOk=0;
        }

    }

    if(file_exists($tartget_file))
    {
        echo "ce fichier existe deja";
        $uploadOk=0;
    }

    if($uploadOk==0)
    {
        if(move_uploaded_file($_FILES['selectFile']['name'],$tartget_file))
        {
            echo  $dir.$tartget_file;
        }
        else
        {
            echo "Desole,impossible de telecharger cette image";
        }
    }
*/
if ($_FILES["selectFile"]["error"] > 0){
    echo "Error Code: " . $_FILES["selectFile"]["error"] . "<br />";
}
else
{
    echo "Uploaded file: " . $_FILES["selectFile"]["name"] . "<br />";
    echo "Type: " . $_FILES["selectFile"]["type"] . "<br />";
    echo "Size: " . ($_FILES["selectFile"]["size"] / 1024) . " kilobytes<br />";

    if (file_exists("/data_img/".$_FILES["selectFile"]["name"]))
    {
        echo $_FILES["selectFile"]["name"];
    }
    else
    {
        move_uploaded_file($_FILES["selectFile"]["tmp_name"],"data_img/".$_FILES["selectFile"]["name"]);
        echo "Done";
    }
}


?>