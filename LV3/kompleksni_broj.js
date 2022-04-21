function KompBroj(sRez, sImz)
{
    this.m_sRez = sRez;
    this.m_sImz = sImz;
}

var oBr1 = new KompBroj(1, 1);
var oBr2 = new KompBroj(1, 1);
var oBr3 = new KompBroj(1, 3);
var oBr4 = new KompBroj(5, 5);
var oBr5 = new KompBroj(4, 9);

var _kb = {
    ispisiKompleksniBroj: function(x)
    {
        return x.m_sRez + " + " + x.m_sImz + "i";
    },

    zbroji: function(x,y)
    {
        var r = x.m_sRez + y.m_sRez;
        var i = x.m_sImz + y.m_sImz;
        var z = new KompBroj(r, i);
        console.log(this.ispisiKompleksniBroj(z));
        return z;
    },
    // z1⋅z2=x1⋅x2−y1⋅y2+(x1⋅y2+x2⋅y1)i
    pomnozi: function(x, y)
    {
        var r = x.m_sRez * y.m_sRez - x.m_sImz * y.m_sImz;
        var i = x.m_sRez * y.m_sImz + x.m_sImz * y.m_sRez;
        var z = new KompBroj(r, i);
        console.log(this.ispisiKompleksniBroj(z));
        return z;
    }
}

// console.log(_kb.ispisiKompleksniBroj(oBr1));
// console.log(_kb.ispisiKompleksniBroj(oBr2));
// console.log(_kb.ispisiKompleksniBroj(oBr3));
// console.log(_kb.ispisiKompleksniBroj(oBr4));
// console.log(_kb.ispisiKompleksniBroj(oBr5));

// _kb.zbroji(oBr1, oBr2);
// _kb.pomnozi(oBr1, oBr2);

$('#btn').click(function()
{
    var a = parseInt($('#r').val());
    var b = parseInt($('#i').val());
    var c = parseInt($('#rd').val());
    var d = parseInt($('#im').val());

    var oBr1 = new KompBroj(a, b);
    var oBr2 = new KompBroj(c, d);

    var rez;

    if($("#opt :selected").val()=="zbroji")
    {
        rez = _kb.zbroji(oBr1, oBr2); 
    }
    else
    {
        rez = _kb.pomnozi(oBr1, oBr2);
    }

    $('#ro').val(rez.m_sRez);
    $('#io').val(rez.m_sImz);
   
});

