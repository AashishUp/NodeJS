function CeltoFahr (celcius){
    return (celcius * 9/5) + 32;
}

const kmtomiles =(km) => km*0.6213712;
module.exports = {CeltoFahr, kmtomiles};