# Sintaksa

$ - Dollar znak je odabran kao inicijator(prefiks) komande koja zahteva upotrebu parsera.

Nakon [$] znaka sledi komanda, kojom govorimo programu koju operaciju da izvrsi. 

- Primer 1:

            var $a = $num;

    izlaz parsera :

             var alpha = 13;
    
    - [$] je iskoriscen da inicira variablu "a", te joj nas parser dodeljuje ime iz globalnog objekta (alpha). Iskoristili smo komandu "$num", kojom nam parser daje nasumice odabran broj u unapred definisanom opsegu. Vise 
    o ovome u segmentu komande.



- Primer 2:


        var $a = $num; 
        var $b = $num;
           function $c(){
               $rdc_$a = $num;
           }
           $c();
           console.log($a);

    Izlaz parsera : 

           var alpha = 12;
           var beta = 4;
            function theta(){
                alpha = 3
            }
            theta();
            console.log(alpha)
        
    - Nakon inicijacije variabli "a" i "b", pravimo funkciju pod kljucem "c". Unutar te funkcije,koristimo komandu [$rdc] , kojom redeklarisemo vec postojecu variablu "a" i dodeljujemo joj nasumicnu brojcanu vrednost. Vise o komandi [$rdc] u segmentu komande. Ako imamo dve ili vise spojene ($)komande , njih kao sto je ovde prikazano, razdvajamo znakom "_" (underscore).

        - Pozivamo funkciju komandom "$c()" - Ovo govori programu da pozove funkciju koja je snimljena pod kljucem "c". 

        - Logujemo vrednost variable "a", odnosno alpha,  upotrebom console.log();


- Primer 3:


            var $rnd = $num;
            var $rnd = $str;
            var $a = $num;
            var $b = $usedV + $a;
            console.log($b);

    izlaz parsera

            var theta = 4;
            var delta = "foo";
            var alpha = 12;
            var beta = theta + alpha;
            console.log(beta) // 16



    - Iniciramo variable sa nedefinisanim imenom komandom [$rnd]. Program im dodeljuje imena koja jos uvek nisu iskoriscena. Jednoj je dodeljena nasumicna brojcana vrednost, drugoj nasumican string. Sledece je inicijacija variable pod kljucem "a", i program joj, kao sto znamo, dodeljuje ime koje joj pripada pod tim kljucem u objektu variabli. (u ovom slucaju to je "alpha"). 
        
    - Dalje iniciramo variablu pod kljucem "b" i dodeljujemo joj vrednost zbira vrednosti nasumice iskoriscene variable i vrednosti variable pod kljucem "a"(alpha). Komanda "$usedV" nam daje nasumicnu variablu koju smo iskoristili, tako sto bira izmedju tri(theta,delta,alpha). Sve iskoriscene variable su sacuvane u globalnom objektu. Vise o tome u segmentu "Klasifikacija i sortiranje variabli"


#


λ - Trougao znak je odabran kao prefiks za klasifikaciju tipa podataka. Obicno se nadovezuje nakon komandi iniciranim ($) - dollar znakom. Sluzi nam da tagujemo variablu u zavisnosti od toga koji tip podataka je njena vrednost. Jedna variabla moze imati vise tagova (primer: broj i objektni kljuc). Ovaj znak koristiomo da pozovemo tip podataka koji zelimo u parseru.

   - Primer1: 

            var $a_λN = $num;
        Izlaz parsera: 
            
            var alpha = 12;


        - U ovom slucaju, variabli "$a", dodeljena je klasifikacija N - (number), i mozemo joj pristupiti po imenu variable ili tipu podatka. Ovo je korisno ako zelimo nasumice da odaberemo variable koje su samo broj, ili objekat, ili kljucevi objekta, i tome slicno. Vise o ovome u segmentu "Klasifikacija i sortiranje variabli i podataka". Neki od tagova i tipova podataka sa kojima cemo raditi su : 
        
        "N : Number",
        "O : Object",
        "S : String",
        "B : Boolean",
        "F : Funkcija",
        "K : ObjectKey",
        ...etc

   - Primer2:


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
        Izlaz parsera : 

            var alpha {
                zeta : 4,
                delta: 12,
                gamma : {
                    beta: 14,
                    sigma:function(){
                        alpha.delta = 7;
                    }
                }
                alpha.gamma.sigma();
                console.log(alpha.delta)
            }

        - [$a_λO] - dodeljeno je ime variable iz biblioteke pod kljucem ["a"] i tip podataka "Objekat"

        - [rnd_λNK] - ovime deklarisemo nasumice odabrano ime variable i dodeljujemo mu tipove "Number" i "Kljuc objekta"

        - [$c_λNK] deklarisemo ime variable koje je u biblioteci pod kljucem $[c], i dodeljujemo mu tipove "Number" i "Kljuc objekta"

        - [$g_λOK] Deklarisemo ime variable pod kljucem $[g] dodeljujemo mu tip "Objekat", ujedno i tip "Kljuc objekta" (jer se nalazi u drugom objektu);