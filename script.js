
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
        name: 'html and more',
        whatIllLearn: 'a paragraph briefly explaining',
        whatToBring: 'Laptop',
        when:'',
        where:'',
        time:'',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[0,1]
    }
];


const aCard =  (workshop) => {
   return  `<li> <ul class="row">
            <div class="col-lg-8">
                <li class="col-12 my-1"><label class="font-weight-bold">Name: </label> <span class="">${workshop['name']}</span> </li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to Learn: </label><p class="">${workshop['whatIllLearn']} <a target="_blank" href="${workshop['moreInfoLink']}" title="more about the workshop">(more)</a></p></li>
                <li class="col-md-12 my-1"><label class="font-weight-bold">What to bring: </label> <span class="">${workshop['whatToBring']} <span> </li>
                <li class="col-12 my-1"><label class="font-weight-bold">FacilitatorsID:</label> <span class="">  ${workshop['facilitatorsID'].reduce((total,val) => total+facilitators[val].name+', '," ")}--</span> </li>
            </div>
            <div class="col-md-auto">
                <li class="col"><label class="font-weight-bold">When:</label> <span class="">${workshop['when']}</span> </li>
                <li class="col"><label class="font-weight-bold">Where:</label> <span class="">${workshop['where']}</span> </li>
                <li class="col"><label class="font-weight-bold">Time:</label> <span class="">${workshop['time']}</span> </li>
                <li class="col-12"><label class="font-weight-bold"><a target="_blank" href="${workshop['regLink']}" role="btn" title = "register to attend" class="btn btn-primary">Register</a></label> <span class=""><span> </li>
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