var cat = {
        tiredness: 20,
        hunger: 20,
        loneliness: 3,
        happiness: 15,
        obedientness: -5000,
        feed: function(){
            console.log("Om nom nom");
            this.hunger = self.hunger - 5;
        },
        sleep: function(){
            console.log("Sleeping");
            this.tiredness = self.tiredness -5;
        },
        friends: function(){
            console.log("fraaaaaanz!!!!");
            this.loneliness = self.loneliness - 2;
        },
        isolation: function(){
            console.log("can haz friends plz");
            this.loneliness = self.loneliness + 6;
        },
        status: function(){
            console.log("tiredness" + self.tiredness);
            console.log("hunger" + self.hunger);
            console.log("loneliness" + self.loneliness);
            console.log("hapiness" + self.happiness);
            console.log("obedientness" + self.obedientness);
        }
};