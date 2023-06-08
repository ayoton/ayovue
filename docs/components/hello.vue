<template>
  <div class="title">{{ title }}</div>
  <div class="row">
    <p><slot></slot></p>
  </div>

  <div class="row">
    <div v-for="member in members" class="card">
      <div class="pic"><img :src="member.avatar" alt="" /></div>
      <div class="name">{{ member.name }}</div>
      <span>{{ member.title }}</span>
      <div class="social">
        <div v-for="lnk in member.links">
          <a v-if="lnk.icon == 'github'" :href="lnk.link"
            ><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
              <title>GitHub</title>
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              ></path>
            </svg>
          </a>
          <a v-if="lnk.icon == 'facebook'" :href="lnk.link">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
              <title>Facebook</title>
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              ></path>
            </svg>
          </a>
          <a v-if="lnk.icon == 'twitter'" :href="lnk.link">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon">
              <title>Twitter</title>
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['title', 'members']
}
</script>

<style scoped>
.card {
  width: 250px;
  min-height: 250px;
  background-color: var(--vp-c-bg-soft);
  padding: 10px;
  margin: 20px;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
}
.row {
  text-align: center;
  padding: 10px 0px;
}
.title {
  letter-spacing: -0.5px;
  line-height: 56px;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
  margin-top: 60px;
}
p {
  max-width: 592px;
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  padding: 10px;
  display: inline-block;
}
.name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
  font-weight: 600;
}
.pic {
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: rgb(247, 188, 188);
  display: inline-block;
  margin: 20px;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
}
span {
  padding: 4px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}
.social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
}
.icon {
  height: 20px;
  display: inline;
  fill: var(--vp-c-text-2);
  padding: 0px 6px;
}
</style>
