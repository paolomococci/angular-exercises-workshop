import {
  Component,
  OnInit
} from '@angular/core'

import { Element } from 'src/app/models/element.model'

const ELEMENT_DATA: Element[] = [
  {atomic:1, symbol:'H', name:'Hydrogen', group:'nonmetal', mass:1.0079, weight:1, radioactive:false, artificially:false},
  {atomic:2, symbol:'He', name:'Helium', group:'noble gas', mass:4.0026, weight:4, radioactive:false, artificially:false},
  {atomic:3, symbol:'Li', name:'Lithium', group:'alkali metal', mass:6.941, weight:7, radioactive:false, artificially:false},
  {atomic:4, symbol:'Be', name:'Beryllium', group:'alkaline earth metal', mass:9.0122, weight:9, radioactive:false, artificially:false},
  {atomic:5, symbol:'B', name:'Boron', group:'metalloid', mass:10.811, weight:11, radioactive:false, artificially:false},
  {atomic:6, symbol:'C', name:'Carbon', group:'nonmetal', mass:12.0107, weight:12, radioactive:false, artificially:false},
  {atomic:7, symbol:'N', name:'Nitrogen', group:'nonmetal', mass:14.0067, weight:14, radioactive:false, artificially:false},
  {atomic:8, symbol:'O', name:'Oxygen', group:'nonmetal', mass:15.9994, weight:16, radioactive:false, artificially:false},
  {atomic:9, symbol:'F', name:'Fluorine', group:'halogen', mass:18.9984, weight:19, radioactive:false, artificially:false},
  {atomic:10, symbol:'Ne', name:'Neon', group:'noble gas', mass:20.1797, weight:20, radioactive:false, artificially:false},
  {atomic:11, symbol:'Na', name:'Sodium', group:'alkali metal', mass:22.9897, weight:23, radioactive:false, artificially:false},
  {atomic:12, symbol:'Mg', name:'Magnesium', group:'alkaline earth metal', mass:24.305, weight:24, radioactive:false, artificially:false},
  {atomic:13, symbol:'Al', name:'Aluminum', group:'post-transition metal', mass:26.9815, weight:27, radioactive:false, artificially:false},
  {atomic:14, symbol:'Si', name:'Silicon', group:'metalloid', mass:28.0855, weight:28, radioactive:false, artificially:false},
  {atomic:15, symbol:'P', name:'Phosphorus', group:'nonmetal', mass:30.9738, weight:31, radioactive:false, artificially:false},
  {atomic:16, symbol:'S', name:'Sulfur', group:'nonmetal', mass:32.065, weight:32, radioactive:false, artificially:false},
  {atomic:17, symbol:'Cl', name:'Chlorin', group:'halogen', mass:35.453, weight:35, radioactive:false, artificially:false},
  {atomic:18, symbol:'Ar', name:'Argon', group:'noble gas', mass:39.948, weight:40, radioactive:false, artificially:false},
  {atomic:19, symbol:'K', name:'Potassium', group:'alkali metal', mass:39.0983, weight:39, radioactive:false, artificially:false},
  {atomic:20, symbol:'Ca', name:'Calcium', group:'alkaline earth metal', mass:40.078, weight:40, radioactive:false, artificially:false},
  {atomic:21, symbol:'Sc', name:'Scandium', group:'transition metal', mass:44.9559, weight:45, radioactive:false, artificially:false},
  {atomic:22, symbol:'Ti', name:'Titanium', group:'transition metal', mass:47.867, weight:48, radioactive:false, artificially:false},
  {atomic:23, symbol:'V', name:'Vanadium', group:'transition metal', mass:50.9415, weight:51, radioactive:false, artificially:false},
  {atomic:24, symbol:'Cr', name:'Chromium', group:'transition metal', mass:51.9961, weight:52, radioactive:false, artificially:false},
  {atomic:25, symbol:'Mn', name:'Manganese', group:'transition metal', mass:54.938, weight:55, radioactive:false, artificially:false},
  {atomic:26, symbol:'Fe', name:'Iron', group:'transition metal', mass:55.845, weight:56, radioactive:false, artificially:false},
  {atomic:27, symbol:'Co', name:'Cobalt', group:'transition metal', mass:58.9332, weight:59, radioactive:false, artificially:false},
  {atomic:28, symbol:'Ni', name:'Nickel', group:'transition metal', mass:58.6934, weight:59, radioactive:false, artificially:false},
  {atomic:29, symbol:'Cu', name:'Copper', group:'transition metal', mass:63.546, weight:64, radioactive:false, artificially:false},
  {atomic:30, symbol:'Zn', name:'Zinc', group:'transition metal', mass:65.39, weight:65, radioactive:false, artificially:false},
  {atomic:31, symbol:'Ga', name:'Gallium', group:'post-transition metal', mass:69.723, weight:70, radioactive:false, artificially:false},
  {atomic:32, symbol:'Ge', name:'Germanium', group:'metalloid', mass:72.64, weight:73, radioactive:false, artificially:false},
  {atomic:33, symbol:'As', name:'Arsenic', group:'metalloid', mass:74.9216, weight:75, radioactive:false, artificially:false},
  {atomic:34, symbol:'Se', name:'Selenium', group:'nonmetal', mass:78.96, weight:79, radioactive:false, artificially:false},
  {atomic:35, symbol:'Br', name:'Bromine', group:'halogen', mass:79.904, weight:80, radioactive:false, artificially:false},
  {atomic:36, symbol:'Kr', name:'Krypton', group:'noble gas', mass:83.8, weight:84, radioactive:false, artificially:false},
  {atomic:37, symbol:'Rb', name:'Rubidium', group:'alkali metal', mass:85.4678, weight:85, radioactive:false, artificially:false},
  {atomic:38, symbol:'Sr', name:'Strontium', group:'alkaline earth metal', mass:87.62, weight:88, radioactive:false, artificially:false},
  {atomic:39, symbol:'Y', name:'Yttrium', group:'transition metal', mass:88.9059, weight:89, radioactive:false, artificially:false},
  {atomic:40, symbol:'Zr', name:'Zirconium', group:'transition metal', mass:91.224, weight:91, radioactive:false, artificially:false},
  {atomic:41, symbol:'Nb', name:'Niobium', group:'transition metal', mass:92.9064, weight:93, radioactive:false, artificially:false},
  {atomic:42, symbol:'Mo', name:'Molybdenum', group:'transition metal', mass:95.94, weight:96, radioactive:false, artificially:false},
  {atomic:43, symbol:'Tc', name:'Technetium', group:'transition metal', mass:98, weight:98, radioactive:true, artificially:false},
  {atomic:44, symbol:'Ru', name:'Ruthenium', group:'transition metal', mass:101.07, weight:101, radioactive:false, artificially:false},
  {atomic:45, symbol:'Rh', name:'Rhodium', group:'transition metal', mass:102.9055, weight:103, radioactive:false, artificially:false},
  {atomic:46, symbol:'Pd', name:'Palladium', group:'transition metal', mass:106.42, weight:106, radioactive:false, artificially:false},
  {atomic:47, symbol:'Ag', name:'Silver', group:'transition metal', mass:107.8682, weight:108, radioactive:false, artificially:false},
  {atomic:48, symbol:'Cd', name:'Cadmium', group:'transition metal', mass:112.411, weight:112, radioactive:false, artificially:false},
  {atomic:49, symbol:'In', name:'Indium', group:'post-transition metal', mass:114.818, weight:115, radioactive:false, artificially:false},
  {atomic:50, symbol:'Sn', name:'Tin', group:'post-transition metal', mass:118.71, weight:119, radioactive:false, artificially:false},
  {atomic:51, symbol:'Sb', name:'Antimony', group:'metalloid', mass:121.76, weight:122, radioactive:false, artificially:false},
  {atomic:52, symbol:'Te', name:'Tellurium', group:'metalloid', mass:127.6, weight:128, radioactive:false, artificially:false},
  {atomic:53, symbol:'I', name:'Iodine', group:'halogen', mass:126.9045, weight:127, radioactive:false, artificially:false},
  {atomic:54, symbol:'Xe', name:'Xenon', group:'noble gas', mass:131.293, weight:131, radioactive:false, artificially:false},
  {atomic:55, symbol:'Cs', name:'Cesium', group:'alkali metal', mass:132.9055, weight:133, radioactive:false, artificially:false},
  {atomic:56, symbol:'Ba', name:'Barium', group:'alkaline earth metal', mass:137.327, weight:137, radioactive:false, artificially:false},
  {atomic:57, symbol:'La', name:'Lanthanum', group:'lanthanide', mass:138.9055, weight:139, radioactive:false, artificially:false},
  {atomic:58, symbol:'Ce', name:'Cerium', group:'lanthanide', mass:140.116, weight:140, radioactive:false, artificially:false},
  {atomic:59, symbol:'Pr', name:'Praseodymium', group:'lanthanide', mass:140.9077, weight:141, radioactive:false, artificially:false},
  {atomic:60, symbol:'Nd', name:'Neodymium', group:'lanthanide', mass:144.24, weight:144, radioactive:false, artificially:false},
  {atomic:61, symbol:'Pm', name:'Promethium', group:'lanthanide', mass:145, weight:145, radioactive:true, artificially:false},
  {atomic:62, symbol:'Sm', name:'Samarium', group:'lanthanide', mass:150.36, weight:150, radioactive:false, artificially:false},
  {atomic:63, symbol:'Eu', name:'Europium', group:'lanthanide', mass:151.964, weight:152, radioactive:false, artificially:false},
  {atomic:64, symbol:'Gd', name:'Gadolinium', group:'lanthanide', mass:157.25, weight:157, radioactive:false, artificially:false},
  {atomic:65, symbol:'Tb', name:'Terbium', group:'lanthanide', mass:158.9253, weight:159, radioactive:false, artificially:false},
  {atomic:66, symbol:'Dy', name:'Dysprosium', group:'lanthanide', mass:162.5, weight:163, radioactive:false, artificially:false},
  {atomic:67, symbol:'Ho', name:'Holmium', group:'lanthanide', mass:164.9303, weight:165, radioactive:false, artificially:false},
  {atomic:68, symbol:'Er', name:'Erbium', group:'lanthanide', mass:167.259, weight:167, radioactive:false, artificially:false},
  {atomic:69, symbol:'Tm', name:'Thulium', group:'lanthanide', mass:168.9342, weight:169, radioactive:false, artificially:false},
  {atomic:70, symbol:'Yb', name:'Ytterbium', group:'lanthanide', mass:173.04, weight:173, radioactive:false, artificially:false},
  {atomic:71, symbol:'Lu', name:'Lutetium', group:'lanthanide', mass:174.967, weight:175, radioactive:false, artificially:false},
  {atomic:72, symbol:'Hf', name:'null', group:'null', mass:178.49, weight:178, radioactive:false, artificially:false},
  {atomic:73, symbol:'Ta', name:'null', group:'null', mass:180.9479, weight:181, radioactive:false, artificially:false},
  {atomic:74, symbol:'W', name:'null', group:'null', mass:183.84, weight:184, radioactive:false, artificially:false},
  {atomic:75, symbol:'Re', name:'null', group:'null', mass:186.207, weight:186, radioactive:false, artificially:false},
  {atomic:76, symbol:'Os', name:'null', group:'null', mass:190.23, weight:190, radioactive:false, artificially:false},
  {atomic:77, symbol:'Ir', name:'null', group:'null', mass:192.217, weight:192, radioactive:false, artificially:false},
  {atomic:78, symbol:'Pt', name:'null', group:'null', mass:195.078, weight:195, radioactive:false, artificially:false},
  {atomic:79, symbol:'Au', name:'null', group:'null', mass:196.9665, weight:197, radioactive:false, artificially:false},
  {atomic:80, symbol:'Hg', name:'null', group:'null', mass:200.59, weight:201, radioactive:false, artificially:false},
  {atomic:81, symbol:'Tl', name:'null', group:'null', mass:204.3833, weight:204, radioactive:false, artificially:false},
  {atomic:82, symbol:'Pb', name:'null', group:'null', mass:207.2, weight:207, radioactive:false, artificially:false},
  {atomic:83, symbol:'Bi', name:'null', group:'null', mass:208.9804, weight:209, radioactive:true, artificially:false},
  {atomic:84, symbol:'Po', name:'null', group:'null', mass:209, weight:209, radioactive:true, artificially:false},
  {atomic:85, symbol:'At', name:'null', group:'null', mass:210, weight:210, radioactive:true, artificially:false},
  {atomic:86, symbol:'Rn', name:'null', group:'null', mass:222, weight:222, radioactive:true, artificially:false},
  {atomic:87, symbol:'Fr', name:'null', group:'null', mass:223, weight:223, radioactive:true, artificially:false},
  {atomic:88, symbol:'Ra', name:'null', group:'null', mass:226, weight:226, radioactive:true, artificially:false},
  {atomic:89, symbol:'Ac', name:'null', group:'null', mass:227, weight:227, radioactive:true, artificially:false},
  {atomic:90, symbol:'Th', name:'null', group:'null', mass:232.0381, weight:232, radioactive:true, artificially:false},
  {atomic:91, symbol:'Pa', name:'null', group:'null', mass:231.0359, weight:231, radioactive:true, artificially:false},
  {atomic:92, symbol:'U', name:'null', group:'null', mass:238.0289, weight:238, radioactive:true, artificially:false},
  {atomic:93, symbol:'Np', name:'null', group:'null', mass:237, weight:237, radioactive:true, artificially:true},
  {atomic:94, symbol:'Pu', name:'null', group:'null', mass:244, weight:244, radioactive:true, artificially:true},
  {atomic:95, symbol:'Am', name:'null', group:'null', mass:243, weight:243, radioactive:true, artificially:true},
  {atomic:96, symbol:'Cm', name:'null', group:'null', mass:247, weight:247, radioactive:true, artificially:true},
  {atomic:97, symbol:'Bk', name:'null', group:'null', mass:247, weight:247, radioactive:true, artificially:true},
  {atomic:98, symbol:'Cf', name:'null', group:'null', mass:251, weight:251, radioactive:true, artificially:true},
  {atomic:99, symbol:'Es', name:'null', group:'null', mass:252, weight:252, radioactive:true, artificially:true},
  {atomic:100, symbol:'Fm', name:'null', group:'null', mass:257, weight:257, radioactive:true, artificially:true},
  {atomic:101, symbol:'Md', name:'null', group:'null', mass:258, weight:258, radioactive:true, artificially:true},
  {atomic:102, symbol:'No', name:'null', group:'null', mass:259, weight:259, radioactive:true, artificially:true},
  {atomic:103, symbol:'Lr', name:'null', group:'null', mass:262, weight:262, radioactive:true, artificially:true},
  {atomic:104, symbol:'Rf', name:'null', group:'null', mass:261, weight:263, radioactive:true, artificially:true},
  {atomic:105, symbol:'Db', name:'null', group:'null', mass:262, weight:268, radioactive:true, artificially:true},
  {atomic:106, symbol:'Sg', name:'null', group:'null', mass:266, weight:271, radioactive:true, artificially:true},
  {atomic:107, symbol:'Bh', name:'null', group:'null', mass:264, weight:270, radioactive:true, artificially:true},
  {atomic:108, symbol:'Hs', name:'null', group:'null', mass:277, weight:270, radioactive:true, artificially:true},
  {atomic:109, symbol:'Mt', name:'null', group:'null', mass:268, weight:278, radioactive:true, artificially:true},
  {atomic:110, symbol:'Ds', name:'null', group:'null', mass:281, weight:281, radioactive:true, artificially:true},
  {atomic:111, symbol:'Rg', name:'null', group:'null', mass:272, weight:281, radioactive:true, artificially:true},
  {atomic:112, symbol:'Cn', name:'null', group:'null', mass:285, weight:285, radioactive:true, artificially:true},
  {atomic:113, symbol:'Nh', name:'null', group:'null', mass:286, weight:286, radioactive:true, artificially:true},
  {atomic:114, symbol:'Fl', name:'null', group:'null', mass:289, weight:289, radioactive:true, artificially:true},
  {atomic:115, symbol:'Mc', name:'null', group:'null', mass:290, weight:289, radioactive:true, artificially:true},
  {atomic:116, symbol:'Lv', name:'null', group:'null', mass:293, weight:293, radioactive:true, artificially:true},
  {atomic:117, symbol:'Ts', name:'null', group:'null', mass:294, weight:294, radioactive:true, artificially:true},
  {atomic:118, symbol:'Og', name:'null', group:'null', mass:294, weight:294, radioactive:true, artificially:true}
]

@Component({
  selector: 'app-kind',
  templateUrl: './kind.component.html',
  styleUrls: ['./kind.component.sass']
})
export class KindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
