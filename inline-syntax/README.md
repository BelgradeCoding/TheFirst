# Intro

$ - Dollar znak je odabran kao inicijator(prefiks) komande koja zahteva upotrebu parsera.

Nakon $ znaka sledi komanda, kojom govorimo programu koju operaciju da izvrsi. 

 Primer1:

            var $a = $num;

            // moguci izlaz parsera : var alpha = 13;
    
       - "var $a", $ je iskoriscen da inicira variablu "a", te joj nas parser dodeljuje ime iz globalnog objekta (alpha). Iskoristili smo komandu "$num", kojom nam parser daje nasumice odabran broj u unapred definisanom opsegu.

/////////////////////////////////////////////////////////////////////////

Primer2:


          var $a = $num; 
          var $b = $num;
           function $c(){
               $rdc_$a = $num;
           }
           $callF_$c;
           console.log($a);
        
        - Nakon inicijacije variabli "a" i "b", pravimo funkciju pod kljucem "c". Unutar te funkcije,koristimo novu komandu "$rdc",kojom redeklarisemo vec postojecu variablu "a" i dodeljujemo joj nasumicnu brojcanu vrednost. Vise o komandi "$rdc" u segmentu komande. Ako imamo dve ili vise spojene ($)komande , njih kao sto je ovde prikazano, razdvajamo znakom "_" (underscore).

        - Pozivamo funkciju komandom "$callF_$c" - Ovo govori programu da pozove funkciju koja je snimljena pod kljucem "c". Vise o komandi $callF u segmentu komande.

        - Logujemo vrednost variable "a" upotrebom console.log();



/////////////////////////////////////////////////////////////////////////


Primer2:


            var $rnd = $num;
            var $rnd = $str;
            var $a = $num;
            var $b = $usedV + $a;
            console.log($b);

            // moguci izlaz parsera

            var theta = 4;
            var delta = "foo";
            var alpha = 12;
            var beta = theta + alpha;
            console.log(beta) // 16



        - Iniciramo variable sa nedefinisanim imenom komandom $rnd. Program im dodeljuje imena koja jos uvek nisu iskoriscena. Jednoj je dodeljena nasumicna brojcana vrednost, drugoj nasumican string. Sledece je inicijacija variable pod kljucem "a", i program joj,kao sto znamo,dodeljuje ime koje joj pripada pod tim kljucem u objektu variabli. (u ovom slucaju to je "alpha"). 
        
        Onda iniciramo variablu pod kljucem "b" i dodeljujemo joj vrednost zbira vrednosti nasumice iskoriscene variable i vrednosti variable pod kljucem "a"(alpha). Komanda "$usedV" nam daje nasumicnu variablu koju smo iskoristili, tako sto bira izmedju tri(theta,delta,alpha). Sve iskoriscene variable su sacuvane u globalnom objektu. Vise o tome u segmentu "Klasifikacija i sortiranje variabli"



λ - Trougao znak je odabran kao prefiks za klasifikaciju tipa podataka. Obicno se nadovezuje nakon komandi iniciranim ($) - dollar znakom. Sluzi nam da tagujemo variablu u zavisnosti od toga koji tip podataka je njena vrednost. Jedna variabla moze imati vise tagova (primer: broj i objektni kljuc)...work in progress

   Primer1: 

            var $a_λN = $num;


        - U ovom slucaju, variabli "$a", dodeljena je klasifikacija N - (number), i mozemo joj pristupiti po imenu variable ili tipu podatka. Ovo je korisno ako zelimo nasumice da odaberemo variable koje su samo broj, ili objekat, ili kljucevi objekta, i tome slicno. Vise o ovome u segmentu "Klasifikacija i sortiranje variabli i podataka". Neki od tagova i tipova podataka sa kojima cemo raditi su : 
        
        "N : Number",
        "O : Object",
        "S : String",
        "B : Boolean",
        "F : Funkcija",
        "K : ObjectKey",
        ... work in progress ...

    Primer2:


            var $a_λO {
                    $rnd_λNK:$num,
                    $c_λNK:$num,
                    $g_λOK: {
                        $rnd_λNK:$num,
                        $h_λFK:function(){
                            $a.$c = $num;
                        }
                    }
            }
            $a.$g.$h();
            console.log($a.$c)


Work and editing in progress........