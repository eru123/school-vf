<template>
  <div class="cover-n-profile">
    <div class="cover-photo">
      <img :src="acc.coverPhoto" />
    </div>
    <div class="default-photo">
      <img :src="acc.defaultPhoto" />
      <div class="upload-btn">Click ME</div>
    </div>
  </div>
</template>

<script>
import "@/styles/cover-n-profile.stylus";
export default {
  name: "CoverAndProfile",
  data: () => ({
    acc: {
      defaultPhoto:
        "https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png",
      coverPhoto:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxCQsn2Ft-OxHWzhsJACnYisCZy7mOb4Olw&usqp=CAU"
    }
  })
};
</script>
