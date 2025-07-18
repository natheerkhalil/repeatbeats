# Making the most out of YouTube videos

https://repeatbeats.com

# Description
Welcome to RepeatBeats! This is a project that allows users to add any video from YouTube and customise it to their liking. The user can organise the video into playlists, control when it starts and ends, what parts to skip, how fast it should go, and what notes/lyrics they want to add. They can also loop & shuffle playlists as well as share their videos with other users. RepeatBeats was mainly made with music in mind, but you can use it for any videos you want!

## How it works

RepeatBeats uses the YouTube iFrame api to load & play the videos - none of them are actually stored. It then checks every millisecond whether the video's current time is greater than the desired end of the video or less than the start, in which it case it either rewinds to the beginning or (if loop is enabled) moves on to the next video in the playlist (a random video in the playlist, if shuffle is enabled). Note that all data is stored in cache upon loading as this greatly improves performance. If you've made changes on another device, e.g. you updated a video, and want to see it reflected on the device you're using, just press the "sync data" button (looks like a cloud).

## Icons

![icons](https://github.com/user-attachments/assets/c3ff624f-e608-4e76-8160-87d9e75904f6)
The trash icon - delete video  
Lightbulb - play random video  
Check - save video  
Hourglass - get current time  
Add - add to playlist  
Star - add video to favourite  
Music notes - lyrics (can also be used for notes)  
Share - share video  

## Languages

The frontend (this repository) uses a Vue SPA. The backend uses Laravel.
