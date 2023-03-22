function blackjack(a, b){
 if (a > 21 && b > 21){
return 0;
}

if (a <= 21){
if (b > 21){
return a;
}
if (a > b){
return a;
}
}
return b;
}