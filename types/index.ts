export interface MenuItem {
  path: string
  titleKey: string
}

export interface NewsItem {
  _path: string
  title: string
  desc: string
  date: Date
  thumbnail: string
  thumb_video_webm: string
  thumb_video_mp4: string
}

export interface BuildInfo {
  version: string
  commit: string
  time: number
  branch: string
  env: 'preview' | 'master' | 'dev' | 'release'
}
