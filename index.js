function getGrade (s1, s2, s3) {
    const arithmeticValue = (s1 + s2 + s3) / 3

    if (arithmeticValue >= 90 && arithmeticValue <= 100) {
        return 'A'
    } else if (arithmeticValue >= 80 && arithmeticValue < 90) {
        return 'B' 
    } else if (arithmeticValue >= 70 && arithmeticValue < 80) {
        return 'C'
    } else if (arithmeticValue >= 60 && arithmeticValue < 70) {
        return 'D'
    } else {
        return 'F'
    }
}