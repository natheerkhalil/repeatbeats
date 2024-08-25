<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __po __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="_flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
    </div>

    <br><br>

    <div class="_flex __13 __w __mlauto __mrauto _cc _fd-co">
        <p class="__txl __tal gradient-text">Welcome to RepeatBeats!</p>
        <br>
        <div class="gradient-hr"></div>
        <br>
        <p class="__tal __tmd">Now you can enjoy all of your favourite music and videos customised the way <span
                class="__em gradient-text">you like it</span></p>
        <br>
        <div class="gradient-hr"></div>
        <br>
        <p class="__tal __tlg">How it works</p>
        <br>
        <p class="__tal __tlg gradient-text">The video player</p>
        <br>
        <img src="https://i.ibb.co/SKfScsD/image.png" style="width: 900px; max-width: 100%;" alt="The vide player">
        <p class="__tal __b" style="font-size: 20px; ">The player can play any public video on YouTube. Whenever you
            want to add a video, just paste the URL into the bar in any format! Make the customisations you would like
            to the video and press "save", and the video is saved to your account - it's that simple</p>
        <br><br>
        <p class="__b __tal __tlg gradient-text">The icons</p>
        <br>
        <img src="../../icons.webp" style="width: 900px; max-width: 100%;" alt="The video player">
        <br>
        <p class="__b __tal" style="font-size: 20px; ">We have tooltips to help you understand what each icon does
            (which can be disabled in your preferences), but here's a runthrough to give you a better understanding:</p>
        <br>
        <ul class="__b _flex _cc _fd-co" style="max-width: 90%; font-size: 20px; ">
            <li><strong>Trash</strong> - delete video</li>
            <li><strong>Lightbulb</strong> - play random video</li>
            <li><strong>Tick</strong> - save video</li>
            <li><strong>Hourglass</strong> - copy current video time to clipboard</li>
            <li><strong>Add</strong> - add video to a playlist</li>
            <li><strong>Star</strong> - add/remove video from favourites</li>
            <li><strong>Music notes</strong> - get lyrics</li>
            <li><strong>Share</strong> - share video with other users</li>
        </ul>
        <br><br>
        <p class="__b __tal __tlg gradient-text">Playlists</p>
        <br>
        <img src="../../playlists.png" style="width: 900px; max-width: 100%;" alt="The video player">
        <br>
        <p class="__b __tal" style="font-size: 20px; ">Playlists are a great way to keep track of your favourite videos.
            Open the Sidebar to view all of your playlists, and press &nbsp; <svg fill="var(--grey_4)" class="__po"
                width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z">
                </path>
            </svg> &nbsp; to create a new playlist. You can also play any playlist you want by pressing &nbsp; <svg fill="var(--grey_4)" class="__po" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"></path></svg> &nbsp; .</p>
    </div>

    <br><br><br>
</template>

<script>
export default {
    data() {
        return {
        }
    },

    methods: {
        goHome() {
            this.$router.push('/')
        }
    }

}
</script>