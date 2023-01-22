"use strict";

const persons = [
  {
    image: 1,
    fullName: "ნოდარ დუმბაძე",
    review: [
      {
        book: "ჰელადოს",
        text: "მრგვალ მაგიდაზე აკვარიუმი იდგა და შიგ წყალმცენარეებსა, ლამაზ ნიჟარებსა და ქვებს შორის მარაოსავით ფარფლებგაშლილი ოქროს თევზები დასრიალებდნენ, თან პირს სასაცილოდ აფჩენდნენ და ჰაერის ბუშტებს უშვებდნენ. რატომღაც მომეჩვენა, რომ თევზებს სასტიკად შიოდათ...",
      },
      {
        book: "თეთრი ბაირაღები",
        text: "პატიმრის სიზმარი სამოთხეს უნდა ჰგავდეს. შიგ თორმეტ-თორმეტ ოქტავიანი იადონები უნდა გალობდნენ, სიზმარი ოცნება უნდა იყოს, ცისარტყელასავით ჭრელი და ლამაზი.\n- შენ რას იტყვი, შოშია?\nსიზმარში სატრფოს უნდა ხედავდე, ულამაზესს და შენს მკლავზე მონებივრეს,\n- რას იტყვი, შოშია?",
      },
      {
        book: "მე, ბებია, ილიკო და ილარიონი",
        text: "ჩემს სოფელს მარჯვნივ გუბაზოული ჩაუდის, მარცხნივ - ლაშის ღელე, რომელიც სავსეა კიბორჩხალებით, ღორჯოებით და შარვალაკაპიწებული ბიჭებით. გუბაზოულზე ხიდია გადებული, რომელსაც ბოგას ეძახიან. ყოველ გაზაფხულზე მოვარდნილ წყალს მიაქვს ხიდი და ჩვენ მხოლოდ ხიდის თავი გვრჩება.",
      },
    ],
  },

  {
    image: 2,
    fullName: "დავით კლდიაშვილი",
    review: [
      {
        book: "ტრაგედია უგმიროთ",
        text: "ნელა შემობრუნდა, უხმოთ მოშორდა მოხუც დედაკაცს - თავის ნათლიას, რომელიც გულში ფიქრობდა: შენი მტერია, ეს ნახევარი ჯამი ფქვილი კი დავკარგე... მარა ჩემი რძალი მაინც არ გაიგებდეს... რას უშველის, საწყალს, ნახევარი ჯამი?.. ეხ, ღმერთო, ღმერთო!",
      },
    ],
  },
  {
    image: 3,
    fullName: "მიხეილ ჯავახიშვილი",
    review: [
      {
        book: "ჯაყოს ხიზნები",
        text: "ისევ დღე დღეს მისდევდა, კვირას - კვირა, წელიწადს - წელიწადი. თეიმურაზი კი მუდმივ სასწაულს ელოდებოდა. და სასწაულის მოლოდინში, მამულის დაბრუნებისა და ხელახალ გამდიდრების იმედიანობაში ნელ-ნელა დაილივნენ და დაცალიერდნენ თეიმურაზის გულიც, იმედებიც, წიგნსაცავიც და ბინაც.",
      },
    ],
  },
  {
    image: 4,
    fullName: "იაკობ გოგებაშვილი",
    review: [
      {
        book: "მკვეხარა ქოთანი",
        text: "ქოთნები ერთად შეგროვილიყვნენ. ერთი უფრო მაღლი ქოთანი შუაში ჩამდგარიყო და იკვეხნიდა: მე თქვენისთანა როდი ვარ, მე ოქროს ძირი მაქვსო. უცებ თავს წაადგა ციცხვი. - ერთი ამას დამიხედეთ, მე მაინც ხომ ვიცი რა ოქროს ძირიც გაქვსო! მკვეხარა ქოთანს შერცხვა და ხმა გაკმინდა.",
      },
    ],
  },
  {
    image: 5,
    fullName: "ლუკა რაზიკაშვილი",
    review: [
      {
        book: "ამოდის, ნათდება!",
        text: "ერთ წამში გათავდა ტოტიას სიცოცხლე; ლეშთან ერთად გათავდა მისი სულიც. ბეწვიც აღარსად ეგდო იმის მრავალტანჯულის ტყავისა. ოდნავ თუ სადმე ნასისხლარს შეამჩნევდით, ის იყო. მგლებს ცოტათი გული დაუმშვიდდათ, მაგრამ კიდევ შიოდათ. შეხედეს ერთმანეთს, შეეშინდა ერთს მეორისა, ალბათ იმიტომ - ახლა მე არ შემჭამონო. შეეშინდათ და გაფრთხენ. ერთი მეორეს გაურბოდა, ჯაგიანებში ჩხლაკა-ჩხლუკი ისმოდა და თან თოვლის ჭყრიალი...",
      },
    ],
  },
  {
    image: 6,
    fullName: "აკაკი წერეთელი",
    review: [
      {
        book: "ბაში-აჩუკი",
        text: "აბდუშაჰილისათვის ყველგან ბაღდადი იყო, სადაც კი მისი სატრფო იქნებოდა; სიყვარულით გამსჭვალულ პირიმზისას ეჩქარებოდა, რომ სამშობლოში გადაეტანა თავისი ბედნიერება; და ბაში-აჩუკს კი მაინცდამაინც მაგდენად არაფრად ეპიტნავებოდა იმერეთი, რადგანაც გაიგო, რომ მისი კახეთისაკენ გადავარდნის მიზეზი რაჭის ერისთავისათვის მიუთხოვებიათო.",
      },
    ],
  },
  {
    image: 7,
    fullName: "ილია ჭავჭავაძე",
    review: [
      {
        book: "კაცია ადამიანი?",
        text: "ხშირად შუაღამემდინ ცოლ-ქმარნი გაცხარებულნი და გაჭარხლებულნი ამისთანა ღრმა აზრებს ამტკიცებდნენ: „დღეს რა ვჭამოთ“, — იტყოდნენ დილით. „ხვალ რა ვჭამოთ“, — იტყოდნენ საღამოზედ. ეს იყო იმათი სულის საზრდო, ეს იყო იმათი გონების ვარჯიში, ეს იყო იმათი აზრის აღებ-მიცემა.",
      },
    ],
  },

  {
    image: 8,
    fullName: "გურამ დოჩანაშვილი",
    review: [
      {
        book: "კაცი, რომელსაც ლიტერატურა ძლიერ უყვარდა",
        text: "- ვინ და ბეტანკური, აბა აურელიანო-სქელს ხომ არ... - და შუბლზე შემოირტყა ხელი, - უჰ, აქამდე როგორ ვერ მივხვდი - თქვენ ძალიანა ჰგავხართ აურელიანო-სქელს, სანამ გასუქდებოდა, - და გაიოცა: - ბიჭო, ბიჭო, როგორა ჰგავს?!\n- ვინ სქელს, რა სქელს... - ავღელდი მე.",
      },
    ],
  },

  {
    image: 9,
    fullName: "ერიკ ფრენკ",
    review: [
      {
        book: "და არავინ დარჩა მეტი",
        text: "– ძალიან კარგი. გიჟურ სიტუაციაში აღმოვჩნდით და გამოსავალიც გიჟური უნდა მოვნახოთ. თქვენს შესაძლებლობასა და მზადყოფნაზეა დამოკიდებული იმპერიის ბედი. გამიგეთ?\n– დიახ, სერ, – უპასუხა ჰარისონმა, რომელმაც ვერაფერი გაიგო.",
      },
    ],
  },
];

let image = document.querySelector(".image");
let novel = document.querySelector(".novel");
let author = document.querySelector(".author");
let review = document.querySelector(".review");

const RandomNumber = function (n) {
  return Math.floor(Math.random() * n);
};

let startN = 0;
function clickPerson() {
  startN++;
  if (startN > persons.length - 1) {
    startN = 0;
  }
  let random = RandomNumber(persons[startN].review.length);
  author.textContent = persons[startN].fullName;
  review.textContent = persons[startN].review[random].text;
  novel.innerHTML = persons[startN].review[random].book;
  image.style.backgroundImage = "url('img/" + persons[startN].image + ".jpg')";
}

setInterval(clickPerson, 3000);
