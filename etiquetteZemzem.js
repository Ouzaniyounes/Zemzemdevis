

    var rassmal_62fuille = 24500; 
    var rassmal_125fuille = 30500; 
    var Tirage_62 ,Tirage_125, Achat_62, Achat_125, quantite_62 , quantite_125;
    var pose34,pose23,pose32,pose21;
    var hauteur , largeur ;
    var meillure34;
    var meillure23 , max34 , max32 , meillure21 , meillure32;
    var is_affichierDevis = "True";

    function Get_Dimenstion_information() {
        hauteur = document.getElementById('hauteur').value
        largeur =  document.getElementById('largeur').value
    }
    function affichier_switch(is_affichierDevis) {

        // hakda bach nraja3 variable array b les element li endhoum hadik class name 
        var affichierNone_collection = document.getElementsByClassName("affichier_none")
        var affichierTout_Collection = document.getElementsByClassName("affichier_tout");

        if(is_affichierDevis == "True") {

            // Hide elements with class "affichier_none"

            // b lenght na3ref length ta3 array 
            for(var i = 0 ; i < affichierNone_collection.length ; i++) {
                affichierNone_collection[i].style.display="none";
            }

            // Display elements with class "affichier_tout"
            for(var i = 0 ; i < affichierTout_Collection.length ; i++) {
                affichierTout_Collection[i].style.display="block";
            } 

            var buttonContainer = document.getElementsByClassName("buttunContainer")
            for(var i = 0 ; i < buttonContainer.length ; i++) {
                affichierTout_Collection[i].style.display="initial";
            } 
            document.getElementById("autreDevis_button").style.display="initial";

        } else if(is_affichierDevis == "False") {
            // Show elements with class "affichier_none"
            // b lenght na3ref length ta3 array 
            for(var i = 0 ; i < affichierNone_collection.length ; i++) {
                affichierNone_collection[i].style.display="initial";
            }

            // Hide elements with class "affichier_tout"
            for(var i = 0 ; i < affichierTout_Collection.length ; i++) {
                affichierTout_Collection[i].style.display="none";
            } 

            var buttonContainer = document.getElementsByClassName("buttunContainer")
            for(var i = 0 ; i < buttonContainer.length ; i++) {
                affichierTout_Collection[i].style.display="none";
            } 
            document.getElementById("autreDevis_button").style.display="none";
        }



    }
  
    function calculeDevis() {
        // transforme the values from string to float
        hauteur = parseFloat(hauteur);
        largeur = parseFloat(largeur);

        // Opperation pour format 35/25
        // transform the operation to integer 
        var hauteur34 = parseInt(34/hauteur);
        var largeur23 = parseInt(23/largeur);
        var hauteur23 = parseInt(23/hauteur);
        var largeur34 = parseInt(34/largeur);

        // calculate wht the better position for both dimenstion
        if((hauteur34 * largeur23) >= (hauteur23 * largeur34 ) ) {
            meillure34 = hauteur;
            meillure23 = largeur;
            pose34 = hauteur34;
            pose23 = largeur23;
            max34 = hauteur34 * largeur23 ;
        } else {
            meillure34 = largeur;
            meillure23 = hauteur ;
            pose34 = largeur34;
            pose23 = hauteur23
            max34 = hauteur23 * largeur34 ;
        }

        // Operation pour format 33/23
        var hauteur32 = parseInt(32/hauteur); 
        var largeur21 = parseInt(21/largeur);
        var hauteur21 = parseInt(21/hauteur);
        var largeur32 = parseInt(32/largeur);

        if((hauteur32 * largeur21) >= (hauteur21 * largeur32 ) ) {
            meillure32 = hauteur;
            meillure21 = largeur;
            pose32 = hauteur32;
            pose21 = largeur21;
            max32 = hauteur32 * largeur21 ;
        } else {
            meillure32 = largeur;
            meillure21 = hauteur ;
            pose32 = largeur32;
            pose21 = hauteur21;
            max32 = hauteur21 * largeur32 ;
        
        }

        // Knowing wht Format better
        if (max34 > max32 ) {

            document.getElementById("header1").innerHTML = "La Forme pour impression : 35cm x 25cm "

            // Pour Montage 
            document.getElementById("dimenstion_sur_30").innerHTML= " La Dimenstion sur 35 : \ " +meillure34+ " \ cm "
            document.getElementById("dimenstion_sur_20").innerHTML= " La Dimenstion sur 25 : \ " +meillure23+ " \ cm"
            document.getElementById("nombre_pose_30").innerHTML= " Nombre de pose sur 35 : \ " +pose34+ " \ pose "
            document.getElementById("nombre_pose_20").innerHTML= " Nombre de pose sur 25 : \ " +pose23+ " \ pose"

            // Pour 62 feuille
            Tirage_62 = 62 * 8;
            quantite_62 = Tirage_62 * max34 ;
            Achat_62 = rassmal_62fuille / quantite_62 ;
            document.getElementById("tirage_62").innerHTML= " Tirage =  \ " +Tirage_62+ " \ "
            document.getElementById("quantite_62").innerHTML= "Quantite = \ " +quantite_62+ " \ "
            document.getElementById("achat_62").innerHTML= "Achat = \ " +Achat_62+ " \ "

            // Pour 125 feuille
            Tirage_125 = 125 * 8;
            quantite_125 = Tirage_125 * max34 ;
            Achat_125 = rassmal_125fuille / quantite_125 ;
            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage_125+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite_125+ " \ "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat_125+ " \ "

        } else if(max32 >= max34) {

            document.getElementById("header1").innerHTML = "La Forme pour impression : 33cm x 23cm "
            // Pour Montage 
            document.getElementById("dimenstion_sur_30").innerHTML= " La Dimenstion sur 33 : \ " +meillure32+ " \ cm "
            document.getElementById("dimenstion_sur_20").innerHTML= " La Dimenstion sur 23 : \ " +meillure21+ " \ cm"
            document.getElementById("nombre_pose_30").innerHTML= " Nombre de pose sur 33 : \ " +pose32+ " \ pose "
            document.getElementById("nombre_pose_20").innerHTML= " Nombre de pose sur 23 : \ " +pose21+ " \ pose"

            // Pour 62 feuille
            Tirage_62 = 62 * 9;
            quantite_62 = Tirage_62 * max32;
            Achat_62 = rassmal_62fuille / quantite_62 ;
            document.getElementById("tirage_62").innerHTML= " Tirage =  \ " +Tirage_62+ " \ "
            document.getElementById("quantite_62").innerHTML= "Quantite = \ " +quantite_62+ " \ "
            document.getElementById("achat_62").innerHTML= "Achat = \ " +Achat_62+ " \ "

            // Pour 125 feuille
            Tirage_125 = 125 * 9;
            quantite_125 = Tirage_125 * max32;
            Achat_125 = rassmal_125fuille / quantite_125 ;
            document.getElementById("tirage_125").innerHTML= " Tirage =  \ " +Tirage_125+ " \ "
            document.getElementById("quantite_125").innerHTML= "Quantite = \ " +quantite_125+ " \ "
            document.getElementById("achat_125").innerHTML= "Achat = \ " +Achat_125+ " \ "
        
        }
    }
    function Affichier_devis() {
        is_affichierDevis = "True";
        Get_Dimenstion_information();
        affichier_switch(is_affichierDevis)
        calculeDevis()    
    }
    function HideDevis() {
        is_affichierDevis = "False";
        affichier_switch(is_affichierDevis);
    }

