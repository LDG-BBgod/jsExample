'use strict';
const sentences = [
    {subject: 'js', verv: 'is', object: 'great'},
    {subject: 'ep', verv: 'are', object: 'large'},
];

function say({ subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences) {
        say(s);
}
