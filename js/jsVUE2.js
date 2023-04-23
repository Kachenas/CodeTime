Vue.createApp({
    data () {
        return {
            txnDate: '',
            product: '',
            price: '',
            quantity: '',
            soldTo: '',
            discount: '',
            discountTotalSum: '',
            differenceAmount: '',
            signature: '',
            confirmSignature: '',
            color: '',
            gender: ''
        };
    },
    computed: {
        jobhired () {
            return "I am hired as a font end developer";
        }
    },
    methods: {
        computeTotal () {
            return (Number(this.price)*Number(this.quantity)).toFixed(2);
        },
        discountTotal () {
            const sum = Number(this.price) * Number(this.quantity);
            this.discountTotalSum = (Number(sum) * (100 - Number(this.discount)) / 100).toFixed(2);
            this.differenceAmount = (sum - this.discountTotalSum).toFixed(2);
        },
        signBy (event, lastname) {
            this.signature = event.target.value + ' ' + lastname;
        },
        confirmSignatureSign () {
            this.confirmSignature = this.signature;
        },
        resetInput () {
            this.color = '';
        },
        colorFunc (event) {
            this.color = event.target.value;
        },
        getGender () {
            if (this.gender == '') {
                return " ";
            } else if (this.gender == 'male') {
                return "You are handsome";
            } else if (this.gender == 'female') {
                return "You are beautifull";
            }
        }

    }
}).mount('#app'); 