// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/*
MODE TAILLE DE CODE
Il faut passer le plus de tests avec le code le plus court.

A Fibonacci sequence starts with two given terms and each subsequent term is the sum of the previous two terms.

You must output a specific term of a Fibonacci sequence given its first two terms.

Entrée

Line 1: An integer A for the first term of the sequence.
Line 2: An integer B for the second term of the sequence.
Line 3: An integer N

Sortie

Line 1: A single line containing the (zero-indexed) Nth term of the sequence.

Contraintes

-100 ≤ A ≤ 100
-100 ≤ B ≤ 100
0 ≤ N ≤ 20

Exemple

Entrée

2
3
4

Sortie

13
====================
Entrée

24
17
11

Sortie

2833
====================
Entrée

-23
34
13

Sortie

4610
====================
Entrée

-12
9
0

Sortie

-12
====================

*/

//const A = 2;
//const B = 3;
//const N = 4;
/////////
//const A = 24;
//const B = 17;
//const N = 11;
/////////
const A = -23;
const B = 34;
const N = 13;
/////////
//const A = -12;
//const B = 9;
//const N = 0;
const fSeq = [A, B];
for (let i = 2; i <= N; i++) {
  fSeq.push(fSeq[i - 2] + fSeq[i - 1]);
}
console.log(fSeq[N]);
