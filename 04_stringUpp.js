

 const str="How are you mate"
for(let i=0;i<str.length;i++)

  {

      if(i==0||i==(str.length-1))

      {

          str[i]=str[i].toUpperCase();

      }

      else if(str[i]==' ')

      {

          str[i-1]=(str[i-1]).toUpperCase();

          str[i+1]=(str[i+1]).toUpperCase();

      }


  }

 

  console.log(str);




 

 