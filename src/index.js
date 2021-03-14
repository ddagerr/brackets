module.exports = function check(str, bracketsConfig) {
    let counter=0
    let k=true
    let bracketsConfigModified=[]
    for (let i=0;i<bracketsConfig.length;i++){
         bracketsConfigModified[i]=(bracketsConfig[i].join(''))
       }
      
    for(let i=0;i<bracketsConfigModified.length;i+=2){
      if(bracketsConfigModified[i][0]!=bracketsConfigModified[i][1]){
      for (let j=0;j<str.split('').length;j++){   
          if (str.split('')[j]===bracketsConfigModified[i][0]) counter++
          else if (str.split('')[j]===bracketsConfigModified[i][1])counter--
        }
         if (counter!=0)  return false
         counter=0
   }
  }
 
    for(i=0;i<bracketsConfigModified.length;i++){
      if(str.includes(bracketsConfigModified[i])){
        str=str.replace(bracketsConfigModified[i],'')
        i=-1
      }
    }
    if(str.length===0) return true
    else return false
  
}




