// Description:
//     Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
    return 180 * (n - 2)
}

console.log(angle(3))

//Цифра «180» – это сумма углов треугольника, а n-2 – это число треугольников, на которые можно разбить многоугольник. Таким образом, формула вычисляет сумму углов треугольников, на которые можно разбить многоугольник