//while
while (i < 10) {
    text += "The number is " + i;
    i++;
}

//doWhile
do {
    text += "The number is " + i;
    i++;
}
while (i < 10);

//forWhile
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

for (;cars[i];) {
    text += cars[i];
    i++;
}