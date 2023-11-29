// 1-misol

let m1a = 29;
let m1b = 54;
let m1o = (m1a / 10)-m1a % 10 / 10; // 2
let m1o2 = (m1b / 10)-m1b % 10 / 10; // 5
let m1max;

if (m1o > m1o2) {
    m1max=m1o;
}
else {
    m1max=m1o2;
}

console.log(m1max);

// 2-misol

let m2a = 263;
let m2b = m2a % 10;
let m2o = (m2a % 100) - m2b / 10; 
let m2y = (m2a / 100) - (m2a % 100) / 100;
let m2min;

if (m2b > m2o) {
    m2min=m2o;
}
else {
    m2min=m2b;
}

if (m2min > m2y){
    m2min=m2y
}

console.log(m2min);

// 3-misol

let m3a = 283;
// let m3b = m3a % 10;
let m3o = (m3a % 100/10) - (m3a % 10) / 10; 
let m3max;

if (m3o % 3 == 0) {
    m3max='rost';
}
else {
    m3max="yolg'on";
}

console.log(m3max);

// 4-misol

let m4a = 5;
let m4b = 3;
let m4c = 6;
let m4min;

if (m4a > m4b) {
    m4min=m4b;
} else {
     m4min=m4a;
}

if (m4min > m4c) {
    m4min=m4c;
}

console.log(m4min**3);

// 5-misol

let m5a = 6;
let m5b = 5;
let m5c = 7;
let m5d = 1;
let m5min;
let m5max;
let m5big

if (m5a > m5b) {
    m5max =  m5a;
}
else {
    m5max= m5b;
}

if (m5c > m5d) {
    m5min =  m5c;
}
else {
    m5min= m5d;
}

if (m5max > m5min) {
    m5big = m5max;
} else {m5big = m5min;}

console.log (m5big)

// 6-misol

let m6a = 4;
let m6b = 8;
let m6c = 6;
let m6norm;

if (m6a > m6b) {
    m6norm = m6b;
}
else {
    m6norm = m6a;
}

if (m6norm < m6c) {
    m6norm = m6c;
}

console.log(m6norm);

// 7-misol

let m7a = 4;
let m7b = 8;
let m7c = 6;
let m7big;
let m7big2;
let m7max;

if (m7a > m7b){
    m7big = m7a;
    m7max = m7a;
}

else {
    m7big = m7b;
    m7max = m7b;
}

if (m7big < m7c) {
    m7big = m7c;
}

// if (m7max < m7c) {
//     m7big2 = m7c;
// }

// m7plus = m7big2 + m7big

console.log(m7big);

// 8-misol

let m8a = 6;
let m8b = 7;
let m8c = 9;
let m8d = 1;
let m8e = 3;

let m8a0;
let m8b0;
let m8c0;
let m8d0;
let m8e0;

if (m8a % 3 == 0) {
    m8a0 = m8a;
}
else {
    m8a0 = " ";
}

if (m8b % 3 == 0) {
    m8b0 = m8b;
}
else {
    m8b0 = " ";
}

if (m8c % 3 == 0) {
    m8c0 = m8c
}
else {
    m8c0 = " ";
}

if (m8d % 3 == 0) {
    m8d0 = m8d;
}
else {
    m8d0 = " ";
}

if (m8e % 3 == 0) {
    m8e0 = m8e;
}
else {
    m8e0 = " ";
}

console.log(m8a0);
console.log(m8b0);
console.log(m8c0);
console.log(m8d0);
console.log(m8e0);

// 9-misol

let m9a = 4;
let m9b = 5;
let m9c = 9;
let m9d = 1;

let m9a0;
let m9b0;
let m9c0;
let m9d0;

if (m9a % 3 == 0 || m9a % 5 == 0) {
    m9a0 = m9a;
}
else {
    m9a0 = " ";
}

if (m9b % 3 == 0 || m9b % 5 == 0) {
    m9b0 = m9b;
}
else {
    m9b0 = " ";
}

if (m9c % 3 == 0 || m9c % 5 == 0) {
    m9c0 = m9c;
}
else {
    m9c0 = " ";
}

if (m9d % 3 == 0 || m9d % 5 == 0) {
    m9d0 = m9d;
}
else {
    m9d0 = " ";
}

console.log(m9a0);
console.log(m9b0);
console.log(m9c0);
console.log(m9d0);

// 10-misol

let m10a = 0;
let m10b = 5;
let m10c = 9;

let maxsum;

if (m10a != 0) {
    m10a = m10a;
}
else {m10a = 0}

if (m10b != 0) {
    m10b = m10b; 
}
else {m10b = 0}

if (m10c != 0) {
    m10bc= m10c; 
}
else {m10c = 0}

maxsum = m10a + m10b + m10c;
console.log(maxsum);

// 11-misol

let m11a = 312;
let m11b = m11a % 10;
let m11o = (m11a % 100 / 10) - m11b / 10; 
let m11y = (m11a / 100) - (m11a % 100) / 100;

let max;

if (m11b % 2 == 0) {
    m11b = m11b;
} else {m11b = 1}

if (m11o % 2 == 0) {
    m11o = m11b;
} else {m11o = 1}

if (m11y % 2 == 0) {
    m11y = m11y;
} else {m11y = 1}

max = m11b * m11o * m11y
if (max == 1) {
    max=0;
}
console.log(max);

// 12-misol 

let m12a = 5;
let m12b = -4;
let m12c = 2;
let arif;
let error;


if (m12a > 0) {
    m12a = m12a;
} else {m12a=0}

if (m12b > 0) {
    m12b = m12b;
} else {m12b=0}

if (m12c > 0) {
    m12c = m12c;
} else {m12c=0}

arif = (m12a + m12b + m12c);
error = arif / 3;
console.log(error);