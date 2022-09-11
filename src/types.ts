export interface Post {
  path: string
  title: string
  show_desc: boolean
  desc: string
  subtitle: string
  show_subtitle: boolean
  author: string
  date: string
  image: string
  thumbnail: string
  thumb_video_webm: string
  thumb_video_mp4: string
}

export interface Constants {
  hostname: string
  websiteTitle: string
}
