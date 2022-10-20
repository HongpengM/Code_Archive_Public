'use strict';
const colorT = {
  'black': '#000000',
  'navy': '#000080',
  'darkblue': '#00008b',
  'mediumblue': '#0000cd',
  'blue': '#0000ff',
  'darkgreen': '#006400',
  'green': '#008000',
  'teal': '#008080',
  'darkcyan': '#008b8b',
  'deepskyblue': '#00bfff',
  'darkturquoise': '#00ced1',
  'mediumspringgreen': '#00fa9a',
  'lime': '#00ff00',
  'springgreen': '#00ff7f',
  'aqua': '#00ffff',
  'cyan': '#00ffff',
  'midnightblue': '#191970',
  'dodgerblue': '#1e90ff',
  'lightseagreen': '#20b2aa',
  'forestgreen': '#228b22',
  'seagreen': '#2e8b57',
  'darkslategray': '#2f4f4f',
  'darkslategrey': '#2f4f4f',
  'limegreen': '#32cd32',
  'mediumseagreen': '#3cb371',
  'turquoise': '#40e0d0',
  'royalblue': '#4169e1',
  'steelblue': '#4682b4',
  'darkslateblue': '#483d8b',
  'mediumturquoise': '#48d1cc',
  'indigo':  '#4b0082',
  'darkolivegreen': '#556b2f',
  'cadetblue': '#5f9ea0',
  'cornflowerblue': '#6495ed',
  'rebeccapurple': '#663399',
  'mediumaquamarine': '#66cdaa',
  'dimgray': '#696969',
  'dimgrey': '#696969',
  'slateblue': '#6a5acd',
  'olivedrab': '#6b8e23',
  'slategray': '#708090',
  'slategrey': '#708090',
  'lightslategray': '#778899',
  'lightslategrey': '#778899',
  'mediumslateblue': '#7b68ee',
  'lawngreen': '#7cfc00',
  'chartreuse': '#7fff00',
  'aquamarine': '#7fffd4',
  'maroon': '#800000',
  'purple': '#800080',
  'olive': '#808000',
  'gray': '#808080',
  'grey': '#808080',
  'skyblue': '#87ceeb',
  'lightskyblue': '#87cefa',
  'blueviolet': '#8a2be2',
  'darkred': '#8b0000',
  'darkmagenta': '#8b008b',
  'saddlebrown': '#8b4513',
  'darkseagreen': '#8fbc8f',
  'lightgreen': '#90ee90',
  'mediumpurple': '#9370db',
  'darkviolet': '#9400d3',
  'palegreen': '#98fb98',
  'darkorchid': '#9932cc',
  'yellowgreen': '#9acd32',
  'sienna': '#a0522d',
  'brown': '#a52a2a',
  'darkgray': '#a9a9a9',
  'darkgrey': '#a9a9a9',
  'lightblue': '#add8e6',
  'greenyellow': '#adff2f',
  'paleturquoise': '#afeeee',
  'lightsteelblue': '#b0c4de',
  'powderblue': '#b0e0e6',
  'firebrick': '#b22222',
  'darkgoldenrod': '#b8860b',
  'mediumorchid': '#ba55d3',
  'rosybrown': '#bc8f8f',
  'darkkhaki': '#bdb76b',
  'silver': '#c0c0c0',
  'mediumvioletred': '#c71585',
  'indianred':  '#cd5c5c',
  'peru': '#cd853f',
  'chocolate': '#d2691e',
  'tan': '#d2b48c',
  'lightgray': '#d3d3d3',
  'lightgrey': '#d3d3d3',
  'thistle': '#d8bfd8',
  'orchid': '#da70d6',
  'goldenrod': '#daa520',
  'palevioletred': '#db7093',
  'crimson': '#dc143c',
  'gainsboro': '#dcdcdc',
  'plum': '#dda0dd',
  'burlywood': '#deb887',
  'lightcyan': '#e0ffff',
  'lavender': '#e6e6fa',
  'darksalmon': '#e9967a',
  'violet': '#ee82ee',
  'palegoldenrod': '#eee8aa',
  'lightcoral': '#f08080',
  'khaki': '#f0e68c',
  'aliceblue': '#f0f8ff',
  'honeydew': '#f0fff0',
  'azure': '#f0ffff',
  'sandybrown': '#f4a460',
  'wheat': '#f5deb3',
  'beige': '#f5f5dc',
  'whitesmoke': '#f5f5f5',
  'mintcream': '#f5fffa',
  'ghostwhite': '#f8f8ff',
  'salmon': '#fa8072',
  'antiquewhite': '#faebd7',
  'linen': '#faf0e6',
  'lightgoldenrodyellow': '#fafad2',
  'oldlace': '#fdf5e6',
  'red': '#ff0000',
  'fuchsia': '#ff00ff',
  'magenta': '#ff00ff',
  'deeppink': '#ff1493',
  'orangered': '#ff4500',
  'tomato': '#ff6347',
  'hotpink': '#ff69b4',
  'coral': '#ff7f50',
  'darkorange': '#ff8c00',
  'lightsalmon': '#ffa07a',
  'orange': '#ffa500',
  'lightpink': '#ffb6c1',
  'pink': '#ffc0cb',
  'gold': '#ffd700',
  'peachpuff': '#ffdab9',
  'navajowhite': '#ffdead',
  'moccasin': '#ffe4b5',
  'bisque': '#ffe4c4',
  'mistyrose': '#ffe4e1',
  'blanchedalmond': '#ffebcd',
  'papayawhip': '#ffefd5',
  'lavenderblush': '#fff0f5',
  'seashell': '#fff5ee',
  'cornsilk': '#fff8dc',
  'lemonchiffon': '#fffacd',
  'floralwhite': '#fffaf0',
  'snow': '#fffafa',
  'yellow': '#ffff00',
  'lightyellow': '#ffffe0',
  'ivory': '#fffff0',
  'white': '#ffffff',
}

const colorT2 = {
  "indian red":"#b0171f",
  "crimson":"#dc143c",
  "lightpink":"#ffb6c1",
  "lightpink 1":"#ffaeb9",
  "lightpink 2":"#eea2ad",
  "lightpink 3":"#cd8c95",
  "lightpink 4":"#8b5f65",
  "pink":"#ffc0cb",
  "pink 1":"#ffb5c5",
  "pink 2":"#eea9b8",
  "pink 3":"#cd919e",
  "pink 4":"#8b636c",
  "palevioletred":"#db7093",
  "palevioletred 1":"#ff82ab",
  "palevioletred 2":"#ee799f",
  "palevioletred 3":"#cd6889",
  "palevioletred 4":"#8b475d",
  "lavenderblush 1":"#fff0f5",
  "lavenderblush":"#fff0f5",
  "lavenderblush 2":"#eee0e5",
  "lavenderblush 3":"#cdc1c5",
  "lavenderblush 4":"#8b8386",
  "violetred 1":"#ff3e96",
  "violetred 2":"#ee3a8c",
  "violetred 3":"#cd3278",
  "violetred 4":"#8b2252",
  "hotpink":"#ff69b4",
  "hotpink 1":"#ff6eb4",
  "hotpink 2":"#ee6aa7",
  "hotpink 3":"#cd6090",
  "hotpink 4":"#8b3a62",
  "raspberry":"#872657",
  "deeppink 1":"#ff1493",
  "deeppink":"#ff1493",
  "deeppink 2":"#ee1289",
  "deeppink 3":"#cd1076",
  "deeppink 4":"#8b0a50",
  "maroon 1":"#ff34b3",
  "maroon 2":"#ee30a7",
  "maroon 3":"#cd2990",
  "maroon 4":"#8b1c62",
  "mediumvioletred":"#c71585",
  "violetred":"#d02090",
  "orchid":"#da70d6",
  "orchid 1":"#ff83fa",
  "orchid 2":"#ee7ae9",
  "orchid 3":"#cd69c9",
  "orchid 4":"#8b4789",
  "thistle":"#d8bfd8",
  "thistle 1":"#ffe1ff",
  "thistle 2":"#eed2ee",
  "thistle 3":"#cdb5cd",
  "thistle 4":"#8b7b8b",
  "plum 1":"#ffbbff",
  "plum 2":"#eeaeee",
  "plum 3":"#cd96cd",
  "plum 4":"#8b668b",
  "plum":"#dda0dd",
  "violet":"#ee82ee",
  "magenta":"#ff00ff",
  "fuchsia":"#ff00ff",
  "magenta 2":"#ee00ee",
  "magenta 3":"#cd00cd",
  "magenta 4":"#8b008b",
  "darkmagenta":"#8b008b",
  "purple":"#800080",
  "mediumorchid":"#ba55d3",
  "mediumorchid 1":"#e066ff",
  "mediumorchid 2":"#d15fee",
  "mediumorchid 3":"#b452cd",
  "mediumorchid 4":"#7a378b",
  "darkviolet":"#9400d3",
  "darkorchid":"#9932cc",
  "darkorchid 1":"#bf3eff",
  "darkorchid 2":"#b23aee",
  "darkorchid 3":"#9a32cd",
  "darkorchid 4":"#68228b",
  "indigo":"#4b0082",
  "blueviolet":"#8a2be2",
  "purple 1":"#9b30ff",
  "purple 2":"#912cee",
  "purple 3":"#7d26cd",
  "purple 4":"#551a8b",
  "mediumpurple":"#9370db",
  "mediumpurple 1":"#ab82ff",
  "mediumpurple 2":"#9f79ee",
  "mediumpurple 3":"#8968cd",
  "mediumpurple 4":"#5d478b",
  "darkslateblue":"#483d8b",
  "lightslateblue":"#8470ff",
  "mediumslateblue":"#7b68ee",
  "slateblue":"#6a5acd",
  "slateblue 1":"#836fff",
  "slateblue 2":"#7a67ee",
  "slateblue 3":"#6959cd",
  "slateblue 4":"#473c8b",
  "ghostwhite":"#f8f8ff",
  "lavender":"#e6e6fa",
  "blue":"#0000ff",
  "blue 2":"#0000ee",
  "blue 3":"#0000cd",
  "mediumblue":"#0000cd",
  "blue 4":"#00008b",
  "darkblue":"#00008b",
  "navy":"#000080",
  "midnightblue":"#191970",
  "cobalt":"#3d59ab",
  "royalblue":"#4169e1",
  "royalblue 1":"#4876ff",
  "royalblue 2":"#436eee",
  "royalblue 3":"#3a5fcd",
  "royalblue 4":"#27408b",
  "cornflowerblue":"#6495ed",
  "lightsteelblue":"#b0c4de",
  "lightsteelblue 1":"#cae1ff",
  "lightsteelblue 2":"#bcd2ee",
  "lightsteelblue 3":"#a2b5cd",
  "lightsteelblue 4":"#6e7b8b",
  "lightslategray":"#778899",
  "slategray":"#708090",
  "slategray 1":"#c6e2ff",
  "slategray 2":"#b9d3ee",
  "slategray 3":"#9fb6cd",
  "slategray 4":"#6c7b8b",
  "dodgerblue 1":"#1e90ff",
  "dodgerblue":"#1e90ff",
  "dodgerblue 2":"#1c86ee",
  "dodgerblue 3":"#1874cd",
  "dodgerblue 4":"#104e8b",
  "aliceblue":"#f0f8ff",
  "steelblue":"#4682b4",
  "steelblue 1":"#63b8ff",
  "steelblue 2":"#5cacee",
  "steelblue 3":"#4f94cd",
  "steelblue 4":"#36648b",
  "lightskyblue":"#87cefa",
  "lightskyblue 1":"#b0e2ff",
  "lightskyblue 2":"#a4d3ee",
  "lightskyblue 3":"#8db6cd",
  "lightskyblue 4":"#607b8b",
  "skyblue 1":"#87ceff",
  "skyblue 2":"#7ec0ee",
  "skyblue 3":"#6ca6cd",
  "skyblue 4":"#4a708b",
  "skyblue":"#87ceeb",
  "deepskyblue 1":"#00bfff",
  "deepskyblue":"#00bfff",
  "deepskyblue 2":"#00b2ee",
  "deepskyblue 3":"#009acd",
  "deepskyblue 4":"#00688b",
  "peacock":"#33a1c9",
  "lightblue":"#add8e6",
  "lightblue 1":"#bfefff",
  "lightblue 2":"#b2dfee",
  "lightblue 3":"#9ac0cd",
  "lightblue 4":"#68838b",
  "powderblue":"#b0e0e6",
  "cadetblue 1":"#98f5ff",
  "cadetblue 2":"#8ee5ee",
  "cadetblue 3":"#7ac5cd",
  "cadetblue 4":"#53868b",
  "turquoise 1":"#00f5ff",
  "turquoise 2":"#00e5ee",
  "turquoise 3":"#00c5cd",
  "turquoise 4":"#00868b",
  "cadetblue":"#5f9ea0",
  "darkturquoise":"#00ced1",
  "azure 1":"#f0ffff",
  "azure":"#f0ffff",
  "azure 2":"#e0eeee",
  "azure 3":"#c1cdcd",
  "azure 4":"#838b8b",
  "lightcyan 1":"#e0ffff",
  "lightcyan":"#e0ffff",
  "lightcyan 2":"#d1eeee",
  "lightcyan 3":"#b4cdcd",
  "lightcyan 4":"#7a8b8b",
  "paleturquoise 1":"#bbffff",
  "paleturquoise 2":"#aeeeee",
  "paleturquoise":"#aeeeee",
  "paleturquoise 3":"#96cdcd",
  "paleturquoise 4":"#668b8b",
  "darkslategray":"#2f4f4f",
  "darkslategray 1":"#97ffff",
  "darkslategray 2":"#8deeee",
  "darkslategray 3":"#79cdcd",
  "darkslategray 4":"#528b8b",
  "cyan":"#00ffff",
  "aqua":"#00ffff",
  "cyan 2":"#00eeee",
  "cyan 3":"#00cdcd",
  "cyan 4":"#008b8b",
  "darkcyan":"#008b8b",
  "teal":"#008080",
  "mediumturquoise":"#48d1cc",
  "lightseagreen":"#20b2aa",
  "manganeseblue":"#03a89e",
  "turquoise":"#40e0d0",
  "coldgrey":"#808a87",
  "turquoiseblue":"#00c78c",
  "aquamarine 1":"#7fffd4",
  "aquamarine":"#7fffd4",
  "aquamarine 2":"#76eec6",
  "aquamarine 3":"#66cdaa",
  "mediumaquamarine":"#66cdaa",
  "aquamarine 4":"#458b74",
  "mediumspringgreen":"#00fa9a",
  "mintcream":"#f5fffa",
  "springgreen":"#00ff7f",
  "springgreen 1":"#00ee76",
  "springgreen 2":"#00cd66",
  "springgreen 3":"#008b45",
  "mediumseagreen":"#3cb371",
  "seagreen 1":"#54ff9f",
  "seagreen 2":"#4eee94",
  "seagreen 3":"#43cd80",
  "seagreen 4":"#2e8b57",
  "seagreen":"#2e8b57",
  "emeraldgreen":"#00c957",
  "mint":"#bdfcc9",
  "cobaltgreen":"#3d9140",
  "honeydew 1":"#f0fff0",
  "honeydew":"#f0fff0",
  "honeydew 2":"#e0eee0",
  "honeydew 3":"#c1cdc1",
  "honeydew 4":"#838b83",
  "darkseagreen":"#8fbc8f",
  "darkseagreen 1":"#c1ffc1",
  "darkseagreen 2":"#b4eeb4",
  "darkseagreen 3":"#9bcd9b",
  "darkseagreen 4":"#698b69",
  "palegreen":"#98fb98",
  "palegreen 1":"#9aff9a",
  "palegreen 2":"#90ee90",
  "lightgreen":"#90ee90",
  "palegreen 3":"#7ccd7c",
  "palegreen 4":"#548b54",
  "limegreen":"#32cd32",
  "forestgreen":"#228b22",
  "green 1":"#00ff00",
  "lime":"#00ff00",
  "green 2":"#00ee00",
  "green 3":"#00cd00",
  "green 4":"#008b00",
  "green":"#008000",
  "darkgreen":"#006400",
  "sapgreen":"#308014",
  "lawngreen":"#7cfc00",
  "chartreuse 1":"#7fff00",
  "chartreuse":"#7fff00",
  "chartreuse 2":"#76ee00",
  "chartreuse 3":"#66cd00",
  "chartreuse 4":"#458b00",
  "greenyellow":"#adff2f",
  "darkolivegreen 1":"#caff70",
  "darkolivegreen 2":"#bcee68",
  "darkolivegreen 3":"#a2cd5a",
  "darkolivegreen 4":"#6e8b3d",
  "darkolivegreen":"#556b2f",
  "olivedrab":"#6b8e23",
  "olivedrab 1":"#c0ff3e",
  "olivedrab 2":"#b3ee3a",
  "olivedrab 3":"#9acd32",
  "yellowgreen":"#9acd32",
  "olivedrab 4":"#698b22",
  "ivory 1":"#fffff0",
  "ivory":"#fffff0",
  "ivory 2":"#eeeee0",
  "ivory 3":"#cdcdc1",
  "ivory 4":"#8b8b83",
  "beige":"#f5f5dc",
  "lightyellow 1":"#ffffe0",
  "lightyellow":"#ffffe0",
  "lightyellow 2":"#eeeed1",
  "lightyellow 3":"#cdcdb4",
  "lightyellow 4":"#8b8b7a",
  "lightgoldenrodyellow":"#fafad2",
  "yellow 1":"#ffff00",
  "yellow":"#ffff00",
  "yellow 2":"#eeee00",
  "yellow 3":"#cdcd00",
  "yellow 4":"#8b8b00",
  "warmgrey":"#808069",
  "olive":"#808000",
  "darkkhaki":"#bdb76b",
  "khaki 1":"#fff68f",
  "khaki 2":"#eee685",
  "khaki 3":"#cdc673",
  "khaki 4":"#8b864e",
  "khaki":"#f0e68c",
  "palegoldenrod":"#eee8aa",
  "lemonchiffon 1":"#fffacd",
  "lemonchiffon":"#fffacd",
  "lemonchiffon 2":"#eee9bf",
  "lemonchiffon 3":"#cdc9a5",
  "lemonchiffon 4":"#8b8970",
  "lightgoldenrod 1":"#ffec8b",
  "lightgoldenrod 2":"#eedc82",
  "lightgoldenrod 3":"#cdbe70",
  "lightgoldenrod 4":"#8b814c",
  "banana":"#e3cf57",
  "gold 1":"#ffd700",
  "gold":"#ffd700",
  "gold 2":"#eec900",
  "gold 3":"#cdad00",
  "gold 4":"#8b7500",
  "cornsilk 1":"#fff8dc",
  "cornsilk":"#fff8dc",
  "cornsilk 2":"#eee8cd",
  "cornsilk 3":"#cdc8b1",
  "cornsilk 4":"#8b8878",
  "goldenrod":"#daa520",
  "goldenrod 1":"#ffc125",
  "goldenrod 2":"#eeb422",
  "goldenrod 3":"#cd9b1d",
  "goldenrod 4":"#8b6914",
  "darkgoldenrod":"#b8860b",
  "darkgoldenrod 1":"#ffb90f",
  "darkgoldenrod 2":"#eead0e",
  "darkgoldenrod 3":"#cd950c",
  "darkgoldenrod 4":"#8b6508",
  "orange 1":"#ffa500",
  "orange":"#ff8000",
  "orange 2":"#ee9a00",
  "orange 3":"#cd8500",
  "orange 4":"#8b5a00",
  "floralwhite":"#fffaf0",
  "oldlace":"#fdf5e6",
  "wheat":"#f5deb3",
  "wheat 1":"#ffe7ba",
  "wheat 2":"#eed8ae",
  "wheat 3":"#cdba96",
  "wheat 4":"#8b7e66",
  "moccasin":"#ffe4b5",
  "papayawhip":"#ffefd5",
  "blanchedalmond":"#ffebcd",
  "navajowhite 1":"#ffdead",
  "navajowhite":"#ffdead",
  "navajowhite 2":"#eecfa1",
  "navajowhite 3":"#cdb38b",
  "navajowhite 4":"#8b795e",
  "eggshell":"#fce6c9",
  "tan":"#d2b48c",
  "brick":"#9c661f",
  "cadmiumyellow":"#ff9912",
  "antiquewhite":"#faebd7",
  "antiquewhite 1":"#ffefdb",
  "antiquewhite 2":"#eedfcc",
  "antiquewhite 3":"#cdc0b0",
  "antiquewhite 4":"#8b8378",
  "burlywood":"#deb887",
  "burlywood 1":"#ffd39b",
  "burlywood 2":"#eec591",
  "burlywood 3":"#cdaa7d",
  "burlywood 4":"#8b7355",
  "bisque 1":"#ffe4c4",
  "bisque":"#ffe4c4",
  "bisque 2":"#eed5b7",
  "bisque 3":"#cdb79e",
  "bisque 4":"#8b7d6b",
  "melon":"#e3a869",
  "carrot":"#ed9121",
  "darkorange":"#ff8c00",
  "darkorange 1":"#ff7f00",
  "darkorange 2":"#ee7600",
  "darkorange 3":"#cd6600",
  "darkorange 4":"#8b4500",
  "tan 1":"#ffa54f",
  "tan 2":"#ee9a49",
  "tan 3":"#cd853f",
  "peru":"#cd853f",
  "tan 4":"#8b5a2b",
  "linen":"#faf0e6",
  "peachpuff 1":"#ffdab9",
  "peachpuff":"#ffdab9",
  "peachpuff 2":"#eecbad",
  "peachpuff 3":"#cdaf95",
  "peachpuff 4":"#8b7765",
  "seashell 1":"#fff5ee",
  "seashell":"#fff5ee",
  "seashell 2":"#eee5de",
  "seashell 3":"#cdc5bf",
  "seashell 4":"#8b8682",
  "sandybrown":"#f4a460",
  "rawsienna":"#c76114",
  "chocolate":"#d2691e",
  "chocolate 1":"#ff7f24",
  "chocolate 2":"#ee7621",
  "chocolate 3":"#cd661d",
  "chocolate 4":"#8b4513",
  "saddlebrown":"#8b4513",
  "ivoryblack":"#292421",
  "flesh":"#ff7d40",
  "cadmiumorange":"#ff6103",
  "burntsienna":"#8a360f",
  "sienna":"#a0522d",
  "sienna 1":"#ff8247",
  "sienna 2":"#ee7942",
  "sienna 3":"#cd6839",
  "sienna 4":"#8b4726",
  "lightsalmon 1":"#ffa07a",
  "lightsalmon":"#ffa07a",
  "lightsalmon 2":"#ee9572",
  "lightsalmon 3":"#cd8162",
  "lightsalmon 4":"#8b5742",
  "coral":"#ff7f50",
  "orangered 1":"#ff4500",
  "orangered":"#ff4500",
  "orangered 2":"#ee4000",
  "orangered 3":"#cd3700",
  "orangered 4":"#8b2500",
  "sepia":"#5e2612",
  "darksalmon":"#e9967a",
  "salmon 1":"#ff8c69",
  "salmon 2":"#ee8262",
  "salmon 3":"#cd7054",
  "salmon 4":"#8b4c39",
  "coral 1":"#ff7256",
  "coral 2":"#ee6a50",
  "coral 3":"#cd5b45",
  "coral 4":"#8b3e2f",
  "burntumber":"#8a3324",
  "tomato 1":"#ff6347",
  "tomato":"#ff6347",
  "tomato 2":"#ee5c42",
  "tomato 3":"#cd4f39",
  "tomato 4":"#8b3626",
  "salmon":"#fa8072",
  "mistyrose 1":"#ffe4e1",
  "mistyrose":"#ffe4e1",
  "mistyrose 2":"#eed5d2",
  "mistyrose 3":"#cdb7b5",
  "mistyrose 4":"#8b7d7b",
  "snow 1":"#fffafa",
  "snow":"#fffafa",
  "snow 2":"#eee9e9",
  "snow 3":"#cdc9c9",
  "snow 4":"#8b8989",
  "rosybrown":"#bc8f8f",
  "rosybrown 1":"#ffc1c1",
  "rosybrown 2":"#eeb4b4",
  "rosybrown 3":"#cd9b9b",
  "rosybrown 4":"#8b6969",
  "lightcoral":"#f08080",
  "indianred":"#cd5c5c",
  "indianred 1":"#ff6a6a",
  "indianred 2":"#ee6363",
  "indianred 4":"#8b3a3a",
  "indianred 3":"#cd5555",
  "brown":"#a52a2a",
  "brown 1":"#ff4040",
  "brown 2":"#ee3b3b",
  "brown 3":"#cd3333",
  "brown 4":"#8b2323",
  "firebrick":"#b22222",
  "firebrick 1":"#ff3030",
  "firebrick 2":"#ee2c2c",
  "firebrick 3":"#cd2626",
  "firebrick 4":"#8b1a1a",
  "red 1":"#ff0000",
  "red":"#ff0000",
  "red 2":"#ee0000",
  "red 3":"#cd0000",
  "red 4":"#8b0000",
  "darkred":"#8b0000",
  "maroon":"#800000",
  "sgi beet":"#8e388e",
  "sgi slateblue":"#7171c6",
  "sgi lightblue":"#7d9ec0",
  "sgi teal":"#388e8e",
  "sgi chartreuse":"#71c671",
  "sgi olivedrab":"#8e8e38",
  "sgi brightgray":"#c5c1aa",
  "sgi salmon":"#c67171",
  "sgi darkgray":"#555555",
  "sgi gray 12":"#1e1e1e",
  "sgi gray 16":"#282828",
  "sgi gray 32":"#515151",
  "sgi gray 36":"#5b5b5b",
  "sgi gray 52":"#848484",
  "sgi gray 56":"#8e8e8e",
  "sgi lightgray":"#aaaaaa",
  "sgi gray 72":"#b7b7b7",
  "sgi gray 76":"#c1c1c1",
  "sgi gray 92":"#eaeaea",
  "sgi gray 96":"#f4f4f4",
  "white":"#ffffff",
  "white smoke":"#f5f5f5",
  "gray 96":"#f5f5f5",
  "gainsboro":"#dcdcdc",
  "lightgrey":"#d3d3d3",
  "silver":"#c0c0c0",
  "darkgray":"#a9a9a9",
  "gray":"#808080",
  "dimgray":"#696969",
  "gray 42":"#696969",
  "black":"#000000",
  "gray 99":"#fcfcfc",
  "gray 98":"#fafafa",
  "gray 97":"#f7f7f7",
  "gray 95":"#f2f2f2",
  "gray 94":"#f0f0f0",
  "gray 93":"#ededed",
  "gray 92":"#ebebeb",
  "gray 91":"#e8e8e8",
  "gray 90":"#e5e5e5",
  "gray 89":"#e3e3e3",
  "gray 88":"#e0e0e0",
  "gray 87":"#dedede",
  "gray 86":"#dbdbdb",
  "gray 85":"#d9d9d9",
  "gray 84":"#d6d6d6",
  "gray 83":"#d4d4d4",
  "gray 82":"#d1d1d1",
  "gray 81":"#cfcfcf",
  "gray 80":"#cccccc",
  "gray 79":"#c9c9c9",
  "gray 78":"#c7c7c7",
  "gray 77":"#c4c4c4",
  "gray 76":"#c2c2c2",
  "gray 75":"#bfbfbf",
  "gray 74":"#bdbdbd",
  "gray 73":"#bababa",
  "gray 72":"#b8b8b8",
  "gray 71":"#b5b5b5",
  "gray 70":"#b3b3b3",
  "gray 69":"#b0b0b0",
  "gray 68":"#adadad",
  "gray 67":"#ababab",
  "gray 66":"#a8a8a8",
  "gray 65":"#a6a6a6",
  "gray 64":"#a3a3a3",
  "gray 63":"#a1a1a1",
  "gray 62":"#9e9e9e",
  "gray 61":"#9c9c9c",
  "gray 60":"#999999",
  "gray 59":"#969696",
  "gray 58":"#949494",
  "gray 57":"#919191",
  "gray 56":"#8f8f8f",
  "gray 55":"#8c8c8c",
  "gray 54":"#8a8a8a",
  "gray 53":"#878787",
  "gray 52":"#858585",
  "gray 51":"#828282",
  "gray 50":"#7f7f7f",
  "gray 49":"#7d7d7d",
  "gray 48":"#7a7a7a",
  "gray 47":"#787878",
  "gray 46":"#757575",
  "gray 45":"#737373",
  "gray 44":"#707070",
  "gray 43":"#6e6e6e",
  "gray 40":"#666666",
  "gray 39":"#636363",
  "gray 38":"#616161",
  "gray 37":"#5e5e5e",
  "gray 36":"#5c5c5c",
  "gray 35":"#595959",
  "gray 34":"#575757",
  "gray 33":"#545454",
  "gray 32":"#525252",
  "gray 31":"#4f4f4f",
  "gray 30":"#4d4d4d",
  "gray 29":"#4a4a4a",
  "gray 28":"#474747",
  "gray 27":"#454545",
  "gray 26":"#424242",
  "gray 25":"#404040",
  "gray 24":"#3d3d3d",
  "gray 23":"#3b3b3b",
  "gray 22":"#383838",
  "gray 21":"#363636",
  "gray 20":"#333333",
  "gray 19":"#303030",
  "gray 18":"#2e2e2e",
  "gray 17":"#2b2b2b",
  "gray 16":"#292929",
  "gray 15":"#262626",
  "gray 14":"#242424",
  "gray 13":"#212121",
  "gray 12":"#1f1f1f",
  "gray 11":"#1c1c1c",
  "gray 10":"#1a1a1a",
  "gray 9":"#171717",
  "gray 8":"#141414",
  "gray 7":"#121212",
  "gray 6":"#0f0f0f",
  "gray 5":"#0d0d0d",
  "gray 4":"#0a0a0a",
  "gray 3":"#080808",
  "gray 2":"#050505",
  "gray 1":"#030303",
  "whitesmoke":"#f5f5f5",
};

export function getColorTable(){
  const colorTable = [colorT, colorT2];
  return colorTable;
}