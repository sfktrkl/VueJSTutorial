// Create a Vue instance
// It is controlling the a part (or all) of the application.
// Each components in the app can be controlled by a different vue instance.
new Vue({
    // Which element of the page will be controlled by this instance
    el: '#vue-app',
    // This is where we store all data for this instance
    data: {
        // Vue Instance
        name: 'VueJS Tutorial',

        // Data & Methods
        firstTitle: 'Data & Methods',
        time: 'Night',

        // Data Binding
        link: 'https://github.com/sfktrkl',
        sfktrkl: 'SfkTRKL',
        rawHTML: '<a href="https://github.com/sfktrkl">SfkTRKL GitHub</a>',

        // Events
        age: 25,
        coord: [0, 0],

        // Event Modifiers
        text: 'a',

        // Two-Way Data Binding
        boundName: '',

        // Computed Properties
        addedAge: 20,
        a: 0,
        b: 0,
        c: 0,

        // Dynamic CSS
        available: false,
        nearby: false,

        // Conditionals
        error: false,
        success: false,
        warning: false,

        // Loops
        characters: ['A', 'B', 'C'],
        objects: [
            { name: 'A', age: 20 },
            { name: 'B', age: 30 },
            { name: 'C', age: 40 },
        ],

        // Punchbag game
        health: 100,
        ended: false,
    },
    methods: {
        // Data & Methods
        gMorning: function () {
            return 'Good Morning';
        },
        gTime: function (time) {
            return 'Good ' + time;
        },
        gNight: function () {
            // Properties can also be accessed inside the methods
            return 'Good ' + this.time;
        },

        // Events
        addAge: function () {
            this.age += 1;
        },
        updateAge: function(value) {
            this.age += value;
        },
        // When an event is performed, 'event' object already passed
        updateCoord: function (event) {
            this.coord = [event.offsetX, event.offsetY];
        },

        // Event Modifiers
        addCharacter: function () {
            this.text += 'a';
        },
        linkClick: function () {
            alert('@click.prevent="linkClick"');
        },

        // Keyboard Events
        logName: function () {
            console.log('entered name');
        },
        logAge: function () {
            console.log('entered age');
        },

        // Computed Properties
        addToA: function () {
            // Create a log to see when methods are called.
            console.log('addToA');
            return this.addedAge + this.a;
        },
        addToB: function () {
            console.log('addToB');
            return this.addedAge + this.b;
        },

        // Punchbag game
        punch: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        },
    },
    computed: {
        // Computed Properties
        addToC: function () {
            console.log('addToC');
            return this.addedAge + this.c;
        },

        // Dynamic CSS
        compClasses: function () {
            return { available: this.available, nearby: this.nearby }
        },
    }
})