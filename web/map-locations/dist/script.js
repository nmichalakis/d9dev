$(document).ready(function() {

  function loadMap() {
    var $tooltip = $("#tooltip"),
      $map = $("#usa-map"), //svg jquery
      svg = document.querySelector("#usa-map"),
      $container = $('.map-container');
     
     
        var paths = d3.select(svg).selectAll('path');
        //on resize and initial (need to account for css)

        //I just wrote my own json here to match up to 
        //classes on the svg, feel free to edit/make your own
         var classMaps = {
          "st25": {
            name: "Alabama",
            key: "st25",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-al'>View More</a>"],
          },
"st6": {
            name: "Alaska",
            key: "st6",
            list: ["<p>contact the manager</p>","1-2 weeks","<a class='map-link' href='../interior-doors-ak'>View More</a>"],
          },
"st3": {
            name: "Arizona",
            key: "st3",
            list: ["<p>from 161</p>","3-4 day","<a class='map-link' href='../interior-doors-az'>View More</a>"],
          },
"st24": {
            name: "Arkansas",
            key: "st24",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ar'>View More</a>"],
          },
"st55": {
            name: "California",
            key: "st55",
            list: ["<p>from 170</p>","4 day","<a class='map-link' href='../interior-doors-ca'>View More</a>"],
          },
"st5": {
            name: "Colorado",
            key: "st5",
            list: ["<p>from 122</p>","3 day","<a class='map-link' href='../interior-doors-co'>View More</a>"],
          },
"st46": {
            name: "Conneticut",
            key: "st46",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ct'>View More</a>"],
          },
"st48": {
            name: "Deleware",
            key: "st48",
            list: ["<p>from 89</p>","1 day","<a class='map-link' href='../interior-doors-de'>View More</a>"],
          },
"st20": {
            name: "Florida",
            key: "st20",
            list: ["<p>from 97</p>","2 day","<a class='map-link' href='../interior-doors-fl'>View More</a>"],
          },
"st19": {
            name: "Georgia",
            key: "st19",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ga'>View More</a>"],
          },
"st47": {
            name: "Hawaii",
            key: "st47",
            list: ["<p>contact the manager</p>","1-2 weeks","<a class='map-link' href='../interior-doors-hi'>View More</a>"],
          },
"st11": {
            name: "Idaho",
            key: "st11",
            list: ["<p>from 192</p>","3-4 day","<a class='map-link' href='../interior-doors-id'>View More</a>"],
          },
"st21": {
            name: "Illinois",
            key: "st21",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-il'>View More</a>"],
          },
"st36": {
            name: "Indiana",
            key: "st36",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-in'>View More</a>"],
          },
"st22": {
            name: "Iowa",
            key: "st22",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ia'>View More</a>"],
          },
"st12": {
            name: "Kansas",
            key: "st12",
            list: ["<p>from 97</p>","2-3 day","<a class='map-link' href='../interior-doors-ks'>View More</a>"],
          },
"st34": {
            name: "Kentucky",
            key: "st34",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ky'>View More</a>"],
          },
"st29": {
            name: "Lousiana",
            key: "st29",
            list: ["<p>from 115</p>","2 day","<a class='map-link' href='../interior-doors-la'>View More</a>"],
          },
"st37": {
            name: "Maine",
            key: "st37",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-me'>View More</a>"],
          },
"st41": {
            name: "Maryland",
            key: "st41",
            list: ["<p>from 89</p>","1 day","<a class='map-link' href='../interior-doors-md'>View More</a>"],
          },
"st44": {
            name: "Massachusetts",
            key: "st44",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ma'>View More</a>"],
          },
"st40": {
            name: "Michigan",
            key: "st40",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-mi'>View More</a>"],
          },
"st10": {
            name: "Minnesota",
            key: "st10",
            list: ["<p>from 97</p>","2 day","<a class='map-link' href='../interior-doors-mn'>View More</a>"],
          },
"st28": {
            name: "Mississippi",
            key: "st28",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ms'>View More</a>"],
          },
"st17": {
            name: "Missouri",
            key: "st17",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-mo'>View More</a>"],
          },
"st1": {
            name: "Montana",
            key: "st1",
            list: ["<p>from 141</p>","3-4 day","<a class='map-link' href='../interior-doors-mt'>View More</a>"],
          },
"st14": {
            name: "Nebraska",
            key: "st14",
            list: ["<p>from 113</p>","2-3 days","<a class='map-link' href='../interior-doors-ne'>View More</a>"],
          },
"st4": {
            name: "Nevada",
            key: "st4",
            list: ["<p>from 170</p>","3-4 days","<a class='map-link' href='../interior-doors-nv'>View More</a>"],
          },
"st43": {
            name: "New Hampshire",
            key: "st43",
            list: ["<p>from 89</p>","1 day","<a class='map-link' href='../interior-doors-nh'>View More</a>"],
          },
"st45": {
            name: "New Jersey",
            key: "st45",
            list: ["<p>from 30</p>","1 day","<a class='map-link' href='../interior-doors-nj'>View More</a>"],
          },
"st2": {
            name: "New Mexico",
            key: "st2",
            list: ["<p>from 151</p>","3 day","<a class='map-link' href='../interior-doors-nm'>View More</a>"],
          },
"st27": {
            name: "New York",
            key: "st27",
            list: ["<p>from 30</p>","1 day","<a class='map-link' href='../interior-doors-ny'>View More</a>"],
          },
"st26": {
            name: "North Carolina",
            key: "st26",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-nc'>View More</a>"],
          },
"st15": {
            name: "North Dakota",
            key: "st15",
            list: ["<p>from 163</p>","2-3 days","<a class='map-link' href='../interior-doors-nd'>View More</a>"],
          },
"st32": {
            name: "Ohio",
            key: "st32",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-oh'>View More</a>"],
          },
"st16": {
            name: "Oklahoma",
            key: "st16",
            list: ["<p>from 103</p>","2-3 days","<a class='map-link' href='../interior-doors-ok'>View More</a>"],
          },
"st8": {
            name: "Oregon",
            key: "st8",
            list: ["<p>from 184</p>","3-4 days","<a class='map-link' href='../interior-doors-or'>View More</a>"],
          },
"st30": {
            name: "Pennsylvania",
            key: "st30",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-pa'>View More</a>"],
          },
"st49": {
            name: "Rhode Island",
            key: "st49",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-ri'>View More</a>"],
          },
"st38": {
            name: "South Carolina",
            key: "st38",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-sc'>View More</a>"],
          },
"st13": {
            name: "South Dakota",
            key: "st13",
            list: ["<p>from 117</p>","2-3 days","<a class='map-link' href='../interior-doors-sd'>View More</a>"],
          },
"st33": {
            name: "Tennessee",
            key: "st33",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-tn'>View More</a>"],
          },
"st0": {
            name: "Texas",
            key: "st0",
            list: ["<p>from 132</p>","2-3 day","<a class='map-link' href='../interior-doors-tx'>View More</a>"],
          },
"st9": {
            name: "Utah",
            key: "st9",
            list: ["<p>from 165</p>","3 day","<a class='map-link' href='../interior-doors-ut'>View More</a>"],
          },
"st42": {
            name: "Vermont",
            key: "st42",
            list: ["<p>from 89</p>","1 day","<a class='map-link' href='../interior-doors-vt'>View More</a>"],
          },
"st35": {
            name: "Virginia",
            key: "st35",
            list: ["<p>from 89</p>","1-2 days","<a class='map-link' href='../interior-doors-va'>View More</a>"],
          },
"st18": {
            name: "Washington",
            key: "st18",
            list: ["<p>from 184</p>","4 day","<a class='map-link' href='../interior-doors-wa'>View More</a>"],
          },
"st39": {
            name: "West Virginia",
            key: "st39",
            list: ["<p>from 89</p>","1-2 days","<a class='map-link' href='../interior-doors-wv'>View More</a>"],
          },
"st23": {
            name: "Wisconsin",
            key: "st23",
            list: ["<p>from 89</p>","2 day","<a class='map-link' href='../interior-doors-wi'>View More</a>"],
          },
"st7": {
            name: "Wyoming",
            key: "st7",
            list: ["<p>from 188</p>","4 day","<a class='map-link' href='../interior-doors-wy'>View More</a>"],
          }
        };
        
        //get all the paths of the svg, for each
        paths.each(function(d, i) {

          var classSelected = d3.select(this).attr('class');
          var stateSelected = classMaps[classSelected];
          
          //check to see if the svg object is a state from our json
          var isState = (typeof stateSelected == "object") ? true : false;

          //if state is in our json list, then
          if (isState) {
            
            //fill in color-- can put whatever you want
            d3.select(this).style('fill', 'rgba(45, 204, 112, .28)');
            
            //add a glowing orb to map with js
            var $d = $("<div></div>");
            $d.addClass('glowing-orb').addClass(stateSelected.name.toLowerCase().replace(/\s/g, ''));
            $container.append($d);

          }
          
          //if we hover over any location on the map, then get path and if state, fill color red
          //jquery hover, two handlers for one on mouseenter and one for mouseleave
          $(this).hover(function() {
            var path = $(this)[0];

            if (isState) d3.select(this).style('fill', 'rgba(45, 204, 112, .6)');
          }, function() {
            var path = $(this)[0];
            if (isState) d3.select(path).style('fill', 'rgba(45, 204, 112, .28)');
          }).css('cursor', 'pointer');

          //on click of svg, create the tooltip
          d3.select(this).on('click touchstart', function() {
            $tooltip.hide();

            var classSelected = d3.select(this).attr('class');
            if (classSelected) {
              toolTip(classSelected);
            }
          });
        }); //end paths for each
        
        //handles tooltip creation
        function toolTip(classSel) {
          
          //again if the class matches up to our json list, then we want to do something
          var stateSelected = classMaps[classSel];
          var isState = (typeof stateSelected == "object") ? true : false;

          var $h3 = $("#tooltip h3"),
            $ul = $("#tooltip ul");

          //show tooltip if not mobile -- can be improved if desired
          if (isState && window.innerWidth > 0) {
            $ul.html("");

             //append each item in our stateSelected array as a list item
            for (var i = 0; i < stateSelected.list.length; i++) {
              $ul.append("<li>" + stateSelected.list[i] + "</li>");
            }

            $h3.html(stateSelected.name);

            $tooltip.show();
          }
        }//end tooltip func
        
        function resetMapHeight(){
           var $mapH = $map.height();
           $container.height($mapH);
        }
        
        //handle responsive view on browser resize
        $(window).resize(function() {
          if (window.innerWidth < 480) {
          }
          //resize map responsively
          resetMapHeight();
        });
    
        //on load of svg, reset Map Height  
        resetMapHeight();




  }//end loadMap();
  
  loadMap();
});