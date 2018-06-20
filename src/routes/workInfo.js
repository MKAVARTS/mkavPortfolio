import paramore from '../images/paramore.jpg';
import soren from '../images/soren.png';
import facemajik from '../images/facemajikbig.png';
import drawloop from '../images/drawloop.png';
import nation from '../images/nation.png';
import thera from '../images/thera.png';
import yourFace from '../images/yourface1.JPG';
import basecamp from '../images/basecamp.jpg';
import chaos from '../images/chaos.png';
import elTopo from '../images/elTopo.jpg';
import workStyle from './work.css';
import action from '../images/action.png';



const workInfo = [
    {
        id: "paramore",
        type: "live",
        title: "Paramore",
        description: 'Starting in 2017, I was hired to create content for Paramores live performances. I used ableton live, VDMX, and Max/MSP/Jitter to create visuals that are tightly synchronized, highly dynamic, and expressive of their music. I am currently designing visuals for their upcoming Tour 5 alongside lighting designers Cour Design.', 
        work1: "https://player.vimeo.com/video/252277626",
        work2: null,
        work3: null,
        link1:'http://plsn.com/articles/cover-story-current-issue/paramore-2017-after-laughter-tour/',
        linkDescription1: ' - Paramore 2017 Design',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: paramore

    },

    {
        id: "nation",
        type: "web",
        title: "State of the Nation",
        description: "State of the Nation is my first experiment with react.js. Pressing the button on the page grabs the top 20 stories from the New York Times, which then get split into individual words, and delivered to the page in rapid succession. By seeing these words removed from a central context, one can get begin to get an idea of the climate of one of Americas most prominent media outlets.",
        work1: null,
        work2: null,
        work3: null,
        link1: 'https://mkavarts.github.io/reactStateOfTheNation/',
        linkDescription1: '- Deployed application',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: nation,
    },
    {
        id: "elTopo",
        type: "web",
        title: "El Topo",
        description: "This is a website built with React.js and p5.js that features 3 tracks by dark electronic, production duo El Topo and an accompanying visual for each track",
        work1 : null,
        work2 : null,
        work3 : null,
        link1: 'https://mkavarts.github.io/elTopo/',
        linkDescription1 : '- Deployed website',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: elTopo,
    },
    {
        id: "drawloop",
        type: "web",
        title: "DrawLoop",
        description: "DrawLoop is a browser-based sound drawing application made with p5.js. It utilizes different draw types or 'tools' that have associated sounds with them. You can draw and create sound at the same time, modify or delete your drawing, and finally save the finished product to your desktop to share.",
        work1 : null,
        work2 : null,
        work3 : null,
        link1: 'https://github.com/MKAVARTS/DrawLoop',
        linkDescription1: '- DrawLoop gitHub rep' ,
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: drawloop,

    },

    {
        id: "soren",
        type: "live",
        title: "Soren Bryce",
        description: "Soren Bryce is a 21-year-old artist from NYC, who performs a unique brand of psuedo-electronic, dark, alt-pop music. I created visuals for live performance, and two music videos, one for 'Cellophane' and one for 'Houses with Ugly Wallpaper' from her latest release 'Disucssions with Myself'.",
        work1: "https://player.vimeo.com/video/265694812",
        work2: "https://www.youtube.com/embed/ENRJi2Y2gRw",
        work3: null,
        link1: 'http://sorenbryce.com/',
        linkDescription1: '- Soren Bryce Website' ,
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: soren
        
    },
    {
        id: "chaos",
        type: "install",
        title: "Consonance and Chaos",
        description: "Consonance and Chaos is a full-room installation comissioned by Concept 56 for their 6 month creative project 'Retrograde'. Retrograde premiered as a one night event of dozens of artists and performers in an abandoned sporting goods store in downtown Nashville. The installation consisted of 3 cameras, an extra wide stereo sound source, 25-foot projection, and 5-channel CRT video wall. The projection was a composite of the live camera feed, as well as a 30 second delay of the live camera feed, that would oscillate back and forth based on 10 minute audio loop of beating frequencies. Particpants were immersed in an atmosphere of past and present battling for their place in the consciousness of the viewer.", 
        work1: "https://player.vimeo.com/video/189278914",
        work2: null,
        work3: null,
        link1: 'https://noblenashville.com/blog/2016/10/03/everything-need-know-huge-free-party-retrograde/',
        linkDescription1: '- Press write up of Retrograde party',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: chaos
    },
    {
        id: "facemajik",
        type: "live",
        title: "Facemajik",
        description: "Facemajik is a live drums, synth and visual project by myself and Will Hicks. We have an intense, percussive, distortion oriented style. In 2016 we had the oppurtunity to open for the Flaming Lips in their home town of OKC. As our material progressed we embarked on creating a unique live performance setup. That idea manifested as a six-panel projection mapping surface that utilized a semi-circle design to immerse show-goers, and create a fragmented display as a single, continuous image. ",
        work1: "https://player.vimeo.com/video/235986358",
        work2: "https://player.vimeo.com/video/200018980",
        work3: null,
        link1: "https://www.facebook.com/facemajik/",
        linkDescription1: '- Facemajik facebook',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: facemajik
    },
    {
        id: "face",
        type: "install",
        title: 'Your Face Here',
        description: "This installation which was a part of 'Jazz As Is', (Harry Kagan of Nashville's Solo Show) at Elephant Gallery in early 2018. Onlookers would be confronted with two cameras, and two monitors in front of them, with a sign that said 'Your Face Here.' When two people look into the cameras, their faces are displaced and rearranged, creating a collage of facial features that diverges and then rejoins periodically.",
        work1: "https://player.vimeo.com/video/265695194",
        work2: null,
        work3: null,
        link1: "https://www.elephantgallery.com/",
        linkDescription1: ' - Elephant Gallery',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: yourFace

    },
    {
        id: "basecamp",
        type: "live",
        title: "Basecamp",
        work1: "https://www.youtube.com/embed/KymMeb70CQQ",
        work2: "https://player.vimeo.com/video/205113973",
        work3: null,
        description: "In 2016 I created visuals for Basecamp that were used as a part of a design coined 'Box 1.0'. The concept, created by Johnathan Kingsbury of Nashville, was a cube whose walls were custom LED fixtures, and were covered in a veil-like material that could be projected on, creating an immersive experience for the group live. Basecamp also used this design at TEDx Nashville in 2016",
        link1: "http://owsla.com/artist/basecamp/",
        linkDescription1 : '- Basecamp OWSLA artist page',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: basecamp
    },
    {
        id: "action",
        type: "install",
        title: "Action!",
        description: "Action! is an interactive camera installation and projection commissioned by Native Magazine for their 50 year tribute to The Velvet Underground at The Basement East in November 2017. The camera detected movement and would perform a colorful edge detection & block-y disortion that created a 'Pop Art' filter for anything standing in front of it. The installation gets its name from the idea that some type of action must be performed in order to engage the camera effect, as well as the idea that the effect creates a caricature of reality not unlike societys idea of celebrity." ,
        work1 : "https://player.vimeo.com/video/265768860",
        work2 : null,
        work3 : null,
        link1: "http://native.is/",
        linkDescription1: '- NATIVE magazine webpage',
        link2: null,
        linkDescription2: null,
        link3: null,
        linkDescription3: null,
        pic: action
    },
]

export default workInfo