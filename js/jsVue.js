Vue.createApp({
    data () {
        return {
            goals: [],
            enteredValue: '',
            animes: [],
            animeValue: '',
            website: 'https://kachenas.wordpress.com',
            sampleA: '<h1>This is a sample data with html</h1>',
            counter: 0,
            colorValue: '',
            colors: [],
            num1: 0,
            num2: 0,
            sum: 0,
            name: '',
            surname: '',
            gender: '',
            confirmedGen: '',
            almonte: ''
           
        };
    },
    methods: {
        addGoal () {
            this.goals.push(this.enteredValue);
        },
        addAnime () {
            this.animes.push(this.animeValue);
        },
        computeAge () {
            return "i don't know";
        },
        add (num) {
            this.counter = this.counter + num;
        },
        remove (num) {
           this.counter = this.counter - num;
        },
        addColor () {
            this.colors.push(this.colorValue)
        },
        addNumbers () {
            this.sum = parseInt(this.num1) + parseInt(this.num2);
        },
        setName (event, lastname) {
            this.name = event.target.value + ' ' + lastname;
        },
        submitForm (event) {
            event.preventDefault(0);
            console.log('chester almonte');
        }

    }
}).mount('#app'); 