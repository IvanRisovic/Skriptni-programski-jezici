function Printer(sNivo, sDvostranoIspisvanje)
{
    if(sNivo >= 0 && sNivo <= 100) this.m_sNivo = sNivo;
    this.m_DvIsp = sDvostranoIspisvanje;
    this.brStranica = 0;
}

var Samsung_M283x = new Printer(100, true);
var Epson_Sx105 = new Printer(50, false);
var Cannon_Pixma = new Printer(0, true);
var HP_Smart_tank_500 = new Printer(57, false);

Printer.prototype.dodajBoju = function(x)
{
    if(x < 100)
    {
        this.m_sNivo = (100 - x) + x;
    }
}

//Cannon_Pixma.dodajBoju(80);
//console.log(Cannon_Pixma.m_sNivo);

Printer.prototype.printaj = function(x)
{ 
    var i = 0;
    while(this.m_sNivo > 0 && i < x)
    {
        this.m_sNivo -= 0.1;
        i++;
    } 
    if(this.m_sNivo == 0 || x == 0)
    {
        console.log("Greska.");
    }     
    if(this.m_DvIsp)
    {        
        var sum = parseInt(i/2);
        if(i % 2 == 1)
        {
            sum++;
        }
        this.brStranica += sum;   
        
    } 
    else
    {
        this.brStranica += i;
    }
}

Epson_Sx105.printaj(505);
console.log(Epson_Sx105.m_sNivo);
console.log(Epson_Sx105.brStranica);

Printer.prototype.ukStranica = function()
{
    console.log(this.brStranica);
}

Printer.prototype.nivoTonera = function()
{
    console.log(this.m_sNivo);
}

Epson_Sx105.nivoTonera();
Epson_Sx105.ukStranica();
Samsung_M283x.ukStranica();
Samsung_M283x.nivoTonera();
Epson_Sx105.nivoTonera();
Cannon_Pixma.nivoTonera();