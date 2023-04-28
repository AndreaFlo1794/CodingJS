function max1020(a, b){

   if (10 <= a && a <= 20) { // if a is in range
            if (a >= b || b > 20) { // if a is greater than B or B is out of range
                return a;
            }
        }

        //
        if (10 <= b && b <= 20) { // if b is in range
            return b;
        }

        return 0;
    }
}