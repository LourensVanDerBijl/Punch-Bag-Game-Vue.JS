new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false

    },
    methods: {
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        kick: function() {
            this.health -= 20;
            if (this.health <= 0) {
                this.ended = true;
            }
        },

        restart: function() {
            this.health = 100;
            this.ended = false;
        },

    },

    computed: {

    }
});

function end() {
    if (ended <= 0) {
        prompt("you have won")
    };
};