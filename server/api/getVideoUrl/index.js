const puppeteer = require('puppeteer')
const url = require('url')

exports.httpPostVideoUrl = {
  '/getVideoUrl': (req, res, next) => {
    let params = url(req.url, true)
    let result = get_video_urls(params.query.url)
    res.join({
      result: result,
      status: true
    })
  }
}

async function get_video_urls(url) {
  const brower = await puppeteer.launch()

  const page = await brower.newPage()

  html = await page.goto(url, { waitUntil: 'networkidle2' })

  iframes = page.frames

  var urls = iframes[2].evaluate(() => {
    urls = []
    try {
      urls.push(document.location.origin + main)
    } catch {}
    try {
      urls.push(window.parent.frames.MacPlayer.PlayUrl)
    } catch {}
    try {
      urls.push(document.querySelector('iframe').src)
    } catch {}
    try {
      urls.push(dp.options.video.quality[0].url || dp.options.video.url)
    } catch {}
    return urls.join(',')
  })

  await brower.close()

  return urls
}

get_video_urls()
