// using bindmethod

function mul (x , y){
    console.log(x * y);
}

const mulBy2 = mul.bind(this,2);
mulBy2( 6 )

const mulBy4 = mul.bind(this,4);
mulBy4( 6 )

// using closures

function mulUsingClosures( x) {
    return function (y) {
        console.log(x*y);
    }
}
let mul2UsingClosures = mulUsingClosures( 2 )
mul2UsingClosures( 8 );

let mul5UsingClosures = mulUsingClosures( 5 )
mul5UsingClosures( 2 );