function Grad(sNaziv, bStan, sLat, sLong)
{
    this.m_sNaziv = sNaziv;
    this.m_bStan = bStan;
    this.m_sLat = sLat;
    this.m_sLong = sLong;
}

var oVtc = new Grad("Virovitica", 14688, 45.8446292, 17.4031079);
var oSlt = new Grad("Slatina", 11524, 45.682671, 17.6363106);
var oBjv = new Grad("Bjelovar", 36433, 45.9062305, 16.7941252);
var oOsj = new Grad("Osijek", 96848, 45.5463104, 18.6188189);
var oZg = new Grad("Zagreb", 769944, 45.8401104, 15.8242477);

Grad.prototype.dajVelicinuGrada = function() 
{
    if(this.m_bStan < 30000)
    {
        return 1;
    }
    else if(this.m_bStan > 30000 && this.m_bStan < 200000)
    {
        return 2;
    }
    else
    {
        return 3;
    }
}

console.log(oVtc.dajVelicinuGrada());
console.log(oOsj.dajVelicinuGrada());
console.log(oZg.dajVelicinuGrada());

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function dajUdaljenost(sGr1, sGr2) 
{
    var R = 6371; // km
    var dLat = toRad(sGr2.m_sLat - sGr1.m_sLat);
    var dLon = toRad(sGr2.m_sLong - sGr1.m_sLong );
    var lat1 = toRad(sGr1.m_sLat);
    var lat2 = toRad(sGr2.m_sLat);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

console.log(dajUdaljenost(oVtc, oZg));