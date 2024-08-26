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
        <p class="__tal __tmd">Now you can enjoy all of your favourite music and videos customised <span
                class="__em gradient-text">the way you like</span></p>
        <br>
        <div class="gradient-hr"></div>
        <br>
        <p class="__tal __tlg">How it works</p>
        <br>
        <p class="__tal __tlg gradient-text">The video player</p>
        <br>
        <img src="../../player.webp" class="__shd __bo-grey-9 __bod" style="width: 900px; max-width: 100%;" alt="The video player">
        <br>
        <p class="__tal __b" style="font-size: 20px; ">The player can play any public video on YouTube. Whenever you
            want to add a video, just paste the URL into the bar in any format! Make the customisations you would like
            to the video and press "save", and the video is saved to your account - it's that simple</p>
        <br><br>
        <p class="__b __tal __tlg gradient-text">The icons</p>
        <br>
        <img src="../../icons.webp" class="__shd __bo-grey-9 __bod" style="width: 900px; max-width: 100%;" alt="The video player">
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
        <img src="../../playlists.webp" class="__shd __bo-grey-9 __bod" style="width: 900px; max-width: 100%;" alt="The video player">
        <br>
        <p class="__b __tal" style="font-size: 20px; ">Playlists are a great way to keep track of your favourite videos.
            Open the Sidebar to view all of your playlists, and press &nbsp; <svg fill="var(--grey_4)" class="__po"
                width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                <path
                    d="M20 15h4.071v2h-4.071v4.071h-2v-4.071h-4.071v-2h4.071v-4.071h2v4.071zm-8 6h-12v-2h12v2zm0-4.024h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z">
                </path>
            </svg> &nbsp; to create a new playlist. You can also play any playlist you want by pressing &nbsp; <svg
                fill="var(--grey_4)" class="__po" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd" clip-rule="evenodd">
                <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"></path>
            </svg> &nbsp; .</p>

        <br><br>
        <p class="__b __tal __tlg gradient-text">Tabs</p>
        <br>
        <img class="__shd __bo-grey-9 __bod" src="../../public/tabs.PNG" style="width: 900px; max-width: 100%;" alt="Tabs">
        <br>
        <p class="__b __tal" style="font-size: 20px; ">You have <strong>3</strong> main tabs to play your videos -
            <strong>favourites</strong>, <strong>current playlist</strong>, and <strong>all videos</strong>. You can
            reorder videos in the current playlist or in favourites by dragging & dropping them (update your
            preferences first to be able to do this).

            <br><br> Normally,
            videos loop infinitely by default. However, if you want to move on to the next video when your video ends,
            press &nbsp; <svg class="__po" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path d="M21 9h2v11h-17v3l-6-4 6-4v3h15v-9zm-18-3h15v3l6-4-6-4v3h-17v11h2v-9z">
                </path>
            </svg> .
            If you want the next video to be random, you can press &nbsp; <svg fill="black" class=""
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                    d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z">
                </path>
            </svg> &nbsp;
        </p>
        <br>
        <div class="gradient-hr"></div>
        <br>
        <p class="__b __tal __tmd">And that's pretty much it!</p>
        <br>
        <p class="__b __tal">Pretty simple, right? So go! Enjoy your videos & music!</p>
        <br>
        <button @click="finishTutorial" class="__padxs __po __bo-none __shd __bg-err-5 __hv-err-4 __hv __bdxs"><span
                class="__txt-grey-10">Finish tutorial 🎶</span>
        </button>
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
        },

        finishTutorial() {
            localStorage.removeItem("show_tutorial");
            this.$router.push('/')
        }
    }

}
</script>