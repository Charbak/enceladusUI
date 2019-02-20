
//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;
menus=new Array();
_d=document;

function addmenu(){menunum++;menus[menunum]=menu;}

function dumpmenus(){mt="<script language=javascript>";
for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.


////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
        effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
        effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}


timegap=500                     // The time delay for menus to remain visible
followspeed=3                   // Follow Scrolling speed
followrate=40                   // Follow Scrolling Rate
suboffset_top=0;               // Sub menu offset Top position
suboffset_left=0;              // Sub menu offset Left position

style1=[          // style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"#FFFFFF",                   // Mouse Off Font Color
"#4CBCD0",                   // Mouse Off Background Color
"#000066",                   // Mouse On Font Color
"#4CBCD0",                   // Mouse On Background Color
"#4CBCD0",                   // Menu Border Color
12,                          // Font Size in pixels
"normal",                    // Font Style (italic or normal)
"bold",                      // Font Weight (bold or normal)
"Verdana",                // Font Name
4,                           // Menu Item Padding
,                       // Sub Menu Image (Leave this blank if not needed)
,                            // 3D Border & Separator bar
"66ffff",                    // 3D High Color
"009999",                    // 3D Low Color
,                          // Current Page Item Font Color (leave this blank to disable)
,                       // Current Page Item Background Color (leave this blank to disable)
,            // Top Bar image (Leave this blank to disable)
"ffffff",                 // Menu Header Font Color (Leave blank if headers are not needed)
"000099",            // Menu Header Background Color (Leave blank if headers are not needed)
"navy",                        // Menu Item Separator Color
]



addmenu(menu=[       // This is the array that contains your menu properties and details
"mainmenu",          // Menu Name - This is needed in order for the menu to be called
84,                  // Menu Top - The Top position of the menu in pixels
24,                  // Menu Left - The Left position of the menu in pixels
240,                 // Menu Width - Menus width in pixels
1,                   // Menu Border Width
,        // Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,        // Properties Array - this is set higher up, as above
1,            // Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",      // Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,      // Filter - Text variable for setting transitional effects on menu activation - see above for more info
0,            // Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1,          // Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,          // Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,   // Position of TOP sub image left:center:right
,  // Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
, // Right To Left - Used in Hebrew for example. (1=on/0=off)
,   // Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,   // ID of the div you want to hide on MouseOver (useful for hiding form elements)
,            // Reserved for future use
,            // Reserved for future use
,            // Reserved for future use


,"&nbsp;&nbsp;&nbsp;Vessels","show-menu=vessels",,"Vessels",1
,"Tariff","show-menu=tariff",,"Opens the tariff",1
,"Tables","show-menu=tables",,"System tables",1
])
        addmenu(menu=["vessels",
          ,,250,1,,style1,0,"left",effect,0,,,,,,,,,,,
                ,"Show vessel summary", "VslSummary",,,0
                ,"Show Booking Info", "BookingInfoImport",,,0
                   // Author - TCS support TEAM     
		//Purpose - To Hide Cross-country summary Menu
		//Date - 11/09/2009
		//PR ID -(PBI000000001819)
		//INC ID: INC000000862657
		//Release Title - Release_EDDI_PBI000000001815+PBI000000001818+PBI000000001819 
		//Commented code starts here
               // ,"Cross-country summary", "VslSummary.asp?Mode=X",,,0
               //Commented code ends here  
             
                ,"Query Builder", "QueryBuilder",,,0
        ])        
        addmenu(menu=["tariff",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"Demurrage tariff", "Tariff?Mode=DMR",,,0
                ,"Detention tariff", "Tariff?Mode=DTS",,,0
        ])
        addmenu(menu=["tables",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"User access table", "Tables?Mode=Users",,,0
                ,"Country table","show-menu=tab",,"a",1
        ])
          addmenu(menu=["tab",
          ,,250,1,"",style1,,"left",effect,,,,,,,,,,,,
                ,"Demurrage tariff", "Tariff?Mode=DMR",,,0
                ,"Detention tariff", "Tariff?Mode=DTS",,,0 
                 ])       
dumpmenus()
