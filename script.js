const facilitators = [
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
    }
]

const workshops = [
    {
        id:1,
        name: 'commandLine',
        whatIllLearn: 'a paragraph briefly explaining',
        whatToBring: 'Laptop',
        when:'',
        where:'',
        time:'',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[1,2]
    },
    {
        id:2,
        name: 'Kali Linux and hiding stuff',
        whatIllLearn: 'a paragraph briefly explaining',
        whatToBring: 'Laptop',
        when:'',
        where:'',
        time:'',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[1,2]
    },
    {
        id:3,
        name: 'html and more',
        whatIllLearn: 'a paragraph briefly explaining',
        whatToBring: 'Laptop',
        when:'',
        where:'',
        time:'',
        regLink: '',
        moreInfoLink: '',
        facilitatorsID:[1,2]
    }
];


let aCard =  (workshop) => {
   return  `<ul class="row">
            <div class="col-md-8">
                <li class="col-12"><label class="font-weight-bold">name</label> <span class="">${workshop[name]}</span> </li>
                <li class="col-md-12"><label class="font-weight-bold">whatIllLearn:</label> <span class="">${workshop[whatIllLearn]}</span> </li>
                <li class="col-md-12"><label class="font-weight-bold">whatToBring:</label> <span class="">${workshop[whatToBring]} <span> </li>
                <li class="col-12"><label class="font-weight-bold">facilitatorsID:</label> <span class="">  foorloop on {facilitators[ {facilitatorsID}]}----</span> </li>
            </div>
            <div class="col-md-auto">
                <li class="col"><label class="font-weight-bold">when:</label> <span class="">${workshop[when]}</span> </li>
                <li class="col"><label class="font-weight-bold">where:</label> <span class="">${workshop[where]}</span> </li>
                <li class="col"><label class="font-weight-bold">time:</label> <span class="">${workshop[time]}</span> </li>
                <li class="col-12"><label class="font-weight-bold"> <a href="${workshop[moreInfoLink]}" title="more about the workshop"> moreInfoLink:</a></label> <span class=""></span> </li>
                <li class="col-12"><label class="font-weight-bold"><a href="${workshop[regLink]}" role="btn" title = "register to attend" class="btn btn-primary">regLink:</a></label> <span class=""><span> </li>
            </div>
            </ul>   `;
    
};

document.querySelector('#schedule-container').innerHTML += '<p>this is a test</p>'+aCard;