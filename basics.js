/*

basics.js

includes basic functionality for some stuff. 


0.0.5 - stream works every minute

*/




// Add Round functionality

function round(value)
{
    value = +value;
    if (isNan(value))
    {
        return NaN;
    }
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + 2): 2)));
    value = value.toString().split('e');
   
}

