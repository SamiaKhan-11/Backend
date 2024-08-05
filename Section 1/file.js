// function primenum(start, end) {
//     let ctr = 0;
//     for (let i = start; i < end; i++) {

//         if (i == 1 || i == 0)
//             continue;
//         flag = 1;

//         for (j = 2; j <= i / 2; ++j) {
//             if (i % j == 0) {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag == 1)
//             console.log(i," ");
//     }
// }
// primenum(1,10);
function primenum(start, end) {
    // let ctr = 0;
    for (let i = start; i <= end; i++) {
       var flag =0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                // ctr++;
                flag=1;
                break;
            }
        }


        if (flag==0) {
            console.log(i);

        }


    }
}
const res4 = primenum(10, 20);