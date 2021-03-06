
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
    },
    {
        id:5,
        name: "William Stillman",
        email:"w-stillman@neiu.edu"
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
        moreInfoLink: 'https://cahsi-midwest.org/spr2019WorkshopMaterial/CommandLineWorkshop.pdf',
        facilitatorsID:[1,2]
    },
    {
        name: 'Steganography and Kali Linux: Part 1',
        whatIllLearn: 'How to install a program that we will be using in Kali Linux, as well as how to embed a text file, audio file and a java program in an image file.  You will learn also how to decrypt that image file with all the data stored.  Kali Linux is widely used by security experts in the real world.',
        whatToBring: 'Laptop',
        when:'March 28th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfquBGruEUW2XLalKC3JS3UszGDE0-CHz6rEqdEbZ7U49fuwQ/viewform?usp=sf_link',
        moreInfoLink: 'http://www.cahsi-midwest.org/workshop1-security/index.htm',
        facilitatorsID:[2]
    },
    {
        name:'Python on the cloud',
        whatIllLearn: `We will learn the basics of python syntax.  We will execute python code from the cloud using GENI.`,
        whatToBring: 'Laptop',
        when:'April 2nd, 2019',
        where:'LWH 2031',
        time:'3pm - 4:30pm',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSddK7D1TxFjIDZBHwirACiO5qkcbfAAW58u1pLRtp9s5oDbGg/viewform?usp=sf_link',
        moreInfoLink: 'https://cahsi-midwest.org/spr2019WorkshopMaterial/PythonOnCloud.pdf',
        facilitatorsID:[1]
    },
    {
        name:'Artificial Neural Networks using Jupiter, python and Scikit-Learn.',
        whatIllLearn: 'You will apply AI concepts on ...',
        whatToBring: 'Laptop',
        when:'April 4th, 2019',
        where:'LWH 2031',
        time:'9am - 11am',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc4hcOtncq5xDJ68vht9hJYEOX75zQ8xSB5cD7f6O-ZuUsnEg/viewform?usp=sf_link',
        moreInfoLink: '',
        facilitatorsID:[3]
    },
    {
        name: 'Steganography and Kali Linux: Part 2',
        whatIllLearn: 'How to install a program that we will be using in Kali Linux, as well as how to embed a text file, audio file and a java program in an image file.  You will learn also how to decrypt that image file with all the data stored.  Kali Linux is widely used by security experts in the real world.',
        whatToBring: 'Laptop',
        when:'April 4th, 2019',
        where:'LWH 2044',
        time:'3pm - 4pm',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeJRddOIsxJox1Dh6eghja3GLXxhOnWaurTPhdgtgFGFzRmrQ/viewform?usp=sf_link',
        moreInfoLink: 'http://www.cahsi-midwest.org/workshop1-security/index.htm',
        facilitatorsID:[2]
    },
    {
        name: 'Javascript Fundamentals',
        whatIllLearn: 'We will contribute to an existent project, using online git repositories and applying concepts of Javascript.  We will start with the foundations and build up on it.',
        whatToBring: 'Laptop',
        when:'April 9th, 2019',
        where:'LWH 3046',
        time:'3pm - 4:30pm',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfVNQGFPC2S8Q5_KNv3FSGuLZpjQy3Cnh0DIxyeURh17QdXMw/viewform?usp=sf_link',
        moreInfoLink: 'https://drive.google.com/file/d/1tuAWp2LAAXRYg_o8t4nkdDJbocfZpdUB/view',
        facilitatorsID:[4]
    },
    {
        name: 'Tapping Phones before year 2000',
        whatIllLearn: 'This will be a talk from a former Army Security Agency (ASA) employee on how using computer technology it was possible to tap phones and radios.',
        whatToBring: 'nothing',
        when:'April 18th, 2019',
        where:'LWH 1001',
        time:'9am - 10am',
        regLink_state: false,
        regLink: 'https://docs.google.com/forms/d/e/1FAIpQLSeEZy4j06lk-lu1O6kcUsfTBiQKC2MPfiVKLdXpTfpnHLilPQ/viewform?usp=sf_link',
        moreInfoLink: '',
        facilitatorsID:[5]
    }
    /*,
    {
        name: 'HTML/CSS - Canvas and Bootstrap',
        whatIllLearn: `Using html/css and Javascript to build a web application, a game or a calculator.  Once it is finished, we will deploy it to a server where everyone will be able to see/use it.  For this we will learn how to use Boostrap CSS framework in order to add style.  At the end we will save changes on the online reposotory.`,
        whatToBring: 'Laptop, Create a GitHub or Bitbucket account, Email <a href="mailto:helpdesk@neiu.edu">Helpdesk NEIU</a> to request a space on homepages.neiu.edu in order to host our application',
        when:'TBD',
        where:'TBD',
        time:'TBD',
        regLink_state: false,
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0]
    }*/
];


const aCard =  (workshop) => {
   return  `<li> <ul class="row">
            <div class="col-lg-8">
                <li class="col-12 my-1"><label class="font-weight-bold">Title: </label> <span class="">${workshop['name']}</span> </li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to Learn: </label><p class="">${workshop['whatIllLearn']} <a target="_blank" href="${workshop['moreInfoLink']}" ${(workshop['moreInfoLink'])==''? 'hidden':''} title="more about the workshop">(more)</a></p></li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to bring: </label> <span class="">${workshop['whatToBring']} <span> </li>
                <li class="col-12 my-1"><label class="font-weight-bold">Facilitators:</label> <span class="">  ${workshop['facilitatorsID'].reduce((total,val) => total+`<a title="email me!" href="mailto:${facilitators[val].email}">${facilitators[val].name}</a>, `," ")}--</span> </li>
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