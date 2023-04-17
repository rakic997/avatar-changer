### React challange

### Preview
![Thumbnail1](https://github.com/rakic997/avatar-changer/blob/main/src/assets/preview.gif)

### Challange description
You'll be building a simple react component: an avatar picker. The user clicks on the avatar to open a popover which allows the user to choose another avatar from the list. 
After a click a (fake) HTTP request is made (while a loading spinner runs), the popover closes and the new avatar will appear in the inital view.

### Requirements
Task should be done within 1 - 2 hours.

### Instrucitons
- The initially shown avatar is the first in the given list of avatars
- The initial avatar which opens the popover has a border of 1px on hover and active state
- The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
- The popover opens with a scaling animation that overbounces a bit
- The currently chosen avatar has a blue border of 3px
- The loading spinner should look like shown above. It is also blue.
- The popover fades out with a scaling animation (no overbounce)
- A click outside the popover area will result in the popover closing
- Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
- The popover is closed when an avatar is chosen
