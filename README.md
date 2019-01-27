* General syntaxs

    - [ code ] // [ inline randomization ] # [ block/row randomization ] ~ [ custom code ] 
    - primer:

                    var rubor = 5 + 3; // var # r0 ~ c--66-n-Math.sqrt(9)--

    - separatori dele dele sintaksu na nekoliko celina koje se primenjuju na kod
    - sve pre "//" je kod koji se prikazuje korisniku
    - nakon "//", a pre nekog drugog separatora ("#" ili "~") ili kraja reda je kod inline randomizacija
    - nakon "#", a pre nekog drugog separatora ("~") ili kraja reda je kod block/row randomizacija
    - nakon "~" do kraja reda je kod custom randomizacija
    - vise vrsta randomizacija istog tipa se odvajaju razmakom
        primer: var x = "awesome code"; // # r0 b1-1

* Inline randomization:

    - var randomization
        - [ code ] // [ var ]
            - "//": separator za randomizacije
            - "var": fiksna oznaka

        primer:

                    var x = 5 + 3; // var
            
        var u kodu ce se ili pojaviti ili ne svaki put kada stoji "var" u inline bloku


    - Intiger randomization:
        - [ code ] 
            - "000" u kodu ce rezultovati zamenom u random broj

        primer:

                    var x = 5 + 000;
            
        "000" u kodu ce biti zamenjeno sa random celim brojem.

    
    - Math operators randomization:
        - [ code ] // +[ index operatora u liniji koda ]
            - "//": separator za randomizacije
            - "+": fiksna oznaka
            - [ index operatora u liniji koda ]: sadrzi cele brojeve koji oznacavaju mesto pojavljivanja znakova u kodu. omogucavaju da biramo koje cemo znakove randomizirati

        primer:

                    var x = 5 + 1 + 2 + 5 + 7; // +03
            
        u ovom primeru hvatamo prvi plus jer posle "+" stoji "0". ignorisemo drugo i trece pojavljivanje znaka plus i hvatamo cetvrti, jer posle "0" stoji "3". dakle, samo ce prvi i cetvrti znak plus biti provuceni kroz randomizaciju dok ce ostali ostati nepromenjeni.


* Row/block randomization:

    - Zamena pozicija redova
        - [ code ] // # r[ oznaka mesta ]

            - "#": separator row/block randomizacija
            - "r": fiksna oznaka reda ("row")
            - [ oznaka mesta ]: mora biti ceo broj. Brojevi se moraju kretati od 0 na vise. Svaki broj oznacava
            tip reda. Svi redovi sa istim tipom su validni da zamene mesta jedni sa drugima. Npr: svi redovi koji imaju oznaku "r0" ce nasumicno zameniti mesta jedni sa drugima, ignorisuci ostale redove. Svi redovi sa oznakom "r1" ce menjati mesta samo sa redovima sa istom oznakom ignorisuci druge redove itd.

        primer:

                    var a = 1; // # r0
                    var b = 2; // # r1
                    var c = 3; // # r1
                    var d = 4; // # r0
                    var e = 5;
                    var f = 6; // # r0

        Ovde ce redovi sa oznakom "r0" nasumicno menjati mesta sa drugim redovima iste oznake. Isto ce se desiti i sa "r1" redovima.
    

    - Zamena pozicija blokova:
        - [ code ] // # b[ visina bloka ]-[ oznaka bloka ]

            - "#": separator row/block randomizacija
            - "b": fiksna oznaka bloka ("block")
            - [ visina bloka ]: mora biti ceo broj. Dolazi nakon "b". Oznacava koliko je blok "visok". Npr: "b0" hvata samo jedan red koda dok "b3" hvata cetiri reda koda, pocevsi od reda u kojem se nalazi i racunajuci redove na dole. 
            - [ oznaka bloka ]: mora biti ceo broj. Dolazi nakon "-". Svaki broj oznacava tip bloka. Svi blokovi sa istim tipom su validni da zamene mesta sa drugim blokovima istog tipa ignorisuci ostale

        primer: 

                    var a = 1; // # b3-0
                    var b = 2; 
                    var c = 3; 
                    var d = 4; 
                    var e = 5; // # b1-0
                    var f = 6;
                    var g = 7; 
                    var h = 8; // # b0-1
                    var i = 9; // # b0-1
            
        Ovde ce blokovi koji imaju oznaku "-0" promeniti mesta nasumicno jedni sa drugima. Isto ce se desiti i sa blokovima koji imaju oznaku "-1".
        Blok "b3-0" hvata ukupno cetiri reda ukljucujuci red u kojem se nalazi i tri reda ispod njega.
        Blok "b1-0" hvata ukupno dva reda ukljucujuci red u kojem se nalazi i prvi red ispod njega.
        Blok "b0-1" hvata samo red u kojem se nalazi


    - Randomizacija if/else blokova:
        - [ code ] // # if[ visina bloka ]-[ oznaka bloka ]

            - "#": separator row/block randomizacija.
            - "if": fiksna oznaka if/else bloka
            - [ visina bloka ]: mora biti ceo broj. Dolazi nakon "if". Oznacava koliko je blok "visok". "if0" hvata samo jedan red koda. "if3" hvata cetiri reda koda, pocevsi od reda u kojem se nalazi i racunajuci redove na dole. 
            - [ oznaka bloka ]: mora biti ceo broj. Dolazi nakon "-". Svaki broj oznacava tip bloka. Svi blokovi sa istim tipom su validni da zamene mesta sa drugim blokovima istog tipa ignorisuci ostale. (Ne stavljati na "else" blok, jer on uvek mora biti poslednji kako bi kod bio validan.)

        primer: 

                    if (x === 0) { // # if1-0
                        return 1;
                    } if else (x === 1) { // # if2-0
                        x = x * 2;
                        return x;
                    } if else (x === 2) { // # if1-0
                        return 3;
                    } else {
                        return "x is too complex"
                    }

                    if (y === 0) { // # if1-1
                        return 1;
                    } if else (y === 1) { // # if2-1
                        y = y + 2;
                        return y;
                    } if else (y === 2) { // # if1-1
                        return 3;
                    } else {
                        return "y is too complex"
                    }
            
        Ovo je kompletna randomizacija if/else blokova. Blokovi sa tipom "-0" menjaju mesta samo sa blokovima istog tipa ignorisuci sve ostale. 
        Broj nakon "if" treba da uhvati sve redove ispod njega, koji su sastavni deo tog uslova, obicno do pojavljivanja sledeceg if/else uslova.
        U else blokove se ne stavlja oznaka kako bi else uvek bio poslednji blok, a kod validan.

        
    - Randomizacija return blokova:
        - [ code ] // # ret[ visina bloka ]-[ nestajanje ]-[ tip returna ]

            - "#": separator row/block randomizacija.
            - "ret": fiksna oznaka return randomizacije ("return")
            - [ visina bloka ]: mora biti ceo broj. Dolazi nakon "ret". Oznacava koliko je blok "visok". "ret0" hvata samo jedan red koda. "ret3" hvata cetiri reda koda, pocevsi od reda u kojem se nalazi i racunajuci redove na dole.
            - [ nestajanje ]: moze biti "y" ili "n". Oznacava da li je opcija da ceo return blok nestane. Ako stoji "y" moze se desiti da ceo return blok bude prazan string ("")
            - [ tip returna ]: moze biti "A", "O", "S", "N", "F", "B". Oznacava tip returna koji se povlaci iz predefinisane baze return vrednosti. "A"-array, "O"-object, "S"-string, "N"-number, "F"-function, "B"-boolean

        primer:

                    return { // # ret3-n-O
                            x: 1,
                            y: 2
                        };

        U ovom slucaju return hvata cetiri reda koda, ukljucujuci red u kome se nalazi, jer posle ret dolazi "3". 
        "-n": return nakon randomizacije nikada nece biti prazan.
        "-O": zato sto stoji "O" return ce se povuci iz predefinisane lista return objekata. 
        U mogucoj listi vracenih vrednosti nakon randomizacije ce se uvek naci i originalni blok koda. Sto je lista predefinisanih return objekata veca to je manja sansa da se originalni blok koda pojavi kao vracena vrednost.


* Custom code:

    - Zamena koda custom kodom:
        - [ code ] // ~ c--[ kod za menjanje ]--[ nestajanje ]-[ kod koji se ubacuje ]--

            - "~": separator custom koda
            - "c--": fiksna oznaka za custom code ("custom")
            - [ kod za menanje ]: doslovna kopija iz tog reda koji se hvata i menja
            - --[ nestajanje ]: moze biti "y" ili "n" oznacava da li je opcija da originalni kod ostane. "y" oznacava da je moguce da se nakon randomizacije zadrzi originalni kod dok ce "n" oznacavati da ce on uvek biti zamenjen
            - -[ kod koji se ubacuje ]--: sve izmedju "-" i "--" moze biti ubaceno umesto koda za menjanje.

        primer:

                    var x = 5; // ~ c--5--y-Math.sqrt(25)--

        umesto "5" u kodu se moze naci "Math.sqrt(25)". 
        "--y": postoji polovicna sansa da ce originalni kod ("5") biti zadrzan. Da stoji "n" kod bi uvek bio zamenjen
        "-Math.sqrt(25)--": kod koji se moze naci umesto uhvacenog koda ("5").