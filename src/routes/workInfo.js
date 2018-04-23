import paramore from '../images/paramore.jpg';
import soren from '../images/soren.png';
import facemajik from '../images/facemajikbig.png';
import drawloop from '../images/DrawLoop.png';
import nation from '../images/nation.png';
import thera from '../images/thera.png';
import workStyle from './work.css';


const workInfo = [
    {
        id: "drawloop",
        title: "DrawLoop",
        description: "DrawLoop is a browser-based sound drawing application made with p5.js. It utilizes different draw types or 'tools' that have associated sounds with them. You can draw and create sound at the same time, modify or delete your drawing, and finally save the finished product to your desktop to share.",
        link: 'https://github.com/MKAVARTS/DrawLoop',
        pic: drawloop,

    },
    {
        id: "nation",
        title: "State of the Nation",
        description: "State of the Nation is my first experiment with react.js. Pressing the button on the page grabs the top 20 stories from the New York Times, which then get split into individual words, and delivered to the page in rapid succession. By seeing these words removed from a central context, one can get begin to get an idea of the climate of one of Americas most prominent media outlets.",
        link: 'https://github.com/MKAVARTS/reactStateOfTheNation',
        pic: nation,
    },
    {
        id: "thera",
        title: "Thera-3d",
        description: "Thera-3d is an experiment with webGL, and CSS. A catalog of futuristic 3D 'therapy' items float with their description of benefits & prices beneath them. A tongue in cheek way of expressing these basic 3D primitives as a highly desirable and novel object. ",
        link: 'https://github.com/MKAVARTS/product-cards',
        pic: thera,
    },

    {
        id: "paramore",
        title: "Paramore",
        description: 'Starting in 2017, I was hired to create content for Paramores live performances. I used ableton live, VDMX, and Max/MSP/Jitter to create visuals that are tightly synchronized, highly dynamic, and expressive of their music. I am currently designing visuals for their upcoming Tour 5 alongside lighting designers Cour Design.', 
        work1: "https://player.vimeo.com/video/252277626",
        link: 'http://www.paramore.net/?frontpage=true'

    },
    {
        id: "soren",
        title: "Soren Bryce",
        description: "Soren Bryce is a 21-year-old artist from NYC, who performs a unique brand of psuedo-electronic, dark, alt-pop music. I created visuals for live performance, and two music videos, one for 'Cellophane' and one for 'Houses with Ugly Wallpaper' from her latest release 'Disucssions with Myself'.",
        work1: "https://player.vimeo.com/video/265694812",
        work2: "https://www.youtube.com/embed/ENRJi2Y2gRw",
        link: 'http://sorenbryce.com/'
        
    },
    {
        id: "basecamp",
        title: "Basecamp",
        work1: "https://www.youtube.com/watch?v=ColAKCjjYaU",
        work2: "https://player.vimeo.com/video/205113973",
        work3: "https://www.youtube.com/embed/KymMeb70CQQ",
        description: "In 2016 I created visuals for Basecamp that were used as a part of a design coined 'Box 1.0'. The concept, created by Johnathan Kingsbury of Nashville, was a cube whose walls were custom LED fixtures, and were covered in a veil-like material that could be projected on, creating an immersive experience for the group live. Basecamp also used this design at TEDx Nashville in 2016",
        link : "http://owsla.com/artist/basecamp/",
    },
    {
        id: "facemajik",
        title: "Facemajik",
        description: "Facemajik is a live drums, synth and visual project by myself and Will Hicks. We have an intense, percussive, distortion oriented style. In 2016 we had the oppurtunity to open for the Flaming Lips in their home town of OKC. As our material progressed we embarked on creating a unique live performance setup. That idea manifested as a six-panel projection mapping surface that utilized a semi-circle design to immerse show-goers, and create a fragmented display as a single, continuous image. ",
        work1: "https://player.vimeo.com/video/235986358",
        work2: "https://vimeo.com/200018980",
        link: "https://www.facebook.com/facemajik/",
    },
    {
        id: "face",
        title: 'Your Face Here',
        description: "This installation which was a part of 'Jazz As Is', (Harry Kagan of Nashville's Solo Show) at Elephant Gallery in early 2018. Onlookers would be confronted with two cameras, and two monitors in front of them, with a sign that said 'Your Face Here.' When two people look into the cameras, their faces are displaced and rearranged, creating a collage of facial features that diverges and then rejoins periodically.",
        work1: "https://player.vimeo.com/video/265695194",
        link: "https://www.elephantgallery.com/",

    },
    {
        id: "action",
        title: "Action!",
        description: "Action! is an interactive camera installation and projection commissioned by Native Magazine for their 50 year tribute to The Velvet Underground at The Basement East in November 2017. The camera detected movement and would perform a colorful edge detection & block-y disortion that created a 'Pop Art' filter for anything standing in front of it. The installation gets its name from the idea that some type of action must be performed in order to engage the camera effect, as well as the idea that the effect creates a caricature of reality not unlike societys idea of celebrity." ,
        work1 : "https://player.vimeo.com/video/265768860",
        link: "http://native.is/"
    },
    {
        id: "chaos",
        title: "Consonance and Chaos",
        description: "Consonance and Chaos is a full-room installation comissioned by Concept 56 for their 6 month creative project 'Retrograde'. Retrograde premiered as a one night event of dozens of artists and performers in an abandoned sporting goods store in downtown Nashville. The installation consisted of 3 cameras, an extra wide stereo sound source, 25-foot projection, and 5-channel CRT video wall. The projection was a composite of the live camera feed, as well as a 30 second delay of the live camera feed, that would oscillate back and forth based on 10 minute audio loop of beating frequencies. Particpants were immersed in an atmosphere of past and present battling for their place in the consciousness of the viewer.", 
        work1: "https://player.vimeo.com/video/189278914",
        link: 'https://noblenashville.com/blog/2016/10/03/everything-need-know-huge-free-party-retrograde/'
    }
]

export default workInfo