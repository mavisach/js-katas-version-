const mainElement = document.querySelector('main')

const kata1heading = document.createElement('h1')
mainElement.append(kata1heading)
kata1heading.append('kata1')
let counter1 = 1
let limit = 20
const kata1Result = document.createElement('h2')
while (counter1 <= limit) {
    kata1Result.append(counter1)
    mainElement.append(kata1Result)

    counter1 += 1

}


const kata2heading = document.createElement('h1')
mainElement.append(kata2heading)
kata2heading.append('kata2')
let counter2 = 2
const kata2Result = document.createElement('h2')
while (counter2 <= 20) {
    kata2Result.append(counter2)
    mainElement.append(kata2Result)

    counter2 += 2
}

const kata3heading = document.createElement('h1')
mainElement.append(kata3heading)
kata3heading.append('kata3')
let counter3 = 1
const kata3Result = document.createElement('h2')
while (counter3 <= 19) {
    kata3Result.append(counter3)
    mainElement.append(kata3Result)

    counter3 += 1
}


const kata4heading = document.createElement('h1')
mainElement.append(kata4heading)
kata4heading.append('kata4')
let counter4 = 5
const kata4Result = document.createElement('h2')
while (counter4 <= 100) {
    kata4Result.append(counter4)
    mainElement.append(kata4Result)

    counter4 += 5
}

const kata5heading = document.createElement('h1')
mainElement.append(kata5heading)
kata5heading.append('kata5')
let counter5 = 1
const kata5Result = document.createElement('h2')
// let counter5 = 1
while (counter5 <= 100) {
    const isSquare = Number.isInteger(Math.sqrt(counter5));
    kata5Result.append(counter5)
    mainElement.append(kata5Result)
    if (isSquare) {


    }

    counter5 += 1
}

const kata6heading = document.createElement('h1')
mainElement.append(kata6heading)
kata6heading.append('kata6')
let counter6 = 20
const kata6Result = document.createElement('h2')
while (counter6 >= 1) {
    kata6Result.append(counter6)
    mainElement.append(kata6Result)

    counter6 -= 1
}

const kata7heading = document.createElement('h1')
mainElement.append(kata7heading)
kata7heading.append('kata7')
let counter7 = 20
const kata7Result = document.createElement('h2')
while (counter7 >= 2) {
    kata7Result.append(counter7)
    mainElement.append(kata7Result)
    counter7 -= 2
}

const kata8heading = document.createElement('h1')
mainElement.append(kata8heading)
kata8heading.append('kata8')
let counter8 = 19
const kata8Result = document.createElement('h2')
while (counter8 >= 1) {
    kata8Result.append(counter8)
    mainElement.append(kata8Result)
    counter8 -= 1
}

const kata9heading = document.createElement('h1')
mainElement.append(kata9heading)
kata9heading.append('kata9')
let counter9 = 100
const kata9Result = document.createElement('h2')
while (counter9 >= 5) {
    kata9Result.append(counter9 + (' '))
    mainElement.append(kata9Result)
    counter9 -= 5
}

const kata10heading = document.createElement('h1')
kata10heading.append('kata10')
mainElement.append(kata10heading)
let counter10 = 10
const kata10Result = document.createElement('h2')
while (counter10 >= 1) {
    kata10Result.append(counter10 + (' '))
    mainElement.append(kata10Result)

    counter10 -= 1

}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

const kata11heading = document.createElement('h1')
mainElement.append(kata11heading)
kata11heading.append('kata11')
const kata11Result = document.createElement('h2')
for (let index = 0; index < sampleArray.length; index++) {
    kata11Result.append(sampleArray[index] + (' '))
    mainElement.append(kata11Result)

}

const kata12heading = document.createElement('h1')
mainElement.append(kata12heading)
kata12heading.append('kata12')
const kata12Result = document.createElement('h2')
for (let index = 0; index < sampleArray.length; index++) {
    if (sampleArray[index] % 2 == 0) {
        kata12Result.append(sampleArray[index] + (' '))
        mainElement.append(kata12Result)


    }

}

const kata13heading = document.createElement('h1')
mainElement.append(kata13heading)
kata13heading.append('kata13')
const kata13Result = document.createElement('h2')

const kata14heading = document.createElement('h1')
mainElement.append(kata14heading)
kata14heading.append('kata14')
const kata14Result = document.createElement('h2')

const kata15heading = document.createElement('h1')
mainElement.append(kata15heading)
kata15heading.append('kata15')


const kata16heading = document.createElement('h1')
mainElement.append(kata10heading)
kata16heading.append('kata16')
const kata16Result = document.createElement('h2')

const kata17heading = document.createElement('h1')
mainElement.append(kata17heading)
kata17heading.append('kata17')
const kata17Result = document.createElement('h2')

const kata18heading = document.createElement('h1')
mainElement.append(kata18heading)
kata18heading.append('kata18')
const kata18Result = document.createElement('h2')


// citation; Barbara Workman, Michael Vitollo