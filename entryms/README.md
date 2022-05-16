# Entry-management-Software
 This software is for entry managing purpose.In this ever digitalising world there's also a need for removing large and bulky entry log books and this software can definitely help in this.
 
 ## Functionality offered
 * Visitor can check in by entering his information and his host's information.An alert message will confirm his check in.Also the host will receive a SMS and an Email regarding the visitor's details.
 * Visitor can check out by clicking leave button.He will have to enter his phone number while checking out to confirm his checkout and after entring phone number he will receive an otp for confirming his entity and after entering correct otp he will be successfully checked out.Also he will receive an Email stating hs visit details
 * There will be a dashboard button where a person can see all the previous entries and their details.
 
 ## Edge cases handled
 * A visitor cannot check in again before cheking out.
 * A visitor cannot checkout without checking in.
 * Otp verification ensures no mishandling with visitor and host data.
  
 ## Technology stack
 ### Front end
 * HTML/CSS
 * Bootstrap
 
 ### Backend
 * Nodejs
 * Express
 
 ### Databse
 * MongoDB
 * MongoDB Atlas
 
 ### For sending mail 
 * Nexmo api (Only test numbers can receive messages as i am using the free service provided by Nexmo)
 
 ### For sending mail 
 * Nodemailer module
 
 ## Working
 1) A new Visitor checks in.
 ![Screenshot (20)](https://user-images.githubusercontent.com/43185824/70031940-6b8dec00-15d2-11ea-971a-cc6284cac18e.png1)
 
 * Message as received by host when a new visitor checks in
![rsz_img-6377](https://user-images.githubusercontent.com/43185824/70035877-b3644180-15d9-11ea-8635-1a51f3f2a037.png1)

 * Email as received by host when a new visitor checks in
 ![rsz_img-6379](https://user-images.githubusercontent.com/43185824/70035901-c119c700-15d9-11ea-866c-0416d8d665bb.png1)
 
 2) Same visitor cannot check in without checkout.
 ![Screenshot (23)](https://user-images.githubusercontent.com/43185824/70032051-a4c65c00-15d2-11ea-920a-2885a180462a.png1)
 
 3) If a visitor who hasn't checked in tries to check out.
 ![Screenshot (24)](https://user-images.githubusercontent.com/43185824/70032056-a6901f80-15d2-11ea-9fe2-afd221c342cd.png1)
 
 4) On finding a valid visitor doing check out.
 ![Screenshot (25)](https://user-images.githubusercontent.com/43185824/70032060-a7c14c80-15d2-11ea-8037-22dae3a6df36.png1)
 
 * OTP message sent to Visitor 
 ![rsz_img-6376](https://user-images.githubusercontent.com/43185824/70035868-afd0ba80-15d9-11ea-8ba0-ef2ee46ac5b6.png1)
 
 5) If the user doen't enter correct OTP.
  ![Screenshot (26)](https://user-images.githubusercontent.com/43185824/70032061-a98b1000-15d2-11ea-9aab-98f27527ddd7.png1)
 
 
 6) After User has successfully checked out he receives mail as shown below
 ![rsz_img-6381](https://user-images.githubusercontent.com/43185824/70035891-ba8b4f80-15d9-11ea-9719-c29c9ad52137.png1)
 
 7)Dashboard view
 
![Screenshot (27)](https://user-images.githubusercontent.com/43185824/70032064-aabc3d00-15d2-11ea-8645-fd6e01c5b634.png1)
 
 
# [Demo](https://entrymanagementwebsite.herokuapp.com)
 
 ## Future Enhancements
* An admin panel can be built from where only he can see the dashboard and also handle the database entries
* This system can be created into an app using react native through which host can also be informed in advance of the meeting
* User interface can be improved 



 
 
 
 
 
