var str = "Caleb Duke";
var res = str.toLocaleUpperCase();

function displayPosition() {
    console.log("Name: " + res);
    console.log("Career: " + jt);
    console.log("Description: " + des);
}

var jt = "Web Developer";

var des = "I like eatin foods";

displayPosition()

console.log('Food', 'Music', 'Nicki Rakestraw');

console.log(
"* Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.\n",
"* Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.\n",
"* Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.");

// var skills = {
//    a: "French",
//    b: "BAM: Trombone",
//    c: "Java",
//    d: "C / C++",
//    e: "BAM: Objective-C / Swift",
// }

    function displaySkill(skill, isCool){
        if (isCool == true){
            console.log("* BAM: " + skill)
        } else {
            console.log("* " + skill)
        }
    }
    console.log("My Skills:")
    
    displaySkill("French", false)
    displaySkill("Trombone", true)
    displaySkill("Java", false)
    displaySkill("C / C++", false)
    displaySkill("Objective-C / Swift", true)