let jsPatterns = [
    {
        string: `
        var x, y;
        if (true) { // # if2-0 b13-0 ~ c--true--n-Math.sqrt(25)--
            var x = 1;
            var y = 2;
        } else if (false) { // # if3-0
            var x = 1;
            var y = 2;
            var z = 3;
        } else if (1) { // # if3-0
            var xxx = 1;
            var yyy = 2;
            var zzz = 3;
        } else {
            console.log("x");
        }
        if (true) { // # if2-1 b13-0 ~ c--true--n-Math.sqrt(25)--
            x = 1; // var # p0
            y = 2; // var # p0
        } else if (false) { // # if3-1
            var x = 1;
            var y = 2;
            var z = 3;
        } else if (1) { // # if3-1
            var xxx = 1;
            var yyy = 2;
            var zzz = 3;
        } else {
            console.log("y");
        }
        `
    },
    {
        string: `
        var niz=[2,9,15,23]; // []
        var niz2=[000,000,000,000]; // []
        var x = 000;
        var y = 000;
        console.log(niz);
        `
    },
    {
        string: `
    var a=5; // # r0
    var b=7;
    var c=9; // # r0
    console.log('ovo je 5','555'); // ~ c--555--n-Math.sqrt(25)--
        `
    },
    {
        string: `
    function meni(poruka) {
        if (!poruka) {
            poruka = "Dobro došli";
        }
        var odgovor = prompt(poruka + "\\nIzaberite broj iz menija da biste nastavili:\\n" +
            "0 - da se vratite na početak\\n" + // # r0
            "1 - promeni boju pozadine\\n" + // # r0
            "2 - vrati random broj\\n" + // # r0
            "3 - izlaz\\n" // 
        );
        if (odgovor == 0) { // # if1-0
            meni();
        } else if (odgovor == 1) { // # if6-0
            var boje = ['red', 'green', 'blue', 'yellow', 'olive'];
            var randomBoja = boje[Math.floor(Math.random() * boje.length)];// ~ c--boje.length--y-boje.length - 1--
            document.body.style.background = randomBoja;
            var kodZaZbunjivanje;
            kodZaZbunjivanje *= 7;
            meni("Boja pozadine promenjena u: " + randomBoja);
        } else if (odgovor == 2) { // # if1-0
            meni("Random broj: " + Math.floor(Math.random() * 100));
        } else if (odgovor == 3) { // # if1-0
            console.log("Izlaz");
        } else {
            meni("Izabrali ste pogrešan unos!!!");
        }
    }
    
    meni();
        `
    },
    {
        string: `
    var lorem = 7;
    var ipsum = 100;
    var dolor= (function() {
        lorem = 4;
        ipsum = 5;
        console.log("lorem", lorem, "ipsum", ipsum);
        var rubor=sit()[0]();
        console.log("lorem", lorem, "ipsum", ipsum);
        function sit() {
            lorem = 6; // var
            ipsum = 12;
            console.log("lorem", lorem, "ipsum", ipsum);
            return [function() { // # ret4-n-A
                var lorem = 9;
                var ipsum = 8;
                console.log("lorem", lorem, "ipsum", ipsum);
            }];
        }
    
        return sit();
    })();
        `,
        vars: ["a", "b", "c", "d", "e"]
    }
];

let testString = {x:2, y:2, z: `asdasd`};

console.log(testString);