setup environment veriable i.e port & database url
connected to mongoose database in db folder index.js
started database server in main index.js
created APIError file in util to structure the api error
created ApiResponse file in util to structure API Response  
created asyncHandler file in util to create structured request whereever its needed
created user and video models in models folder
added mongooseAggregatePaginate plugin in video model dont know why for now
install and used bcrypt hook to increapt and Matching the password using middleware pre and schema .methods functions
then setup the JWT tokens for ssecurity until now dont know how to use it , and created two methods for Access token and refresh token with there respective expiry
then installed cloudnary and multer for uploading files 
created cloudnary folder and set it up to upload the file using filepath and returning the url as response
created multure file in middleware and stup multure to upload file in public temp
created user controller and user route connected regetsration route and tested first api call
created whole register controller