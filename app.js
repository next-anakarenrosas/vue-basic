new Vue({
  el: '#app',

  data() {
    return {
     name: 'Bitcoin',
     symbol: 'BTC',
     img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
     color: 'f4f4f4',
     changePercent: 10,
     value: 0,
     price: 4567,
     pricesWithDays: [
       {day: 'Lunes', value: 1234},
       {day: 'Martes', value: 2345},
       {day: 'Miercoles', value: 3456},
       {day: 'Jueves', value: 4567},
       {day: 'Viernes', value: 5678},
       {day: 'Sabado', value: 6789},
       {day: 'Domingo', value: 7890}
    ],
    showPrices: false
    }
  },
  computed:{
    title(){
      return `${this.name} - ${this.symbol}`
    },
    convertedValue(){
      if(!this.value){ return 0 }
      return this.value / this.price
    }
  },
  watch:{
    showPrices(newVal, oldVal){
      console.log('cambia', newVal);
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('')
    }
  }
})