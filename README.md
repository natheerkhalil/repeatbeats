# Making the most out of YouTube videos

https://repeatbeats.com

# Description
Welcome to RepeatBeats! This is a project that allows users to add any video from YouTube and customise it to their liking. The user can organise the video into playlists, control when it starts and ends, what parts to skip, how fast it should go, and what notes/lyrics they want to add. They can also loop & shuffle playlists as well as share their videos with other users. RepeatBeats was mainly made with music in mind, but you can use it for any videos you want!

## How it works

RepeatBeats uses the YouTube iFrame api to load & play the videos - none of them are actually stored. It then checks every millisecond whether the video's current time is greater than the desired end of the video or less than the start, in which it case it either rewinds to the beginning or (if loop is enabled) moves on to the next video in the playlist (a random video in the playlist, if shuffle is enabled). Note that all data is stored in cache upon loading as this greatly improves performance. If you've made changes on another device, e.g. you updated a video, and want to see it reflected on the devie you're using, just press the "sync data" button (looks like a cloud).

## Icons

![alt text](https://github.com/natheerkhalil/repeatbeats/blob/icons.jpg?raw=true
The trash icon - delete video
Lightbulb - play random video
Check - save video
Hourglass - get current time
Add - add to playlist
Star - add video to favourite
Music notes - lyrics (can also be used for notes)
Share - share video

## Structure

Most of the important parts of the project are on the Home.vue file - this is the only place the users' videos & playlists are accessible and can be edited, added, shared, or deleted. You're probably not interested in the other pages, which are more account/legal related. However, if you feel a page could benefit from a visual change, feel free to contribute.

## Languages

The frontend (this repository) uses a Vue SPA. The backend uses Laravel.

## Contributions

Contributions are welcome! If you've been using the app and feel it could be improved in some way, feel free to either:
- Report any bugs you find (you can also use the 'feedback' feature on the website itself)
- Suggest any ideas you think would be cool to implement
- Contribute any code you want to see

## How to contribute

1. Fork this repository
2. Clone that repository
3. Add your contributions
4. Commit & push your code
5. I will review the pull request & merge it 

## Support

This is a web project made & hosted solely by a solo web dev, and as such all the costs for keeping it online are coming out of my pocket. If you feel that this project has benefited you in some way, feel free to help out by donating (you don't have to, but it helps!): [https://ko-fi.com/natheer]. You can also star this repository.