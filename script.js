
const facilitators = [
    {
        id:0,
        name: "TBD",
        email:""
    },
    {
        id:1,
        name: "Marianela",
        email:"mmendozamend@neiu.edu"
    },
    {
        id:2,
        name: "Erik",
        email:"e-macias@neiu.edu"
    },
    {
        id:3,
        name: "John",
        email:"j-mcrissman@neiu.edu"
    },
    {
        id:4,
        name: "Rudy",
        email:"rlpichol@neiu.edu"
    }
]

const workshops = [
    {
        name: 'Command Line - Bash',
        whatIllLearn: 'How to navigate through directories, create, modify and delete files, run java programs using only the command line.  We will be using Bash as the scripting language.',
        whatToBring: 'Laptop',
        when:'March 14th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScwm5oaYSdvA4hnPCg_tiTBgD5bbPg-WNNW61a7r9eq9YtHNw/viewform?usp=sf_link',
        moreInfoLink: 'http://manela.web.ve/workshops/command-line-git-bash/CommandLineWorkshop.pdf',
        facilitatorsID:[1,2]
    },
    {
        name: 'Steganography and Kali Linux',
        whatIllLearn: 'How to install a program that we will be using in Kali Linux, as well as how to embed a text file, audio file and a java program in an image file.  You will learn also how to decrypt that image file with all the data stored.  Kali Linux is widely used by security experts in the real world.',
        whatToBring: 'Laptop',
        when:'March 28th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink_state: true,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfquBGruEUW2XLalKC3JS3UszGDE0-CHz6rEqdEbZ7U49fuwQ/viewform?usp=sf_link',
        moreInfoLink: 'http://www.cahsi-midwest.org/workshop1-security/index.htm',
        facilitatorsID:[2]
    },
    {
        name: 'CS200 for Javascript',
        whatIllLearn: 'We will contribute to an existent project, using online git repositories and applying concepts of Javascript.  We will start with the foundations and build up on it.',
        whatToBring: 'Laptop',
        when:'TBD - April week 1',
        where:'TBD',
        time:'TBD',
        regLink_state: false,
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[4]
    },
    {
        name: 'HTML/CSS - Canvas and Bootstrap',
        whatIllLearn: `Using html/css and Javascript to build a web application, a game or a calculator.  Once it is finished, we will deploy it to a server where everyone will be able to see/use it.  For this we will learn how to use Boostrap CSS framework in order to add style.  At the end we will save changes on the online reposotory.`,
        whatToBring: 'Laptop, Create a GitHub or Bitbucket account, Email <a href="mailto:helpdesk@neiu.edu">Helpdesk NEIU</a> to request a space on homepages.neiu.edu in order to host our application',
        when:'TBD - April week 1',
        where:'TBD',
        time:'TBD',
        regLink_state: false,
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    },
    {
        name:'CS200 for Python and Computer Networks',
        whatIllLearn: `We will learn the basics of python in order to write translate Java programs into Python.`,
        whatToBring: 'Laptop',
        when:'TBD - April week 2',
        where:'TBD',
        time:'TBD',
        regLink_state: false,
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[1]
    },
    {
        name:'Artificial Neural Networks using Jupiter, python and Sci Kit Learn.',
        whatIllLearn: 'You will apply AI concepts on ...',
        whatToBring: 'Laptop',
        when:'TBD - April week 2',
        where:'TBD',
        time:'TBD',
        regLink_state: false,
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[3]
    },
];


const aCard =  (workshop) => {
   return  `<li> <ul class="row">
            <div class="col-lg-8">
                <li class="col-12 my-1"><label class="font-weight-bold">Title: </label> <span class="">${workshop['name']}</span> </li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to Learn: </label><p class="">${workshop['whatIllLearn']} <a target="_blank" href="${workshop['moreInfoLink']}" ${(workshop['moreInfoLink'])==''? 'hidden':''} title="more about the workshop">(more)</a></p></li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to bring: </label> <span class="">${workshop['whatToBring']} <span> </li>
                <li class="col-12 my-1"><label class="font-weight-bold">Facilitators:</label> <span class="">  ${workshop['facilitatorsID'].reduce((total,val) => total+`<a href="mailto:${facilitators[val].email}">${facilitators[val].name}</a>, `," ")}--</span> </li>
            </div>
            <div class="col-md-auto">
                <li class="col"><label class="font-weight-bold">When:</label> <span class="">${workshop['when']}</span> </li>
                <li class="col"><label class="font-weight-bold">Where:</label> <span class="">${workshop['where']}</span> </li>
                <li class="col"><label class="font-weight-bold">Time:</label> <span class="">${workshop['time']}</span> </li>
                ${(!workshop['regLink_state'])? '':`<li class="col-12"><label class="font-weight-bold"><a target="_blank" href="${workshop['regLink']}" role="btn" title = "register to attend" class="btn btn-primary">Register</a></label> <span class=""><span> </li>`}
                
            </div>
            </ul></li>
            `;
    
};
{/* <li class="col-12"><label class="font-weight-bold"> </label> <span class=""></span> </li> */}

let content_list = workshops.reduce((total,value,item)=>{
    console.log(value['name']+" "+item);
    return total + aCard(value);

},"");


document.querySelector('#list-1').innerHTML += content_list;