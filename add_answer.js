// used http://geoffmuskett.com/really-simple-jquery-character-countdown-in-textarea/ 
//to not just show me how, 
//but only site with simple explanations of how it is working

$(document).ready(function() {
    var maxLength = 240;
    $('#addanswertext').keyup(function () {
        var length = $("#addanswertext").val().length;
        $('#textcountleft').html(length);
        $("#next-go-to-imagery-btn").prop("disabled", false);
        if (length > 240) {
            $("#next-go-to-imagery-btn").prop("disabled", true);
            $(".character-counter").addClass("text-danger");
        }
        
    });
});

$(document).ready(function() {
    var maxLength = 240;
    $('#editimage').keyup(function () {
        var length = $("#editimage").val().length;
        $('#textcountright').html(length);


    });
});



//On landing page, switches to create acc if you hit signup

$(document).ready(function() {
    $('#signup').click(function() {
        $('#create').toggle();
        $('#creating-acc').toggle();
    });
});

//for delete button

$(document).ready(function() {
    $('#show-the-answer').click(function() {
        $('#the-top-card').toggle();
    });
});

const ALL_THEM_WORDS = ["x002tp00",
        "x4ww5qdr",
        "x72jhhu3z",
        "xaccess2",
        "xakep1234",
        "xboxlive",
        "xcalibur",
        "xcountry",
        "xenocide",
        "xenogear",
        "xenophobia",
        "xenophobic",
        "xenophon",
        "xexeylhf",
        "xianzong",
        "xiaoping",
        "xiaoyua123",
        "xinjiang",
        "xohzi3g4",
        "xpressmusic",
        "xsvnd4b2",
        "xsw21qaz",
        "xsw23edc",
        "xthtgfirf",
        "xtutdfhf",
        "xuanzang",
        "xuanzong",
        "xufrgemw",
        "xxx12345",
        "xxxp455w0rd5",
        "xxxxxxx1",
        "xyh28af4",
        "xylophone",
        "xzsawq21",
        "y'knowwhati'msayin",
        "y'understand",
        "yachting",
        "yaglasph",
        "yakovlev",
        "yakushova",
        "yamagata",
        "yamaha12",
        "yamahar1",
        "yamahar6",
        "yamakasi",
        "yamamoto",
        "yamanashi",
        "yamashita",
        "yammering",
        "yangzhou",
        "yankeemp",
        "yankees0",
        "yankees1",
        "yankees2",
        "yankees3",
        "yankees4",
        "yankees7",
        "yankees9",
        "yankovic",
        "yanochka",
        "yanshi1982",
        "yanukovych",
        "yarborough",
        "yarbrough",
        "yardbird",
        "yardbirds",
        "yardstick",
        "yarmouth",
        "yaroslav",
        "yaroslavl",
        "yasacrac",
        "yasuhiro",
        "ybrbnbyf",
        "ybrbnf_25",
        "ybrbnjcbr",
        "ybrjkftd",
        "ybrjkftdbx",
        "ybrjkftdyf",
        "ycwvrxxh",
        "yeahbaby",
        "yeahrigh",
        "yeahright",
        "year2000",
        "year2005",
        "yearbook",
        "yearbooks",
        "yearning",
        "yearnings",
        "yekaterinburg",
        "yelburton",
        "yelena03",
        "yellow12",
        "yellow22",
        "yellowhead",
        "yellowish",
        "yellowknife",
        "yellowstone",
        "yelverton",
        "yemenite",
        "yengeese",
        "yeomanry",
        "yes90125",
        "yeshivas",
        "yessenia",
        "yesterda",
        "yesterday",
        "yesterdays",
        "yfcnfcmz",
        "yfcntymrf",
        "yfcnz123",
        "yfcnzvjz",
        "yfcnzyfcnz",
        "yfdbufnjh",
        "yfeiybrb",
        "yfgjktjy",
        "yfhrjnbrb",
        "yfltymrf",
        "yfnfitymrf",
        "yfxfkmybr",
        "ygfxbkgt",
        "yggdrasi",
        "yielding",
        "yildirim",
        "yingling",
        "yingyang",
        "yitzchak",
        "yjdbrjdf",
        "yjdjcnbf",
        "yjdsqgfhjkm",
        "yjdsqujl",
        "yjdujhjl",
        "yjhbkmcr",
        "ym3cautj",
        "yogibear",
        "yogyakarta",
        "yohannan",
        "yokohama",
        "yokosuka",
        "yokozuna",
        "yorkshir",
        "yorkshire",
        "yorktown",
        "yorkville",
        "yosemite",
        "yoshihiro",
        "youandme",
        "youlanda",
        "youngblood",
        "youngest",
        "youngman",
        "youngone",
        "youngster",
        "youngsters",
        "youngstown",
        "yourmama",
        "yourmom1",
        "yourname",
        "yourself",
        "yourselves",
        "yousuck1",
        "youthful",
        "yoyodyne",
        "ypsilanti",
        "yqlgr667",
        "yqmbevgk",
        "yr8wdxcq",
        "ytdxz2ca",
        "ytngfhjkz",
        "ytnhjufnm",
        "ytrhjvfyn",
        "ytyfdbcnm",
        "yudhoyono",
        "yugoslav",
        "yugoslavia",
        "yugoslavian",
        "yuitre12",
        "yujyd360",
        "yuletide",
        "yushchenko",
        "yvelines",
        "yvtte545",
        "yxkck878",
        "yy5rbfsc",
        "yyyyyyy1",
        "yzerman1",
        "z1234567",
        "z123456789",
        "z123456z",
        "z1x2c3v4",
        "z1x2c3v4b5",
        "z1x2c3v4b5n6m7",
        "z1z2z3z4",
        "z3cn2erv",
        "zacatecas",
        "zacharia",
        "zachariah",
        "zacharias",
        "zachary1",
        "zaharova",
        "zakamatak",
        "zalewski",
        "zalgiris",
        "zamarripa",
        "zambales",
        "zamboanga",
        "zambrano",
        "zamindar",
        "zamoyski",
        "zanesville",
        "zantopia",
        "zanzibar",
        "zapatista",
        "zaphod42",
        "zaporizhia",
        "zapruder",
        "zaq!2wsx",
        "zaq11qaz",
        "zaq12345",
        "zaq123wsx",
        "zaq12qaz",
        "zaq12wsx",
        "zaq1xsw2",
        "zaq1xsw2cde3",
        "zaqwsx123",
        "zaqwsxcde",
        "zaqwsxcderfv",
        "zaqxsw123",
        "zaqxswcde",
        "zaragoza",
        "zaratustra",
        "zarzuela",
        "zasranec",
        "zatunica",
        "zawahiri",
        "zaxscdvf",
        "zbigniew",
        "zcfvfzkexifz",
        "zcxfcnkbdf",
        "zcxfcnkbdfz",
        "zealander",
        "zealanders",
        "zebra123",
        "zechariah",
        "zeebrugge",
        "zeitgeist",
        "zeitschrift",
        "zeljeznicar",
        "zemanova",
        "zendejas",
        "zenit2011",
        "zeppelin",
        "zeringue",
        "zerocool",
        "zesyrmvu",
        "zhaozong",
        "zhejiang",
        "zhengzhou",
        "zhjckfdf",
        "zhongguo",
        "zhongshan",
        "zhongshu",
        "zhongzong",
        "zhytomyr",
        "zidane10",
        "ziegfeld",
        "zielinski",
        "zigazaga",
        "ziggy123",
        "zildjian",
        "zillions",
        "zimbabwe",
        "zimbabwean",
        "zimmerma",
        "zimmerman",
        "zimmermann",
        "zinedine",
        "zinfandel",
        "zinoviev",
        "zionists",
        "zipdrive",
        "zippy123",
        "zirconia",
        "zirconium",
        "zjses9evpa",
        "zldej102",
        "zoidberg",
        "zolushka",
        "zombie13",
        "zookeeper",
        "zoological",
        "zoologist",
        "zooplankton",
        "zootsuit",
        "zoroaster",
        "zoroastrian",
        "zoroastrianism",
        "zoroastrians",
        "zorro123",
        "zpflhjn1",
        "zqjphsyf6ctifgu",
        "zrjdktdf",
        "zse45rdx",
        "zse4xdr5",
        "zsecyus56",
        "zucchero",
        "zucchini",
        "zuckerberg",
        "zuckerman",
        "zukowski",
        "zulfikar",
        "zulfiqar",
        "zvonareva",
        "zweibrucken",
        "zx123456",
        "zx123456789",
        "zxasqw12",
        "zxc12345",
        "zxc123456",
        "zxc123zxc",
        "zxcasd123",
        "zxcasdqw",
        "zxcasdqwe",
        "zxcasdqwe123",
        "zxcqweasd",
        "zxcv1234",
        "zxcv4321",
        "zxcvasdf",
        "zxcvb123",
        "zxcvb1234",
        "zxcvb12345",
        "zxcvbasdfg",
        "zxcvbn12",
        "zxcvbn123",
        "zxcvbn123456",
        "zxcvbnm.",
        "zxcvbnm1",
        "zxcvbnm12",
        "zxcvbnm123",
        "zxcvbnm123456789",
        "zxcvbnma",
        "zxcvbnmm",
        "zxcvbnmz",
        "zxcvfdsa",
        "zxcvvcxz",
        "zz123456",
        "zz8807zpl",
        "zzxxccvv",
        "zzzxxxccc",
        "zzzzxxxx",
        "zzzzzzz1"
        ]


var brandNewList = [];

function goThroughTheList(array) {
    for (let words = 0; words < array.length; words += 1) {
        if (array[words].length > 8) {
            brandNewList.push(array[words]);
        };
    }; return brandNewList
};

goThroughTheList(ALL_THEM_WORDS);




//check if the email/password creating inputs have value and if not show an error message

$(document).ready(function() {
    $("#lets-go-btn").click(function() {
        var emailLength = $("#Email_textbox").val().length;
        var enteredEmail = $("#Email_textbox").val();
        var theAtSymbol = enteredEmail.indexOf("@");
        var theLocalPart = enteredEmail.slice(0, theAtSymbol);
        var passLength = $("#Email_password").val().length;
        var enteredPassword = $("#Email_password").val();
        

        //This is for the create an account email
        if (emailLength == 0) {
            $("#you-have-to-create-email").show();
            $("#Email_textbox").addClass("is-invalid");
        }
        if (emailLength > 0) {
            $("#you-have-to-create-email").hide();
            $("#Email_textbox").removeClass("is-invalid");
        }
        
        function uniqueCharacters (string) {
            let arr = string.split("")
            let orderedArr = arr.reduce(function (a, b) {
                if (a.indexOf(b) === -1) {
                    a.push(b)
                }
                return a
            }, [])
            if (orderedArr.length < 3) {
                $("#you-have-to-be-more-unique").show();
                $("#Email_textbox").addClass("is-invalid");
            } else {
                $("#you-have-to-be-more-unique").hide();
                $("#Email_textbox").removeClass("is-invalid");
            }
            return orderedArr
        };
        

        //This is for the create an account password
        if (passLength === 0) {
            $("#you-have-to-enter-something-password").show();
            $("#Email_password").addClass("is-invalid");
        } else {
            $("#you-have-to-enter-something-password").hide();
            $("#Email_password").removeClass("is-invalid");
        }
        if (passLength !== 0 && passLength < 9) {
            $("#you-have-to-create-password").show();
            $("#Email_password").addClass("is-invalid");
            
        } else {
            $("#you-have-to-create-password").hide();
            $("#Email_password").removeClass("is-invalid");

        };
        if (passLength !== 0 && passLength >= 9 && theLocalPart === enteredPassword) {
            $("#you-need-to-not-use-local").show();
            $("#Email_password").addClass("is-invalid");
        } else {
            $("#you-need-to-not-use-local").hide();
            $("#Email_password").removeClass("is-invalid");
        };
        if (passLength !== 0 && passLength >= 9 && theLocalPart !== enteredPassword && brandNewList.indexOf(enteredPassword) > -1) {
            $("#you-need-to-be-more-original").show();
            $("#Email_password").addClass("is-invalid");
        } else {
            $("#you-need-to-be-more-original").hide();
            $("#Email_password").removeClass("is-invalid");
        };
        function encryptThatThing (string) {
            let newString = []
            let allCaps = []
            for (let nums = 0; nums < string.length; nums += 1) {
                newString.push(string.charCodeAt(nums) + 1);
            }; 
            let evenNewerThing = String.fromCharCode(...newString)
            console.log("password: " + evenNewerThing)
        } 
        encryptThatThing(enteredPassword)


        //console.log an object
        let createData =
        {
            _id: 678123,
            email: "whatTheUserEnteredForTheirEmail",
            password: "whatTheUserEnteredForTheirPassword",
            createdOn: 200508232659
        }

        

        var theDateYo = new Date();
        var yearCreated = theDateYo.getYear() - 100;
        var monthCreated = theDateYo.getMonth() + 1;
        var dayCreated = theDateYo.getDate();
        var hourCreated = theDateYo.getHours();
        var minutesCreated = theDateYo.getMinutes();
        var secondsCreated = theDateYo.getSeconds();
        var milisCreated = theDateYo.getMilliseconds();
        var fullDateCreated = ("" + yearCreated + monthCreated + dayCreated + hourCreated + minutesCreated + secondsCreated);
        
        

        // create an _id value by concatenating the milliseconds
        // of the current datetime with a random number between 000 and 999. 

        
        var randomAssNumber =  Math.floor(Math.random() * 1000);
        randomAssNumber = ("0" + randomAssNumber).slice(-3);
        milisCreated = ("0" + milisCreated).slice(-3);
        var uniqueId = ("" + randomAssNumber + milisCreated);
        
          
        




        if (passLength >= 9 && theLocalPart != enteredPassword && emailLength > 0  && brandNewList.indexOf(enteredPassword) === -1) {
            
            createData._id = uniqueId;
            createData.email = $("#Email_textbox").val();
            createData.password = $("#Email_password").val();
            createData.createdOn = fullDateCreated;

            console.log(createData);
        }
    });

    $("#the-login-btn").click(function () {
        var otherEmailLength = $("#Email_textbox_bottom").val().length;
        if (otherEmailLength == 0) {
            $("#you-need-to-enter-email").show();
            $("#Email_textbox_bottom").addClass("is-invalid");
        }
        if (otherEmailLength > 0) {
            $("#you-need-to-enter-email").hide();
            $("#Email_textbox_bottom").removeClass("is-invalid");
        }

        //This is for the login email
    });


    $("#the-login-btn").click(function () {
        var otherEmailLength = $("#Email_password_bottom").val().length;
        if (otherEmailLength < 9 && otherEmailLength > 0) {
            $("#you-need-to-enter-password").show();
            $("#Email_password_bottom").addClass("is-invalid");
        }
        if (otherEmailLength == 0) {
            $("#you-need-to-enter-something").show();
            $("#Email_password_bottom").addClass("is-invalid");
        }
        if (otherEmailLength > 0) {
            $("#you-need-to-enter-something").hide();
        }

        if (otherEmailLength >= 9) {
            $("#you-need-to-enter-password").hide();
            $("#Email_password_bottom").removeClass("is-invalid");
        }

        //This is for the login password
    });

    $("#the-save-button-create").click(function() {
        let createCardData = 
        
        {
            _id: 002045,
            imagery: "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
            answer: "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
            levelNum: 1,
            successfulAttemptsNum: 0,
            createdOn: 200508232659,
            lastAttemptedOn: 200508232659 // same as createdOn
        };
        
        var theDateYo = new Date();
        var yearCreated = theDateYo.getYear() - 100;
        var monthCreated = theDateYo.getMonth() + 1;
        var dayCreated = theDateYo.getDate();
        var hourCreated = theDateYo.getHours();
        var minutesCreated = theDateYo.getMinutes();
        var secondsCreated = theDateYo.getSeconds();
        var milisCreated = theDateYo.getMilliseconds();
        var fullDateCreated = ("" + yearCreated + monthCreated + dayCreated + hourCreated + minutesCreated + secondsCreated);
        var randomAssNumber =  Math.floor(Math.random() * 1000);
        randomAssNumber = ("0" + randomAssNumber).slice(-3);
        milisCreated = ("0" + milisCreated).slice(-3);
        var uniqueId = ("" + randomAssNumber + milisCreated);
        createCardData._id = uniqueId;
        createCardData.createdOn = fullDateCreated;
        createCardData.lastAttemptedOn = fullDateCreated;
        createCardData.imagery = `${encodeURIComponent(createCardData.imagery)}`;
        createCardData.answer = `${encodeURIComponent(createCardData.answer)}`;
        console.log(createCardData)
    });

    
    

});

