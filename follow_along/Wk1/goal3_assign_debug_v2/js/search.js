// Create privatized scope using a self-executing function
(function(){                                                                                //create function

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),                                    //declare resultsDIV variable
		searchInput = document.forms[0].search,                                             //declare searchInput variable
		currentSearch = ''
	;

	// Validates search query
	var validate = function(query){                                                        //error fixed:validate miss spelled validate create function query

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                                                    //error fixed: missing = sign while loop for function
			query = query.substring(1, query.length);
		};
		while(query.charAt(query.length-1) === " ") {                                      //error fixed: space missing between quotations second while loop in function
            query = query.substring(0, query.length - 1);
        };

		// Check search length, must have 3 characters
		if(query.length < 3){                                                              //validate
			alert("Your search query is too small, try again.");                           //alert user of invalid input

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};

        search(query);
	};

	// Finds search matches
	var search = function(query){                                                           //create search function

		// split the user's search query string into an array
		var queryArray = query.split(" ");                                                  //change  search string to an array

		// array to store matched results from database.js
		var results = [];                                                                   //declare variable results to store matches

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {                                               //for loop through db array

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');                                            //declare variable dbTitleEnd
            var dbItem = db[i].toLowerCase().substring(0, dbTitleEnd);                      //error fixed: camelCase declare variable dbItem

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {                       //change user input to lower case
                var qItem = queryArray[ii].toLowerCase();                                   //error fixed: camelCase

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItem.indexOf(qItem);                                        //compare user input to db and store matches
                if (compare !== -1) {
                    results.push(db[i]);
                }
                ;
            }
            ;
        };

		results.sort();

		// Check that matches were found, and run output functions
		if(results.length == 0){                                                             //if conditional to check for results
			noMatch();
		}else{                                                                              //else conditional for results
			showMatches(results);
		};console.log(results);
	};

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                                               //create function noMatch
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'             //declare variable for no results
		;
		resultsDIV.innerHTML = html;
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                                                    //create function showMatches

		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',                                                        //declare variable to show user results
			title,
			url
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){                                           //for loop through results

			// title of video ends with pipe
			// pull the title's string using index numbers
			var titleEnd = results[i].indexOf('|');                                         //error fixed: var missing declare variable titleEnd
			title = results[i].substring(0, titleEnd);                                      //error fixed: substring should not have been camelCased

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);       //get URL

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';                         //create link to URL
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The onSubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {                                               //error fixed: onSubmit should have been camelCased
        var query = searchInput.value;                                                      //declare variable query
        validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };

}());