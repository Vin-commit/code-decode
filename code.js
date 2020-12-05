 /*
 / Transforme les données afin qu'elles ne soient pas utilisables directement.
*/
function coding(st) 
{
  res = "";
  for (let i = 0; i < st.length; i++) 
  {
    res = res + st.charCodeAt(i)+"\\";
  }
  return res;
}

 /*
 / Fournit une chaîne utilisable à partir d'une chaîne de données transformées par la fonction ci-dessus.
*/
function decoding(st) 
{
  res = "";
  for (let i = 0; i < st.split('\\').length; i++) 
  {
    res = res + String.fromCharCode(parseInt(st.split('\\')[i], 10));
  }
  return res;
}  
