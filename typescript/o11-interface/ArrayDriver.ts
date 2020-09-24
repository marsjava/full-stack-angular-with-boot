import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();
let myCoach: Coach[] = [];
myCoach.push(myCricketCoach);
myCoach.push(myGolfCoach);
for(let coachIns of myCoach) {
    console.log(coachIns.getDailyWorkout());
}