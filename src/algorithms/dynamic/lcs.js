
function lcs (str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  let mapArr = [];

  for(let i=0; i<len1+1; i++){
    mapArr[i] = [];
    for(let j=0; j<len2+1; j++){
      mapArr[i][j] = 0;
    }
  }

  // console.log(mapArr)

  let max = 0;
  let index=0;

  for(let i=0; i<len1; i++){
    for(let j=0; j<len2; j++){
      if(str1.charAt(i) === str2.charAt(j)){
        let preValue = (mapArr[i-1] && mapArr[i-1][j-1]) ? mapArr[i-1][j-1] : 0;
        mapArr[i][j] = preValue + 1;

        if(mapArr[i][j] > max){
          max = mapArr[i][j];
          index = i;
        }

      }else{
        mapArr[i][j] = 0;
      }
    }
  }

  let str = '';

  for(let i=index+1-max; i<=index; i++){
    str+=str1.charAt(i)
  }

  console.log(max, index);
  console.log(str);

  return str;
}

lcs('abbccd', 'dabbccef');