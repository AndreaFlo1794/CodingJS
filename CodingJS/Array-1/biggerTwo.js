function biggerTwo(a, b){
  if(a[0]+a[1] ===b[0]+b[1] ){
    return a}
  else if (a[0]+a[1] < b[0]+b[1]  ){
    return b }
  else if (b[0]+b[1] < a[0]+a[1]){
    return a}
   
}