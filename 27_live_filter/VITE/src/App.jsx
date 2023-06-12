import "./App.css";
import { TbBrandReactNative } from "react-icons/tb";
import { GlobalStyle } from "./root/GlobalStyle";
import styled from "styled-components";
import { useRef, useState } from "react";

import ExcelJS from "exceljs";
//https://github.com/exceljs/exceljs
const data = [
  {
    FNAME: "Hillary",
    LNAME: "Hampton",
    AGE: 43,
    GEN: "female",
    CITY: "Gilmore",
    EMAIL: "hillaryhampton@oce.com",
    PHONE: "591459020",
  },
  {
    FNAME: "Roslyn",
    LNAME: "Parrish",
    AGE: 56,
    GEN: "female",
    CITY: "Como",
    EMAIL: "roslynparrish@oce.com",
    PHONE: "591346820",
  },
  {
    FNAME: "Jean",
    LNAME: "Bryant",
    AGE: 53,
    GEN: "female",
    CITY: "Vernon",
    EMAIL: "jeanbryant@oce.com",
    PHONE: "596658622",
  },
  {
    FNAME: "Cara",
    LNAME: "Good",
    AGE: 56,
    GEN: "female",
    CITY: "Indio",
    EMAIL: "caragood@oce.com",
    PHONE: "591543923",
  },
  {
    FNAME: "Hurst",
    LNAME: "Herman",
    AGE: 38,
    GEN: "male",
    CITY: "Sperryville",
    EMAIL: "hurstherman@oce.com",
    PHONE: "592440625",
  },
  {
    FNAME: "Frost",
    LNAME: "Vance",
    AGE: 27,
    GEN: "male",
    CITY: "Westerville",
    EMAIL: "frostvance@oce.com",
    PHONE: "585158621",
  },
  {
    FNAME: "Randi",
    LNAME: "Gordon",
    AGE: 45,
    GEN: "female",
    CITY: "Fivepointville",
    EMAIL: "randigordon@oce.com",
    PHONE: "596342221",
  },
  {
    FNAME: "Jensen",
    LNAME: "Hull",
    AGE: 43,
    GEN: "male",
    CITY: "Woodlake",
    EMAIL: "jensenhull@oce.com",
    PHONE: "587350025",
  },
  {
    FNAME: "Salazar",
    LNAME: "Dean",
    AGE: 60,
    GEN: "male",
    CITY: "Brewster",
    EMAIL: "salazardean@oce.com",
    PHONE: "596341536",
  },
  {
    FNAME: "Dawson",
    LNAME: "Joyce",
    AGE: 56,
    GEN: "male",
    CITY: "Muir",
    EMAIL: "dawsonjoyce@oce.com",
    PHONE: "582351636",
  },
  {
    FNAME: "Sellers",
    LNAME: "Potter",
    AGE: 49,
    GEN: "male",
    CITY: "Wadsworth",
    EMAIL: "sellerspotter@oce.com",
    PHONE: "593051621",
  },
  {
    FNAME: "Lynn",
    LNAME: "Delacruz",
    AGE: 30,
    GEN: "female",
    CITY: "Cherokee",
    EMAIL: "lynndelacruz@oce.com",
    PHONE: "586349126",
  },
  {
    FNAME: "Magdalena",
    LNAME: "Atkins",
    AGE: 29,
    GEN: "female",
    CITY: "Troy",
    EMAIL: "magdalenaatkins@oce.com",
    PHONE: "594857831",
  },
  {
    FNAME: "Vazquez",
    LNAME: "Roach",
    AGE: 51,
    GEN: "male",
    CITY: "Durham",
    EMAIL: "vazquezroach@oce.com",
    PHONE: "596348423",
  },
  {
    FNAME: "Melton",
    LNAME: "Allison",
    AGE: 39,
    GEN: "male",
    CITY: "Coral",
    EMAIL: "meltonallison@oce.com",
    PHONE: "598650723",
  },
  {
    FNAME: "Gladys",
    LNAME: "Cantu",
    AGE: 43,
    GEN: "female",
    CITY: "Springville",
    EMAIL: "gladyscantu@oce.com",
    PHONE: "583151631",
  },
  {
    FNAME: "Elva",
    LNAME: "Ellison",
    AGE: 60,
    GEN: "female",
    CITY: "Crenshaw",
    EMAIL: "elvaellison@oce.com",
    PHONE: "581449036",
  },
  {
    FNAME: "Galloway",
    LNAME: "Shelton",
    AGE: 37,
    GEN: "male",
    CITY: "Virgie",
    EMAIL: "gallowayshelton@oce.com",
    PHONE: "594853536",
  },
  {
    FNAME: "English",
    LNAME: "Swanson",
    AGE: 40,
    GEN: "male",
    CITY: "Coyote",
    EMAIL: "englishswanson@oce.com",
    PHONE: "593755738",
  },
  {
    FNAME: "Carroll",
    LNAME: "Tate",
    AGE: 52,
    GEN: "male",
    CITY: "Longoria",
    EMAIL: "carrolltate@oce.com",
    PHONE: "585856232",
  },
  {
    FNAME: "Stafford",
    LNAME: "Haynes",
    AGE: 35,
    GEN: "male",
    CITY: "Worcester",
    EMAIL: "staffordhaynes@oce.com",
    PHONE: "589153625",
  },
  {
    FNAME: "Ellen",
    LNAME: "Cobb",
    AGE: 58,
    GEN: "female",
    CITY: "Sunwest",
    EMAIL: "ellencobb@oce.com",
    PHONE: "597642131",
  },
  {
    FNAME: "Pollard",
    LNAME: "Hunt",
    AGE: 50,
    GEN: "male",
    CITY: "Templeton",
    EMAIL: "pollardhunt@oce.com",
    PHONE: "599851220",
  },
  {
    FNAME: "Elisa",
    LNAME: "Villarreal",
    AGE: 22,
    GEN: "female",
    CITY: "Bentonville",
    EMAIL: "elisavillarreal@oce.com",
    PHONE: "583658337",
  },
  {
    FNAME: "Newton",
    LNAME: "Morales",
    AGE: 39,
    GEN: "male",
    CITY: "Riviera",
    EMAIL: "newtonmorales@oce.com",
    PHONE: "589658137",
  },
  {
    FNAME: "Torres",
    LNAME: "Sparks",
    AGE: 42,
    GEN: "male",
    CITY: "Chemung",
    EMAIL: "torressparks@oce.com",
    PHONE: "589049620",
  },
  {
    FNAME: "Norman",
    LNAME: "Shaw",
    AGE: 26,
    GEN: "male",
    CITY: "Longbranch",
    EMAIL: "normanshaw@oce.com",
    PHONE: "582253431",
  },
  {
    FNAME: "Scott",
    LNAME: "Garza",
    AGE: 54,
    GEN: "male",
    CITY: "Austinburg",
    EMAIL: "scottgarza@oce.com",
    PHONE: "590042138",
  },
  {
    FNAME: "Sanchez",
    LNAME: "West",
    AGE: 26,
    GEN: "male",
    CITY: "Snyderville",
    EMAIL: "sanchezwest@oce.com",
    PHONE: "583153825",
  },
  {
    FNAME: "Lavonne",
    LNAME: "Glover",
    AGE: 23,
    GEN: "female",
    CITY: "Jacksonwald",
    EMAIL: "lavonneglover@oce.com",
    PHONE: "583255121",
  },
  {
    FNAME: "Howard",
    LNAME: "Ewing",
    AGE: 37,
    GEN: "male",
    CITY: "Staples",
    EMAIL: "howardewing@oce.com",
    PHONE: "587345229",
  },
  {
    FNAME: "Pam",
    LNAME: "Clay",
    AGE: 28,
    GEN: "female",
    CITY: "Wildwood",
    EMAIL: "pamclay@oce.com",
    PHONE: "593245636",
  },
  {
    FNAME: "Corina",
    LNAME: "Gibbs",
    AGE: 33,
    GEN: "female",
    CITY: "Corriganville",
    EMAIL: "corinagibbs@oce.com",
    PHONE: "580655137",
  },
  {
    FNAME: "Wolfe",
    LNAME: "Stewart",
    AGE: 37,
    GEN: "male",
    CITY: "Lewis",
    EMAIL: "wolfestewart@oce.com",
    PHONE: "582248227",
  },
  {
    FNAME: "Kristi",
    LNAME: "Blair",
    AGE: 44,
    GEN: "female",
    CITY: "Groton",
    EMAIL: "kristiblair@oce.com",
    PHONE: "581948030",
  },
  {
    FNAME: "Donna",
    LNAME: "Cherry",
    AGE: 26,
    GEN: "female",
    CITY: "Hartley",
    EMAIL: "donnacherry@oce.com",
    PHONE: "585458720",
  },
  {
    FNAME: "Oneal",
    LNAME: "Spears",
    AGE: 29,
    GEN: "male",
    CITY: "Detroit",
    EMAIL: "onealspears@oce.com",
    PHONE: "597949730",
  },
  {
    FNAME: "Rollins",
    LNAME: "Fox",
    AGE: 32,
    GEN: "male",
    CITY: "Caledonia",
    EMAIL: "rollinsfox@oce.com",
    PHONE: "589650621",
  },
  {
    FNAME: "Forbes",
    LNAME: "Melendez",
    AGE: 36,
    GEN: "male",
    CITY: "Gambrills",
    EMAIL: "forbesmelendez@oce.com",
    PHONE: "590048827",
  },
  {
    FNAME: "Lorie",
    LNAME: "Peterson",
    AGE: 51,
    GEN: "female",
    CITY: "Cashtown",
    EMAIL: "loriepeterson@oce.com",
    PHONE: "592146427",
  },
  {
    FNAME: "Kerri",
    LNAME: "Moss",
    AGE: 31,
    GEN: "female",
    CITY: "Grantville",
    EMAIL: "kerrimoss@oce.com",
    PHONE: "594553027",
  },
  {
    FNAME: "Danielle",
    LNAME: "Huffman",
    AGE: 37,
    GEN: "female",
    CITY: "Kohatk",
    EMAIL: "daniellehuffman@oce.com",
    PHONE: "582857537",
  },
  {
    FNAME: "Chase",
    LNAME: "Harding",
    AGE: 22,
    GEN: "male",
    CITY: "Garnet",
    EMAIL: "chaseharding@oce.com",
    PHONE: "588153725",
  },
  {
    FNAME: "Keri",
    LNAME: "Matthews",
    AGE: 38,
    GEN: "female",
    CITY: "Bowmansville",
    EMAIL: "kerimatthews@oce.com",
    PHONE: "585651829",
  },
  {
    FNAME: "Mallory",
    LNAME: "Barrera",
    AGE: 25,
    GEN: "female",
    CITY: "Oceola",
    EMAIL: "mallorybarrera@oce.com",
    PHONE: "590655824",
  },
  {
    FNAME: "Elvira",
    LNAME: "Benjamin",
    AGE: 45,
    GEN: "female",
    CITY: "Darrtown",
    EMAIL: "elvirabenjamin@oce.com",
    PHONE: "584557720",
  },
  {
    FNAME: "Santos",
    LNAME: "Gilliam",
    AGE: 48,
    GEN: "male",
    CITY: "Coldiron",
    EMAIL: "santosgilliam@oce.com",
    PHONE: "581644639",
  },
  {
    FNAME: "Cristina",
    LNAME: "Fuller",
    AGE: 21,
    GEN: "female",
    CITY: "Titanic",
    EMAIL: "cristinafuller@oce.com",
    PHONE: "596654028",
  },
  {
    FNAME: "Ewing",
    LNAME: "Harris",
    AGE: 45,
    GEN: "male",
    CITY: "Oretta",
    EMAIL: "ewingharris@oce.com",
    PHONE: "584459434",
  },
  {
    FNAME: "Miriam",
    LNAME: "Kelly",
    AGE: 35,
    GEN: "female",
    CITY: "Weogufka",
    EMAIL: "miriamkelly@oce.com",
    PHONE: "583451834",
  },
  {
    FNAME: "Olivia",
    LNAME: "Palmer",
    AGE: 44,
    GEN: "female",
    CITY: "Bluetown",
    EMAIL: "oliviapalmer@oce.com",
    PHONE: "595148336",
  },
  {
    FNAME: "Dina",
    LNAME: "Collins",
    AGE: 24,
    GEN: "female",
    CITY: "Strykersville",
    EMAIL: "dinacollins@oce.com",
    PHONE: "588258327",
  },
  {
    FNAME: "Mildred",
    LNAME: "Castro",
    AGE: 21,
    GEN: "female",
    CITY: "Irwin",
    EMAIL: "mildredcastro@oce.com",
    PHONE: "586247736",
  },
  {
    FNAME: "Margo",
    LNAME: "Mooney",
    AGE: 30,
    GEN: "female",
    CITY: "Martinez",
    EMAIL: "margomooney@oce.com",
    PHONE: "585558137",
  },
  {
    FNAME: "Hall",
    LNAME: "Elliott",
    AGE: 51,
    GEN: "male",
    CITY: "Enoree",
    EMAIL: "hallelliott@oce.com",
    PHONE: "598348136",
  },
  {
    FNAME: "Miranda",
    LNAME: "Moran",
    AGE: 60,
    GEN: "female",
    CITY: "Berwind",
    EMAIL: "mirandamoran@oce.com",
    PHONE: "588546330",
  },
  {
    FNAME: "Tia",
    LNAME: "Smith",
    AGE: 24,
    GEN: "female",
    CITY: "Columbus",
    EMAIL: "tiasmith@oce.com",
    PHONE: "595350928",
  },
  {
    FNAME: "Anthony",
    LNAME: "Conrad",
    AGE: 59,
    GEN: "male",
    CITY: "Linwood",
    EMAIL: "anthonyconrad@oce.com",
    PHONE: "595348325",
  },
  {
    FNAME: "Acevedo",
    LNAME: "Talley",
    AGE: 38,
    GEN: "male",
    CITY: "Jacksonburg",
    EMAIL: "acevedotalley@oce.com",
    PHONE: "581252734",
  },
];

const exportExcelFile = () => {
  const workbook = new ExcelJS.Workbook();
  const ws = workbook.addWorksheet("GPXcript", { properties: { tabColor: { argb: "FFC0000" } } });

  ws.addTable({
    name: "MyTable",
    ref: "A1",
    headerRow: true,
    totalsRow: true,
    style: {
      theme: "TableStyleLight9",
      showRowStripes: true,
    },
    columns: headerify(), //[ ...{name: 'Date'}...],
    rows: datafy(), //[ ...  [Hillary,	Hampton] ...]
  });

  function headerify() {
    let columns = [];
    let headers = Object.keys(data[0]);
    for (let i = 0; i < headers.length; i++) {
      columns.push({ name: headers[i] });
    }
    columns.at(-1).totalsRowFunction = "count"; //optional
    columns.at(-5).totalsRowFunction = "average"; //optional

    return columns;
  }

  function datafy() {
    let rows = [];
    for (let i = 0; i < data.length; i++) {
      let values = Object.values(data[i]);
      rows.push(values);
    }
    return rows;
  }

  workbook.xlsx.writeBuffer().then(function (data) {
    const blob = new Blob([data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "GPXcript.xlsx";
    anchor.click();
    window.URL.revokeObjectURL(url);
  });
};

function App() {
  const refContainer = useRef(null);

  return (
    <>
      <GlobalStyle />
      <button onClick={exportExcelFile}>Get .xlsx</button>
      <table ref={refContainer}>
        <thead>
          <tr>
            <th>FNAME</th>
            <th>LNAME</th>
            <th>AGE</th>
            <th>GEN</th>
            <th>CITY</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
          {/* <tr>
            {sss.map((id) => (
              <th key={id}>
                <input type="text" onChange={(e) => handler(e, id)} />
              </th>
            ))}
          </tr> */}
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr>
              <td>{row?.FNAME}</td>
              <td>{row?.LNAME}</td>
              <td>{row?.AGE}</td>
              <td>{row?.GEN}</td>
              <td>{row?.CITY}</td>
              <td>{row?.EMAIL}</td>
              <td>{row?.PHONE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
