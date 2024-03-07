//soma de matrizes
function exibeMultiplicacao()
{
    var matriza = [[ 1 , 2 ],
                   [ 3 , 4 ]]
            
    var matrizb = [[ 2 , 6 ],
                   [ -1 , 0 ]]

for(let lin=0 ; lin<2 ; lin++)
    {
        for(let col=0; col<2 ; col++)
        {
        
            let x = 0
            for( let aux=0 ; aux<2 ; aux++) 
            {
                x += matriza[lin][aux] * matrizb[aux][col]
            }
            document.write (x + " ")
        }    
        document.write("<br />")
    }
}