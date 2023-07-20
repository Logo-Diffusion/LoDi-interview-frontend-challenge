# Logo Diffusion Interview Task:

Definition: Implement the following functionalities for the modal

![Modal](./images/ModalDesign.png)

# Requirements:

- [ ] Load question data from 'components/questionnaire.js'
- [ ] Move between the questions with next/previous button
  - [ ] Disable previous button when on the first question
- [ ] Load question options for each question
  - [ ] Setup the state for the modal
    - [ ] Setup the state as close to the API payload as possible, it should be expandable for future questions
  - [ ] On each question, when user chooses `Other`, they should be able to insert their answer in the text field below
  - [ ] The value for the `Other` should be set to empty when the user goes to the next/previous questions, unless the user has already answered other for that question. In that case, you should load what they had typed before
  - [ ] If no option is selected and user clicks on `Next`, they should see an error indicating that they should select an option before continueing  
- [ ] API integration
  - [ ] Check the api [documentation]()
  - [ ] Setup a redux store for the application and create a userSlice
  - [ ] Use thunkApi to check whether this user has submitted the questionnaire before
  - [ ] Only show the modal on page load if user hasn't answered the questions
  - [ ] Submit the answers when user asnwers the final question(thunkApi)
- [ ] `Don't show again`: When user choses this option and closes the modal, the modal should not open on that browser again.

