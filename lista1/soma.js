//soma de matrizes
function exibeSoma(){
    var matrizA = [[ 1 , 2 , 3 ],
                   [ 4 , 5 , 6 ],
                   [ 7 , 8 , 9 ]];

    var matrizB = [[ 1 , 0 , 2 ],
                   [ 4 , -3 ,6 ],
                   [ 7 , 8 , 10 ]];
        
    for(let lin=0; lin < 3; lin++)
    {
        for(let col=0; col<3; col++)
            document.write((matrizA[lin][col] + matrizB[lin][col] + "  "))
        
        document.write("<br />");
    }
}