var selectLA = document.querySelector("#Los-Angeles");
var selectSF = document.querySelector('#San-Francisco');
var selectNY = document.querySelector('#New-York');

selectSF.addEventListener('click', e => {
    fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=san%20francisco', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log("selected SF");
})
selectLA.addEventListener('click', e => {
    fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=Los%20Angeles', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log("selected LA");
})
selectNY.addEventListener('click', e=> {
    fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=New%20York', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log("selected NY");
})



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d5710c295mshcd5dbc000320b5ep11aab5jsndc2fdbc54268',
		'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
	}
};

fetch('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation?query=mumbai', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




// Outside of Form : Name
// Form 1 Event data 
    // location :
     
    // Venue Type  ---- MARK
    // Event : music, comedy, family, sports
    // Output : list :
        //- Option 1: venue 1 based off of location>venuetype>event
        //- Option 2:  venue 2 based off of location>venuetype>event
        //- Option 3: venue 3 based off of location>venue type> event
        //select venue

    // Form 1 Results : --- MARK
        // Result Event List :
            // Venue 1 INFO BUTTON (LINK)/ SELECT BUTTON
            // Venue 2 INFO BUTTON (LINK)/ SELECT BUTTON
            // Venue 3 INFO BUTTON (LINK)/ SELECT BUTTON
            // selected venue opens FORM 2 (food)

    // [Option Selected- From Form 1] (push location/zipcode of venue from Form 1) --- NASER/MARK
        //Food form 2 : food by location : San Francisco, Los Angeles, New York
        // Output: List :
        // food option 1 : chinese 1 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
        // food option 2 : chinese 2 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
        // food option 3 : chinese 3 >zipcode from option selected INFO BUTTON (LINK)/ SELECT BUTTON
   
    // Selected Food option >>> venue+food combo details
        //food drop down menu 
        //options : chinese,pizza, american --- NASER 
        function DropDown() {
            document.getElementById("LocationDropdown").classList.toggle("show");
          }
          
          // Close the dropdown menu if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
          function DropDown() {
            document.getElementById("FoodDropdown").classList.toggle("show");
          }
          
          // Close the dropdown menu if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

// why does only one set of drop down options show
// after selecting location > I want the form to save options to list
//after selecting options I want resteraunt list to display by fetching




            //    // Selected Food option >>>  DATE 1 ((venue+food combo details))
            // Submit : save date or rethink??
                // save date > saves combo to local storage
                // rethrink > restarts the form

    //Local Storage : Date Combo Results : List :  --- NASER 
            // Date 1 : FORM 1 OUTPUT + FORM 2 OUTPUT
            // Date 2 :  FORM 1 OUTPUT + FORM 2 OUTPUT
            // Date 3 : FORM 1 OUTPUT + FORM 2 OUTPUT


