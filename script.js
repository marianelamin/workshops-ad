
const facilitators = [
    {
        id:0,
        name: "Marianela",
        email:"mmendozamend@neiu.edu"
    },
    {
        id:1,
        name: "Erik",
        email:"e-macias@neiu.edu"
    },
    {
        id:2,
        name: "John",
        email:"j-mcrissman@neiu.edu"
    }
]

const workshops = [
    {
        workshopID:1,
        name: 'Command Line - Bash',
        whatIllLearn: 'how to navigate through directories, create, modify and delete files, run java programs using only the command line.  We will be using Bash as the scripting language.',
        whatToBring: 'Laptop',
        when:'March 14th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLScwm5oaYSdvA4hnPCg_tiTBgD5bbPg-WNNW61a7r9eq9YtHNw/viewform?usp=sf_link',
        moreInfoLink: 'http://manela.web.ve/workshops/command-line-git-bash/CommandLineWorkshop.pdf',
        facilitatorsID:[0,1]
    },
    {
        workshopID:2,
        name: 'Steganography and Kali Linux',
        whatIllLearn: 'how to install a program that we will be using in Kali Linux, as well as how to embed a text file, audio file and a java program in an image file.  You will learn also how to decrypt that image file with all the data stored.  Kali Linux is widely used by security experts in the real world.',
        whatToBring: 'Laptop',
        when:'March 28th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfquBGruEUW2XLalKC3JS3UszGDE0-CHz6rEqdEbZ7U49fuwQ/viewform?usp=sf_link',
        moreInfoLink: 'http://www.cahsi-midwest.org/workshop1-security/index.htm',
        facilitatorsID:[1]
    },
    {
        workshopID:3,
        name: 'HTML/CSS',
        whatIllLearn: 'we will go over some of the tags that are not typically taught in client-side, linked with online git repositories.',
        whatToBring: 'Laptop',
        when:'',
        where:'',
        time:'',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    },
    {
        workshopID:4,
        name:'CS200 for Javascript on the cloud',
        whatIllLearn: `we will go over the foundations of javascript (this will be all it's known before ECMA5) and installation of a web server on the cloud using GENI.`,
        whatToBring: 'Laptop',
        when:'---',
        where:'---',
        time:'---',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    },
    {
        workshopID:5,
        name:'Simple Web Application',
        whatIllLearn: 'using html/css and Javascript to build a web application, a game or a calculator.  Once it is finished, we will deploy it server where anybody will be able to see it.',
        whatToBring: 'Laptop, have requested a space on neiu.homepages',
        when:'---',
        where:'---',
        time:'---',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    },
    {
        workshopID:6,
        name:'Artificial Neural Networks using Jupiter, python and Sci Kit Learn.',
        whatIllLearn: 'You will apply AI concepts on ...',
        whatToBring: 'Laptop',
        when:'---',
        where:'---',
        time:'---',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    },
    {
        workshopID:7,
        name:'cs200 for Python 3.0',
        whatIllLearn: 'You will learn the foundations of python.  Translate what you already have done in java into a new language.',
        whatToBring: 'Laptop',
        when:'---',
        where:'---',
        time:'---',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    }
];


const aCard =  (workshop) => {
   return  `<li> <ul class="row">
            <div class="col-lg-8">
                <li class="col-12 my-1"><label class="font-weight-bold">Name: </label> <span class="">${workshop['name']}</span> </li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to Learn: </label><p class="">${workshop['whatIllLearn']} <a target="_blank" href="${workshop['moreInfoLink']}" ${(workshop['moreInfoLink'])==''? 'hidden':''} title="more about the workshop">(more)</a></p></li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to bring: </label> <span class="">${workshop['whatToBring']} <span> </li>
                <li class="col-12 my-1"><label class="font-weight-bold">FacilitatorsID:</label> <span class="">  ${workshop['facilitatorsID'].reduce((total,val) => total+facilitators[val].name+', '," ")}--</span> </li>
            </div>
            <div class="col-md-auto">
                <li class="col"><label class="font-weight-bold">When:</label> <span class="">${workshop['when']}</span> </li>
                <li class="col"><label class="font-weight-bold">Where:</label> <span class="">${workshop['where']}</span> </li>
                <li class="col"><label class="font-weight-bold">Time:</label> <span class="">${workshop['time']}</span> </li>
                <li class="col-12"><label class="font-weight-bold"><a target="_blank" href="${workshop['regLink']}" role="btn" title = "register to attend" ${(workshop['regLink'])==''? 'hidden':''} class="btn btn-primary">Register</a></label> <span class=""><span> </li>
                <li class="col-12"><label class="font-weight-bold"> </label> <span class=""></span> </li>
            </div>
            </ul></li>
            `;
    
};


let content_list = workshops.reduce((total,value,item)=>{
    console.log(value['name']+" "+item);
    return total + aCard(value);

},"");


document.querySelector('#list-1').innerHTML += content_list;