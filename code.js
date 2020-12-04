 /*
 / Cette fonction est appelée afin de stocker des données qui ne sont pas utilisables directemment.
*/
function coding(st) {
  res = "";
  for (let i = 0; i < st.length; i++) 
  {
    res = res + st.charCodeAt(i)+"\\";
  }
  return res;
}

 /*
 / Cette fonction est appelée afin de fournir une chaîne exploitable à partir d'une chaîne codée.
*/
function decoding(st) {
  res = "";
  for (let i = 0; i < st.split('\\').length; i++) {
    res = res + String.fromCharCode(parseInt(String(st.split('\\')[i]), 10));
  }
  return res;
}  
