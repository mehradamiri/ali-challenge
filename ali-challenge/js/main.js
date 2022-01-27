const a = [1255 , 5424 ,47520 , 75852 ,8552 , 8452 ,54521 ,456241 ,857421, 874852 , 6 ] ;
function start() {
    let i = 0; 
    let m ;
    let n = a.length;
    let xx = 0;
    for (;i < n; i++) {
        m=a[i];
        if (xx < m){xx =m;}
    }
 console.log(xx);
}